import { ethers } from "hardhat";
import { FellowFund } from "../../typechain-types/contracts/FellowFund";
import { fellowFundContractAddress } from "../utils/constants";
import { getPersonalWallet } from "../utils/wallet";

const fellowshipId = 1n;

export async function openFellowshipMarkets(fellowFund: FellowFund, fellowshipId: bigint) {
    console.log("\n#####################################################################");
    console.log("################### Fellowship Market Opening ###################");
    console.log("#####################################################################");

    await fellowFund.openFellowshipMarkets(fellowshipId);
    console.log("\n# Opening fellowship markets " + fellowshipId);
}

async function main() {
    const deployer = getPersonalWallet(ethers.provider);
    const fellowFund = await ethers.getContractAt("FellowFund", fellowFundContractAddress, deployer);
    await openFellowshipMarkets(fellowFund, fellowshipId);
    console.log("\n# Fellowship Market Opening Completed");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
