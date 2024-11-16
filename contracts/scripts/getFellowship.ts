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

export async function getAllFellowships(fellowFund: FellowFund) {
    const fellowshipCount = await fellowFund.fellowshipCount();
    for (let id = 0; id < fellowshipCount; id++) {
        const fellowship = await fellowFund.fellowships(id);
        console.log(fellowship);
    }
}

export async function getFellowship(fellowFund: FellowFund, id: BigNumberish) {
    const fellowship = await fellowFund.fellowships(id);
    console.log(fellowship);
}

async function main() {
    const fellowFund = await ethers.getContractAt("FellowFund", fellowFundContractAddress);
    await getAllFellowships(fellowFund);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
