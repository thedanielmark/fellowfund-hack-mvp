import { ethers } from "hardhat";
import { Wallet } from "ethers";
import { FellowFund } from "../typechain-types/contracts/FellowFund";
import { fellowFundContractAddress } from "./utils/constants";
import { fundIfLocalNetwork } from "./utils/network";
import { getPersonalWallet } from "./utils/wallet";

export async function applyToFellowship(deployer: Wallet): Promise<FellowFund> {
    console.log("\n#####################################################################");
    console.log("################### Fellowship Application ###################");
    console.log("#####################################################################");

    const fellowFund = await ethers.getContractAt("FellowFund", fellowFundContractAddress, deployer);

    console.log("\n# Deployment");
    console.log("FellowFund Address: ", await fellowFund.getAddress());
    return fellowFund;
}

async function main() {
    const deployer = getPersonalWallet(ethers.provider);
    await fundIfLocalNetwork([deployer.address]);
    const application = await applyToFellowship(deployer);
    console.log("\n# Fellowship Application Completed");
    console.log("Application: ", application);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
