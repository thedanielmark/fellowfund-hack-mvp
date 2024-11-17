import { CHAIN_NAMESPACES } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import { useWeb3Auth } from "@web3auth/modal-react-hooks";

export const switchChain = async () => {
  const { addAndSwitchChain } = useWeb3Auth();

  await addAndSwitchChain({
    chainId: "0xaef3",
    displayName: "Celo Alfrajoes",
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    tickerName: "Sepolia",
    ticker: "ETH",
    decimals: 18,
    rpcTarget: "https://alfajores-forno.celo-testnet.org",
    blockExplorerUrl: "https://sepolia.etherscan.io",
    logo: "https://images.toruswallet.io/eth.svg",
    isTestnet: true,
  });
};
