import { ethers } from "hardhat";
import { BigNumberish, Wallet } from "ethers";
import { FellowFund } from "../typechain-types/contracts/FellowFund";
import { fellowFundContractAddress } from "./utils/constants";
import { fundIfLocalNetwork } from "./utils/network";
import { FellowshipStruct } from "../typechain-types/contracts/FellowFund";
import { getPersonalWallet } from "./utils/wallet";
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

export async function getFellowship(id: BigNumberish) {
    const fellowFund = await ethers.getContractAt("FellowFund", fellowFundContractAddress);
    const fellowship = await fellowFund.fellowships(id);
    console.log(fellowship);
}

async function main() {
    const fellowFund = await ethers.getContractAt("FellowFund", fellowFundContractAddress);
    await getFellowship(2);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
