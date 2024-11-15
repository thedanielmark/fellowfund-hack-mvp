import { HardhatUserConfig, vars } from "hardhat/config";
import '@typechain/hardhat';
import "@nomicfoundation/hardhat-toolbox";

const PRIVATE_KEY_1 = vars.has("PRIVATE_KEY_1") ? vars.get("PRIVATE_KEY_1") : (() => { throw new Error("PRIVATE_KEY_1 is not set in environment variables"); })();


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
    settings: {
      evmVersion: "paris",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  typechain: {
    outDir: "typechain-types"
  },
  defaultNetwork: 'mantleSepolia', // chosen by default when network isn't specified while running Hardhat
  networks: {
    mantle: {
      url: 'https://rpc.mantle.xyz', //mainnet
      chainId: 5000,
      accounts: [PRIVATE_KEY_1],
      // Use the default configuration
    },
    mantleSepolia: {
      url: 'https://rpc.sepolia.mantle.xyz', // Sepolia Testnet
      chainId: 5003,
      accounts: [PRIVATE_KEY_1],
      gasPrice: 20000000, // specify the network's minimum basefee as the gas price
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [PRIVATE_KEY_1],
    },
    optimism_sepolia: {
      url: `https://opt-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [PRIVATE_KEY_1],
    },
  },
};

export default config;
