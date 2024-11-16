import { ethers } from "hardhat";
import { Wallet } from "ethers";
import { FellowFund } from "../typechain-types/contracts/FellowFund";
import { fellowFundContractAddress } from "./utils/constants";
import { fundIfLocalNetwork } from "./utils/network";
import {FellowshipStruct} from "../typechain-types/contracts/FellowFund";
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

export async function createFellowship(deployer: Wallet) {
    console.log("\n#####################################################################");
    console.log("################### Fellowship Creation ###################");
    console.log("#####################################################################");
    const fellowFund = await ethers.getContractAt("FellowFund", fellowFundContractAddress, deployer);

    const fellowshipMetadata = getMetadata();
    const funds = 1000;
    const currentTime = Math.floor(Date.now() / 1000);
    const applicationDeadline = currentTime + 2*oneMinute;
    const marketDeadline = applicationDeadline + 2*oneMinute;
    const epochEndTime = marketDeadline + 2*oneMinute;
    const status = StatusCreated;
    const maxApplicants = 10;
    const fellowship = {metadata: fellowshipMetadata, funds, applicationDeadline, marketDeadline, epochEndTime, status, maxApplicants};
    await fellowFund.createFellowship(fellowship, {value: funds});

    console.log("\n# Deployment");
    console.log("FellowFund Address: ", await fellowFund.getAddress());
}

function getMetadata(): string {
    const metadataPath = path.join(__dirname, "./data", dir, "fellowship-metadata.json");
    const metadataNounsDaoFellowship = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
    const compactMetadata = JSON.stringify(metadataNounsDaoFellowship);
    return compactMetadata;
}

async function main() {
    const deployer = getPersonalWallet(ethers.provider);
    await createFellowship(deployer);
    console.log("\n# Fellowship Creation Completed");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
