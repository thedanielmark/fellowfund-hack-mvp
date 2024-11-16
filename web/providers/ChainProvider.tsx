"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Chain type and data
export interface Chain {
  name: string;
  chainId: any;
  logo: string;
  graphURL: string;
  deployedAddress: string;
  rpcURL: string;
}

export const chains: Chain[] = [
  {
    name: "Polygon Amoy",
    chainId: 0x13882,
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    graphURL: "https://api.studio.thegraph.com/query/73364/fello-fund/latest",
    deployedAddress: "0x2323Cd8097708f4C8D4BA37aE72644Af712bAD76",
    rpcURL: "https://polygon-amoy.drpc.org",
  },
  {
    name: "Flow Testnet",
    chainId: 0x221,
    logo: "https://cryptologos.cc/logos/flow-flow-logo.png",
    graphURL: "https://api.studio.thegraph.com/query/73364/fello-fund/latest",
    deployedAddress: "0x2323Cd8097708f4C8D4BA37aE72644Af712bAD76",
    rpcURL: "https://testnet.evm.nodes.onflow.org",
  },
  {
    name: "Mantle Sepolia",
    chainId: 0x138b,
    logo: "https://cryptologos.cc/logos/mantle-mnt-logo.png",
    graphURL: "https://api.studio.thegraph.com/query/73364/fello-fund/latest",
    deployedAddress: "0x2323Cd8097708f4C8D4BA37aE72644Af712bAD76",
    rpcURL: "https://rpc.sepolia.mantle.xyz",
  },
  {
    name: "Rootstock Testnet",
    chainId: 0x1f,
    logo: "https://cryptologos.cc/logos/rootstock-rsk-logo.png",
    graphURL: "https://api.studio.thegraph.com/query/73364/fello-fund/latest",
    deployedAddress: "0x0810B2d3C23d7207C6B15fb6B3303e99561cb80f",
    rpcURL: "https://public-node.testnet.rsk.co",
  },
];

interface ChainContextType {
  selectedChain: Chain | null;
  setSelectedChain: (chain: Chain) => void;
}

const ChainContext = createContext<ChainContextType | undefined>(undefined);

interface ChainProviderProps {
  children: ReactNode;
}

export const ChainProvider: React.FC<ChainProviderProps> = ({ children }) => {
  // Set the first chain as the default value
  const [selectedChain, setSelectedChain] = useState<Chain>(chains[0]);

  return (
    <ChainContext.Provider value={{ selectedChain, setSelectedChain }}>
      {children}
    </ChainContext.Provider>
  );
};

export const useChainContext = (): ChainContextType => {
  const context = useContext(ChainContext);
  if (!context) {
    throw new Error("useChainContext must be used within a ChainProvider");
  }
  return context;
};
