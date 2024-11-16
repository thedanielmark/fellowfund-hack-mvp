import { ethers } from "hardhat";
import { BigNumberish, Wallet } from "ethers";
import { FellowFund } from "../../typechain-types/contracts/FellowFund";
import { fellowFundContractAddress } from "../utils/constants";
import { fundIfLocalNetwork } from "../utils/network";
import { FellowshipStruct } from "../../typechain-types/contracts/FellowFund";
import { getPersonalWallet } from "../utils/wallet";
import fs, { stat } from "fs";
import path from "path";

const dir = "nounsDao";
const fellowshipMetadataFilename = "fellowship-metadata.json";

const oneSecond = 1;
const oneMinute = 60 * oneSecond;
const oneHour = 60 * oneMinute;

const StatusCreated = 0;
const StatusAcceptingApplications = 1;
const StatusMarketOpen = 2;
const StatusEpochStarted = 3;
const StatusResolved = 4;

export async function getAllApplications(fellowFund: FellowFund, fellowshipId: bigint) {
    return getApplication(fellowFund, fellowshipId, 0);
}

export async function getApplication(fellowFund: FellowFund, fellowshipId: bigint, id: BigNumberish) {
    const application = await fellowFund.applications(fellowshipId, id);
    console.log(application);
}

async function main() {
    const fellowFund = await ethers.getContractAt("FellowFund", fellowFundContractAddress);
    await getAllApplications(fellowFund, 0n);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
