import { ethers } from "hardhat";
import { Wallet } from "ethers";
import { vars } from "hardhat/config";
import { FellowFund } from "../typechain-types/contracts/FellowFund";
import { fundIfLocalNetwork } from "./utils/network";
import { getPersonalWallet } from "./utils/wallet";

export const FELLOW_FUND_ADDRESS = vars.has("FELLOW_FUND_ADDRESS") ? vars.get("FELLOW_FUND_ADDRESS") : "";

async function getFellowFund(deployer: Wallet): Promise<FellowFund> {
    return ethers.getContractAt("FellowFund", FELLOW_FUND_ADDRESS, deployer);
}

async function main() {
    const deployer = getPersonalWallet(ethers.provider);
    await fundIfLocalNetwork([deployer.address]);
    const fellowFund = await getFellowFund(deployer);
    // fellowFund.createFellowship();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
