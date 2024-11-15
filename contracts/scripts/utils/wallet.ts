import { Wallet } from "ethers";
import { Provider } from "ethers";
import { vars } from "hardhat/config";

export const PRIVATE_KEY_1 = vars.has("PRIVATE_KEY_1") ? vars.get("PRIVATE_KEY_1") : (() => { throw new Error("PRIVATE_KEY_1 is not set in environment variables"); })();

export function getPersonalWallet(provider: Provider): Wallet {
    return new Wallet(PRIVATE_KEY_1, provider);
}
