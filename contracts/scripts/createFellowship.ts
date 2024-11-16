import { ethers } from "hardhat";
import { Wallet } from "ethers";
import { FellowFund } from "../typechain-types/contracts/FellowFund";
import { fellowFundContractAddress } from "./utils/constants";
import { fundIfLocalNetwork } from "./utils/network";
import { FellowshipStruct } from "../typechain-types/contracts/FellowFund";
import { getPersonalWallet } from "./utils/wallet";
import fs, { stat } from "fs";
import path from "path";

const fellowshipMetadataFilename = "fellowship-metadata.json";

const oneSecond = 1;
const oneMinute = 60 * oneSecond;
const oneHour = 60 * oneMinute;

const StatusCreated = 0;
const StatusAcceptingApplications = 1;
const StatusMarketOpen = 2;
const StatusEpochStarted = 3;
const StatusResolved = 4;

// Uncomment the fellowships you want to create
const fellowshipsToCreate = [
    "celo",
    // "flow",
    // "mantle",
    // "nounsDao",
    // "polygon",
    // "pushprotocol",
    // "scroll",
    // "vlayer",
    // "web3auth"
]

export async function createAllFellowships(deployer: Wallet) {
    for (const fellowshipDataDir of fellowshipsToCreate) {
        await createFellowship(deployer, fellowshipDataDir);
    }
}

export async function createFellowship(deployer: Wallet, fellowshipDataDir: string) {
    console.log("\n#####################################################################");
    console.log("################### Fellowship Creation ###################");
    console.log("#####################################################################");
    const fellowFund = await ethers.getContractAt("FellowFund", fellowFundContractAddress, deployer);

    const fellowshipMetadataJSON = getMetadataJSON(fellowshipDataDir);
    console.log("Creating fellowship: ", fellowshipMetadataJSON.name);
    const fellowshipMetadata = getCompactJSON(fellowshipMetadataJSON);
    const funds = getFunds(fellowshipDataDir);
    const currentTime = Math.floor(Date.now() / 1000);
    const applicationDeadline = currentTime + 2 * oneMinute;
    const marketDeadline = applicationDeadline + 2 * oneMinute;
    const epochEndTime = marketDeadline + 2 * oneMinute;
    await fellowFund.createFellowship(fellowshipMetadata, funds, applicationDeadline, marketDeadline, epochEndTime, { value: funds });
    console.log("\n# Deployment");
    console.log("Created fellowship: ", fellowshipMetadata);
}

function getMetadataJSON(fellowshipDataDir: string): any {
    const metadataPath = path.join(__dirname, "./data", fellowshipDataDir, "fellowship-metadata.json");
    const fellowshipMetadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
    return fellowshipMetadata;
}

function getCompactJSON(json: any): string {
    return JSON.stringify(json);
}

function getFunds(fellowshipDataDir: string): bigint {
    const filePath = path.join(__dirname, "./data", fellowshipDataDir, "fellowship.json");
    const fellowship = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return fellowship.funds;
}

async function main() {
    const deployer = getPersonalWallet(ethers.provider);
    await createAllFellowships(deployer);
    console.log("\n# Fellowship Creation Completed");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
