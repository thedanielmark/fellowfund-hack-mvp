import { ethers } from "hardhat";
import { Wallet } from "ethers";
import { FellowFund } from "../../typechain-types/contracts/FellowFund";
import { fellowFundContractAddress } from "../utils/constants";
import { fundIfLocalNetwork } from "../utils/network";
import { getPersonalWallet } from "../utils/wallet";

const fellowshipId = 0;
const applicationMetadata = ""

export async function applyToFellowship(fellowFund: FellowFund, deployer: Wallet): Promise<bigint> {
    console.log("\n#####################################################################");
    console.log("################### Fellowship Application ###################");
    console.log("#####################################################################");

    await fellowFund.applyToFellowship(applicationMetadata);

    console.log("\n# Deployment");
    return fellowFund;
}

async function main() {
    const deployer = getPersonalWallet(ethers.provider);
    const fellowFund = await ethers.getContractAt("FellowFund", fellowFundContractAddress, deployer);
    const application = await applyToFellowship(fellowFund, deployer);
    console.log("\n# Fellowship Application Completed");
    console.log("Application: ", application);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
