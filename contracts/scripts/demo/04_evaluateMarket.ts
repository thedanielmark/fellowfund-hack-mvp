import { ethers } from "hardhat";
import { Wallet } from "ethers";
import { FellowFund } from "../../typechain-types/contracts/FellowFund";
import { fellowFundContractAddress } from "../utils/constants";
import { getPersonalWallet } from "../utils/wallet";

const fellowshipId = 0n;
const applicantId = 0n;

export async function bet(fellowFund: FellowFund, fellowshipId: bigint, applicantId: bigint, amount: bigint, yesBet: boolean, bidder: Wallet) {
    console.log("################### Fellowship Market Bet ###################");
    const marketAddress = await fellowFund.markets(fellowshipId, applicantId);
    const market = await ethers.getContractAt("Market", marketAddress, bidder);
    let bet = 0;
    if (!yesBet) {
        bet = 1;
    }
    await market.placeBet(bet, { value: amount });
    console.log("# Bet placed for fellowship " + fellowshipId + " and applicant " + applicantId + " with amount " + amount + " and bet " + bet);
}

async function main() {
    const deployer = getPersonalWallet(ethers.provider);
    const fellowFund = await ethers.getContractAt("FellowFund", fellowFundContractAddress, deployer);
    await bet(fellowFund, fellowshipId, applicantId, 1000n, false, deployer);
    // await bet(fellowFund, fellowshipId, applicantId, 1000n, true, deployer);
    // await bet(fellowFund, fellowshipId, applicantId, 1000n, false, deployer);
    console.log("\n# Fellowship Market Bets Completed");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
