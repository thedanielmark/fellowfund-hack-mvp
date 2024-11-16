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
  networks: {
    polygonAmoy: {
      url: "https://polygon-amoy.drpc.org",
      chainId: 80002,
      accounts: [PRIVATE_KEY_1],
    },
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
      gasPrice: 60000000, // specify the network's minimum basefee as the gas price
    },
    unichain: {
      url: "https://sepolia.unichain.org",
      chainId: 1301,
      accounts: [PRIVATE_KEY_1],
    },
    flowTestnet: {
      url: "https://testnet.evm.nodes.onflow.org",
      chainId: 545,
      accounts: [PRIVATE_KEY_1],
    },
    bitkubTestnet: {
      url: "wss://wss-testnet.bitkubchain.io",
      chainId: 25925,
      accounts: [PRIVATE_KEY_1],
    },
    lineaSepolia: {
      url: "https://rpc.sepolia.linea.build",
      chainId: 59141,
      accounts: [PRIVATE_KEY_1],
    },
    rootstockTestnet: {
      url: "https://mycrypto.testnet.rsk.co",
      chainId: 31,
      accounts: [PRIVATE_KEY_1],
    },
    celoAlfajoresTestnet: {
      url: "https://alfajores-forno.celo-testnet.org",
      chainId: 44787,
      accounts: [PRIVATE_KEY_1],
    },
    neoxTestnet: {
      url: "https://testnet.rpc.banelabs.org",
      chainId: 12227332,
      accounts: [PRIVATE_KEY_1],
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
