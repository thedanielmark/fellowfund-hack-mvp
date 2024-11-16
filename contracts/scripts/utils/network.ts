import { ethers } from "hardhat";
import { Network } from "ethers";
import { fundAddress } from "./funding";

const HARDHAT_LOCAL_NETWORK_CHAIN_ID = 1n;
const HARDHAT_DEFAULT_PROVIDER_NETWORK_CHAIN_ID = 31337n;

export function isLocalNetwork(network: Network) {
    return network.chainId === HARDHAT_LOCAL_NETWORK_CHAIN_ID || network.chainId === HARDHAT_DEFAULT_PROVIDER_NETWORK_CHAIN_ID;
}

export async function fundIfLocalNetwork(addresses: string[]) {
    const network = await ethers.provider.getNetwork();
    if (isLocalNetwork(network)) {
        console.log("\n# Funding");
        const [signer01] = await ethers.getSigners();
        for (const address of addresses) {
            await fundAddress(signer01, address, ethers.parseEther("1000"));
        }
    }
}
