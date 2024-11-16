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

  // Test fellowship parameters
  const oneDay = 24 * 60 * 60;
  let applicationDeadline: number;
  let marketDeadline: number;
  let epochEndTime: number;

  beforeEach(async function () {
    [owner, operator, verifier, applicant1, applicant2, bettor1, bettor2] =
      await ethers.getSigners();

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
      const fellowship = {
        metadata: "Test Fellowship",
        funds: ethers.parseEther("1"),
        applicationDeadline,
        marketDeadline,
        epochEndTime,
        status: 0, // Created
        maxApplicants: 5,
      };

      await expect(
        fellowFund.createFellowship(fellowship, { value: fellowship.funds })
      )
        .to.emit(fellowFund, "FellowshipCreated")
        .withArgs(0, fellowship);

      const createdFellowship = await fellowFund.fellowships(0);
      expect(createdFellowship.metadata).to.equal(fellowship.metadata);
      expect(createdFellowship.funds).to.equal(fellowship.funds);
    });

    it("should allow applications within deadline", async function () {
      // Create fellowship first
      const fellowship = {
        metadata: "Test Fellowship",
        funds: ethers.parseEther("1"),
        applicationDeadline,
        marketDeadline,
        epochEndTime,
        status: 0,
        maxApplicants: 5,
      };

      await fellowFund.createFellowship(fellowship, {
        value: fellowship.funds,
      });

      // Apply to fellowship
      await expect(
        fellowFund.connect(applicant1).applyToFellowship(0, "Application 1")
      )
        .to.emit(fellowFund, "ApplicationSubmitted")
        .withArgs(0, 0, applicant1.address);

      const application = await fellowFund.applications(0, 0);
      expect(application.applicant).to.equal(applicant1.address);
      expect(application.metadata).to.equal("Application 1");
    });
  });

  describe("Market Operations", function () {
    beforeEach(async function () {
      // Create fellowship and submit applications
      const fellowship = {
        metadata: "Test Fellowship",
        funds: ethers.parseEther("1"),
        applicationDeadline,
        marketDeadline,
        epochEndTime,
        status: 0,
        maxApplicants: 5,
      };

      await fellowFund.createFellowship(fellowship, {
        value: fellowship.funds,
      });
      await fellowFund
        .connect(applicant1)
        .applyToFellowship(0, "Application 1");
      await fellowFund
        .connect(applicant2)
        .applyToFellowship(0, "Application 2");
    });

    it("should open markets for applications", async function () {
      await time.increaseTo(applicationDeadline + 1);

      await expect(
        fellowFund.connect(operator).openFellowshipMarkets(0)
      ).to.emit(fellowFund, "MarketOpened");

      const fellowship = await fellowFund.fellowships(0);
      expect(fellowship.status).to.equal(2); // MarketOpen
    });

    it("should evaluate markets and distribute grants", async function () {
      await time.increaseTo(applicationDeadline + 1);
      await fellowFund.connect(operator).openFellowshipMarkets(0);

      // Get market address and place bets
      const marketAddress = await fellowFund.markets(0, 0);
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
      await fellowFund.connect(operator).evaluateMarket(0);

      const application = await fellowFund.applications(0, 0);
      expect(application.accepted).to.be.true;

      // Check if grant was distributed
      const finalBalance = await ethers.provider.getBalance(applicant1.address);
      expect(finalBalance - initialBalance).to.equal(ethers.parseEther("1")); // Full grant amount
    });
  });

  describe("Fellowship Resolution", function () {
    it("should resolve fellowship and distribute market winnings", async function () {
      // Setup fellowship and complete full cycle
      const fellowship = {
        metadata: "Test Fellowship",
        funds: ethers.parseEther("1"),
        applicationDeadline,
        marketDeadline,
        epochEndTime,
        status: 0,
        maxApplicants: 5,
      };

      await fellowFund.createFellowship(fellowship, {
        value: fellowship.funds,
      });
      await fellowFund
        .connect(applicant1)
        .applyToFellowship(0, "Application 1");

      await time.increaseTo(applicationDeadline + 1);
      await fellowFund.connect(operator).openFellowshipMarkets(0);

      const marketAddress = await fellowFund.markets(0, 0);
      const market = (await ethers.getContractAt(
        "Market",
        marketAddress
      )) as Market;

      // Place bets
      await market
        .connect(bettor1)
        .placeBet(0, { value: ethers.parseEther("0.1") }); // Yes bet
      await market
        .connect(bettor2)
        .placeBet(1, { value: ethers.parseEther("0.05") }); // No bet

      await time.increaseTo(marketDeadline + 1);
      await fellowFund.connect(operator).evaluateMarket(0);

      // Verify achievement through verifier
      const mockProof = "0x00";
      await fellowFund
        .connect(verifier)
        .setApplicantImpact(0, 0, true, mockProof);

      await time.increaseTo(epochEndTime + 1);
      await expect(fellowFund.connect(operator).resolveFellowship(0))
        .to.emit(fellowFund, "FellowshipResolved")
        .withArgs(0);

      const resolvedFellowship = await fellowFund.fellowships(0);
      expect(resolvedFellowship.status).to.equal(4); // Resolved
    });
  });
});
