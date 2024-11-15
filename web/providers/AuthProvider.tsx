/* eslint-disable no-console */
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { CHAIN_NAMESPACES, IProvider, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { Web3Auth } from "@web3auth/modal";

const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || "";

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0xafa",
  rpcTarget:
    "https://eth-sepolia.g.alchemy.com/v2/4aXwWgRAyOxgQdQftRqG7yJ5LMumJwmP",
  displayName: "Morph Holesky Testnet",
  blockExplorerUrl: "https://explorer-holesky.morphl2.io/",
  ticker: "ETH",
  tickerName: "Ethereum",
  logo: "https://media.licdn.com/dms/image/v2/D560BAQFKfuiRMTw2Mw/company-logo_200_200/company-logo_200_200/0/1715008740254/morphl2_logo?e=2147483647&v=beta&t=AG8RDjz65LhXakzsqcRQ0DA2Njuggw6Z5hwByLapGfo",
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
});

const web3auth = new Web3Auth({
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  privateKeyProvider,
});

interface AuthContextProps {
  provider: IProvider | null;
  status: string;
  loggedIn: boolean;
  user: any | null;
  address: string;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  getUserInfo: () => Promise<void>;
  getAccounts: () => Promise<void>;
  getBalance: () => Promise<void> | any;
  getSigner: () => Promise<void> | any;
  signMessage: (message: any) => Promise<void | any>;
  sendTransaction: () => Promise<void>;
  getPrivateKey: () => Promise<void> | any;
  readContract: () => Promise<void>;
  writeContract: (data: any) => Promise<void> | any;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [status, setStatus] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<any | null>(null);
  const [address, setAddress] = useState<string | any>(null);

  useEffect(() => {
    const init = async () => {
      try {
        await web3auth.initModal();
        console.log(web3auth.status);
        setStatus(web3auth.status);
        setProvider(web3auth.provider);

        if (web3auth.connected) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async () => {
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
    if (web3auth.connected) {
      setLoggedIn(true);
    }
  };

  const logout = async () => {
    await web3auth.logout();
    setProvider(null);
    setLoggedIn(false);
    uiConsole("logged out");
  };

  function uiConsole(...args: any[]): void {
    console.log(...args);
  }

  return (
    <AuthContext.Provider
      value={{
        provider,
        status,
        user,
        address,
        loggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
