import { ethers } from "hardhat";
import { Wallet } from "ethers";
import { vars } from "hardhat/config";
import { GithubVerificationRegistry } from "../typechain-types/contracts/vlayer/GithubVerificationRegistry.sol";
import { fundIfLocalNetwork } from "./utils/network";
import { getPersonalWallet } from "./utils/wallet";

export const REGISTRY_ADDRESS = vars.has("REGISTRY_ADDRESS") ? vars.get("REGISTRY_ADDRESS") : "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const VERIFIER_ADDRESS = vars.has("VERIFIER_ADDRESS") ? vars.get("VERIFIER_ADDRESS") : "0x4b4b30e2E7c6463b03CdFFD6c42329D357205334";

async function getRegistry(): Promise<GithubVerificationRegistry> {
    return await ethers.getContractAt("GithubVerificationRegistry", REGISTRY_ADDRESS);
}

async function main() {
    console.log("registry at: " + REGISTRY_ADDRESS);
    const deployer = getPersonalWallet(ethers.provider);
    await fundIfLocalNetwork([deployer.address]);
    const registry = await getRegistry();
    console.log(await registry.getAddress());
    const tx = await registry.setProofVerifier(VERIFIER_ADDRESS);
    console.log(await registry.proofVerifier());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
