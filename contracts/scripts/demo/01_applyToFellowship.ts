import { ethers } from "hardhat";
import { FellowFund } from "../../typechain-types/contracts/FellowFund";
import { fellowFundContractAddress } from "../utils/constants";
import { getCompactJSON } from "../utils/json";
import { getPersonalWallet } from "../utils/wallet";
import fs from "fs";
import path from "path";

const fellowshipId = 0;
const applicantAddress = "0x795043fa0d653d23904C8b8C3fE7eA4FCB71B934"

export async function applyToFellowship(fellowFund: FellowFund) {
    console.log("\n#####################################################################");
    console.log("################### Fellowship Application ###################");
    console.log("#####################################################################");

    const applicationMetadata = getApplicationMetadata();
    await fellowFund.applyToFellowshipWithCustomAddress(fellowshipId, getCompactJSON(applicationMetadata), applicantAddress);

    console.log("\n# Applied to Fellowship " + fellowshipId);
    console.log("\n# Application Metadata:");
    console.log(applicationMetadata);
    console.log("\n# Applicant Address:" + applicantAddress);
}

function getApplicationMetadata(): any {
    const metadataPath = path.join(__dirname, "../data", "application-metadata.json");
    const fellowshipMetadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
    return fellowshipMetadata;
}

async function main() {
    const deployer = getPersonalWallet(ethers.provider);
    const fellowFund = await ethers.getContractAt("FellowFund", fellowFundContractAddress, deployer);
    await applyToFellowship(fellowFund);
    console.log("\n# Fellowship Application Completed");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
