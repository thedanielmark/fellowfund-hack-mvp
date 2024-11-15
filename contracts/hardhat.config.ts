import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-solhint";
import '@typechain/hardhat'
import '@openzeppelin/hardhat-upgrades'
import '@nomicfoundation/hardhat-chai-matchers'
import 'hardhat-storage-layout'

const PRIVATE_KEY_1 = vars.has("PRIVATE_KEY_1") ? vars.get("PRIVATE_KEY_1") : (() => { throw new Error("PRIVATE_KEY_1 is not set in environment variables"); })();

/** @type import('hardhat/config').HardhatUserConfig */
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
  // etherscan: {
  //   apiKey: {
  //     sepolia: process.env.ETHERSCAN_API_KEY,
  //     openCampusCodex: process.env.OPENCAMPUS_CODEX_API_KEY,
  //   },
  //   customChains: [
  //     {
  //       network: "openCampusCodex",
  //       chainId: 656476,
  //       urls: {
  //         apiURL: "https://opencampus-codex.blockscout.com/api",
  //         browserURL: "https://opencampus-codex.blockscout.com",
  //       },
  //     },
  //   ],
  // },
};

export default config;
