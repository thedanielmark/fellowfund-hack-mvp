import { expect } from "chai";
import { ethers } from "hardhat";
import { time } from "@nomicfoundation/hardhat-network-helpers";
import { FellowFund, Market } from "../typechain-types";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";

describe("FellowFund", function () {
  let fellowFund: FellowFund;
  let owner: SignerWithAddress;
  let operator: SignerWithAddress;
  let verifier: SignerWithAddress;
  let applicant1: SignerWithAddress;
  let applicant2: SignerWithAddress;
  let bettor1: SignerWithAddress;
  let bettor2: SignerWithAddress;
  let bettor3: SignerWithAddress;

  // Test fellowship parameters
  const oneDay = 24 * 60 * 60;
  const defaultMockStartingTimestamp = 1731754351;
  let applicationDeadline: number = defaultMockStartingTimestamp + oneDay;
  let marketDeadline: number = applicationDeadline + oneDay;
  let epochEndTime: number = marketDeadline + oneDay;

  enum FellowshipStatus {
    Created,
    AcceptingApplications,
    MarketOpen,
    EpochStarted,
    Resolved
  }

  enum Side {
    Yes,
    No
  }

  const defaultFellowship = {
    metadata: "Test Fellowship",
    funds: ethers.parseEther("1"),
    applicationDeadline: applicationDeadline,
    marketDeadline,
    epochEndTime,
    status: FellowshipStatus.Created,
    maxApplicants: 5,
  };

  async function newDefaultFellowship() {
    let fellowship = defaultFellowship;
    fellowship.applicationDeadline = await time.latest() + oneDay;
    fellowship.marketDeadline = fellowship.applicationDeadline + oneDay;
    fellowship.epochEndTime = fellowship.marketDeadline + oneDay;
    return fellowship;
  }

  async function createDefaultFellowship() {
    const fellowship = await newDefaultFellowship();
    await fellowFund.createFellowship(fellowship, {
      value: fellowship.funds,
    });
    return (await fellowFund.fellowshipCount()) - 1n;
  }

  beforeEach(async function () {
    [owner, operator, verifier, applicant1, applicant2, bettor1, bettor2, bettor3] = await ethers.getSigners();

    const FellowFund = await ethers.getContractFactory("FellowFund");
    fellowFund = await FellowFund.deploy(verifier.address, operator.address);

    // Set timestamps for deadlines
    const currentTimestamp = await time.latest();
    applicationDeadline = currentTimestamp + oneDay;
    marketDeadline = applicationDeadline + oneDay;
    epochEndTime = marketDeadline + oneDay;
  });

  describe("Fellowship Creation and Application", function () {
    it("should create a fellowship with correct parameters", async function () {
      const fellowship = await newDefaultFellowship();
      let expectedFellowship = fellowship;
      expectedFellowship.status = FellowshipStatus.AcceptingApplications;

      const createTx = await fellowFund.createFellowship(fellowship, { value: fellowship.funds })
      expect(createTx).to.emit(fellowFund, "FellowshipCreated").withArgs(0, expectedFellowship);

      const createdFellowship = await fellowFund.fellowships(0);
      expect(createdFellowship.metadata).to.equal(fellowship.metadata);
      expect(createdFellowship.funds).to.equal(fellowship.funds);
      expect(await ethers.provider.getBalance(await fellowFund.getAddress())).to.equal(fellowship.funds);
    });

    it("should allow applications within deadline", async function () {
      const fellowshipId = await createDefaultFellowship();

      const applicationId = 0;
      const applicationMetadata = "Application 1";
      // Apply to fellowship
      await expect(
        fellowFund.connect(applicant1).applyToFellowship(fellowshipId, applicationMetadata)
      )
        .to.emit(fellowFund, "ApplicationSubmitted")
        .withArgs(fellowshipId, applicationId, applicant1.address, applicationMetadata);

      const application = await fellowFund.applications(fellowshipId, applicationId);
      expect(application.applicant).to.equal(applicant1.address);
      expect(application.metadata).to.equal(applicationMetadata);
    });
  });

  describe("Market Operations", function () {
    beforeEach(async function () {
      // Create fellowship and submit applications
      const fellowshipId = await createDefaultFellowship();

      await fellowFund
        .connect(applicant1)
        .applyToFellowship(fellowshipId, "Application 1");
      await fellowFund
        .connect(applicant2)
        .applyToFellowship(fellowshipId, "Application 2");
    });

    it("should open markets for applications", async function () {
      await time.increaseTo(applicationDeadline + 1);

      const fellowshipId = 0;

      await expect(
        fellowFund.connect(operator).openFellowshipMarkets(fellowshipId)
      ).to.emit(fellowFund, "MarketOpened");

      const fellowship = await fellowFund.fellowships(fellowshipId);
      expect(fellowship.status).to.equal(FellowshipStatus.MarketOpen);
    });

    it("should evaluate markets and distribute grants", async function () {
      await time.increaseTo(applicationDeadline + 1);
      const fellowshipId = 0;
      const applicationId = 0;
      await fellowFund.connect(operator).openFellowshipMarkets(fellowshipId);

      // Get market address and place bets
      const marketAddress = await fellowFund.markets(fellowshipId, applicationId);
      const market = (await ethers.getContractAt(
        "Market",
        marketAddress
      )) as Market;

      await market
        .connect(bettor1)
        .placeBet(0, { value: ethers.parseEther("0.1") }); // Yes bet
      await market
        .connect(bettor2)
        .placeBet(1, { value: ethers.parseEther("0.05") }); // No bet

      await time.increaseTo(marketDeadline + 1);

      const initialBalance = await ethers.provider.getBalance(
        applicant1.address
      );
      await fellowFund.connect(operator).evaluateMarket(fellowshipId);

      const application = await fellowFund.applications(fellowshipId, applicationId);
      expect(application.accepted).to.be.true;

      // Check if grant was distributed
      const finalBalance = await ethers.provider.getBalance(applicant1.address);
      expect(finalBalance - initialBalance).to.equal(ethers.parseEther("1")); // Full grant amount
    });
  });

  describe("Fellowship Resolution", function () {
    it("should resolve fellowship and distribute market winnings", async function () {
      const fellowshipId = await createDefaultFellowship();

      const applicationId = 0;
      await fellowFund
        .connect(applicant1)
        .applyToFellowship(applicationId, "Application 1");

      await time.increaseTo(applicationDeadline + 1);
      await fellowFund.connect(operator).openFellowshipMarkets(fellowshipId);

      const marketAddress = await fellowFund.markets(fellowshipId, applicationId);
      const market = (await ethers.getContractAt(
        "Market",
        marketAddress
      )) as Market;

      // Place bets
      let yesBetAmount = 0n;
      let noBetAmount = 0n;
      const yesBetBidder1 = ethers.parseEther("0.1")
      yesBetAmount += yesBetBidder1;
      const noBetBidder2 = ethers.parseEther("0.05")
      noBetAmount += noBetBidder2;
      const noBetBidder3 = ethers.parseEther("0.32")
      noBetAmount += noBetBidder3;
      let totalBetAmount = yesBetAmount + noBetAmount;
      expect(noBetAmount).to.be.greaterThan(yesBetAmount);

      await market
        .connect(bettor1)
        .placeBet(Side.Yes, { value: yesBetBidder1 });
      await market
        .connect(bettor2)
        .placeBet(Side.No, { value: noBetBidder2 });
      await market
        .connect(bettor3)
        .placeBet(Side.No, { value: noBetBidder3 });

      expect(await market.getBet(Side.Yes)).to.be.equal(yesBetAmount);
      expect(await market.getBet(Side.No)).to.be.equal(noBetAmount);
      expect(await ethers.provider.getBalance(await market.getAddress())).to.equal(totalBetAmount);

      await time.increaseTo(marketDeadline + 1);
      await fellowFund.connect(operator).evaluateMarket(fellowshipId);

      const balanceBeforeResolveBettor1 = await ethers.provider.getBalance(bettor1.address);
      const balanceBeforeResolveBettor2 = await ethers.provider.getBalance(bettor2.address);
      const balanceBeforeResolveBettor3 = await ethers.provider.getBalance(bettor3.address);

      // Verify achievement through verifier -> Achieved=true
      const mockProof = "0x00";
      await fellowFund
        .connect(verifier)
        .setApplicantImpact(fellowshipId, applicationId, true, mockProof);

      await time.increaseTo(epochEndTime + 1);
      await expect(fellowFund.connect(operator).resolveFellowship(fellowshipId))
        .to.emit(fellowFund, "FellowshipResolved")
        .withArgs(fellowshipId);


      const resolvedFellowship = await fellowFund.fellowships(fellowshipId);
      expect(resolvedFellowship.status).to.equal(FellowshipStatus.Resolved);

      expect(await ethers.provider.getBalance(await market.getAddress())).to.equal(0n);
      expect(await ethers.provider.getBalance(bettor1.address)).to.equal(balanceBeforeResolveBettor1 + totalBetAmount);
      expect(await ethers.provider.getBalance(bettor2.address)).to.equal(balanceBeforeResolveBettor2);
      expect(await ethers.provider.getBalance(bettor3.address)).to.equal(balanceBeforeResolveBettor3);
    });

    it("should resolve fellowship and distribute market winnings to multiple winners", async function () {
      const fellowshipId = await createDefaultFellowship();

      const applicationId = 0;
      await fellowFund
        .connect(applicant1)
        .applyToFellowship(applicationId, "Application 1");

      await time.increaseTo(applicationDeadline + 1);
      await fellowFund.connect(operator).openFellowshipMarkets(fellowshipId);

      const marketAddress = await fellowFund.markets(fellowshipId, applicationId);
      const market = (await ethers.getContractAt(
        "Market",
        marketAddress
      )) as Market;

      // Place bets
      let yesBetAmount = 0n;
      let noBetAmount = 0n;
      const yesBetBidder1 = ethers.parseEther("0.1")
      yesBetAmount += yesBetBidder1;
      const noBetBidder2 = ethers.parseEther("0.05")
      noBetAmount += noBetBidder2;
      const noBetBidder3 = ethers.parseEther("0.02")
      noBetAmount += noBetBidder3;
      let totalBetAmount = yesBetAmount + noBetAmount;
      expect(noBetAmount).to.be.lessThan(yesBetAmount);

      await market
        .connect(bettor1)
        .placeBet(Side.Yes, { value: yesBetBidder1 });
      await market
        .connect(bettor2)
        .placeBet(Side.No, { value: noBetBidder2 });
      await market
        .connect(bettor3)
        .placeBet(Side.No, { value: noBetBidder3 });

      expect(await market.getBet(Side.Yes)).to.be.equal(yesBetAmount);
      expect(await market.getBet(Side.No)).to.be.equal(noBetAmount);
      expect(await ethers.provider.getBalance(await market.getAddress())).to.equal(totalBetAmount);

      await time.increaseTo(marketDeadline + 1);
      await fellowFund.connect(operator).evaluateMarket(fellowshipId);

      const balanceBeforeResolveMarket = await ethers.provider.getBalance(await market.getAddress());
      expect(balanceBeforeResolveMarket).to.be.equal(totalBetAmount);
      const balanceBeforeResolveBettor1 = await ethers.provider.getBalance(bettor1.address);
      const balanceBeforeResolveBettor2 = await ethers.provider.getBalance(bettor2.address);
      const balanceBeforeResolveBettor3 = await ethers.provider.getBalance(bettor3.address);

      // Verify achievement through verifier -> Achieved=true
      const mockProof = "0x00";
      await fellowFund
        .connect(verifier)
        .setApplicantImpact(fellowshipId, applicationId, false, mockProof);

      await time.increaseTo(epochEndTime + 1);
      await expect(fellowFund.connect(operator).resolveFellowship(fellowshipId))
        .to.emit(fellowFund, "FellowshipResolved")
        .withArgs(fellowshipId);

      const resolvedFellowship = await fellowFund.fellowships(fellowshipId);
      expect(resolvedFellowship.status).to.equal(FellowshipStatus.Resolved);

      const factor = ethers.parseEther("1");

      const winningPercentageBidder2 = noBetBidder2 * factor / noBetAmount;
      const winningsBidder2 = winningPercentageBidder2 * totalBetAmount / factor;
      const winningPercentageBidder3 = noBetBidder3 * factor / noBetAmount;
      const winningsBidder3 = winningPercentageBidder3 * totalBetAmount / factor;

      expect(await ethers.provider.getBalance(await market.getAddress())).to.equal(totalBetAmount - winningsBidder2 - winningsBidder3);
      expect(await ethers.provider.getBalance(bettor1.address)).to.equal(balanceBeforeResolveBettor1);

      expect(await ethers.provider.getBalance(bettor2.address)).to.equal(balanceBeforeResolveBettor2 + winningsBidder2);
      expect(await ethers.provider.getBalance(bettor3.address)).to.equal(balanceBeforeResolveBettor3 + winningsBidder3);
    });
  });
});

