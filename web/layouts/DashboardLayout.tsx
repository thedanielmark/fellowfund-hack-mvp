/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Disclosure,
  DisclosureButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, WalletIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ReactNode, useEffect, useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RotatingLines } from "react-loader-spinner";
import { ethers, JsonRpcSigner, parseEther } from "ethers";

const navigation = [
  { name: "Navigate", href: "/dashboard" },
  { name: "Wallet", href: "/dashboard/wallet" },
];

const userNavigation = [
  { name: "Your Profile", href: "/profile" },
  { name: "Settings", href: "/settings" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface LayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const { loggedIn, logout, user, address, getBalance, provider, getSigner } =
    useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [wallet, setWallet] = useState<any | null>(null);
  const [walletModalOpen, setWalletModalOpen] = useState<boolean>(false);
  const [balance, setBalance] = useState<number | any>(null);
  const [onlyCarsBalance, setOnlyCarsBalance] = useState<number | any>();

  // Getting Web3Auth wallet balance
  useEffect(() => {
    const getTheBalance = async () => {
      const balance = await getBalance();
      console.log("Balance:", balance);
      setBalance(balance);
    };

    if (loggedIn) {
      getTheBalance();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  // Setting Wallet
  useEffect(() => {
    const getDetails = async () => {
      if (loggedIn) {
        const wallet = await getWallet();
        setWallet(wallet);
      }
    };
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider, loggedIn]);

  // Get wallet
  const getWallet = async (): Promise<JsonRpcSigner | null> => {
    if (!provider) {
      // uiConsole("provider not initialized yet");
      return null;
    }
    const ethersProvider = new ethers.BrowserProvider(provider);

    return ethersProvider.getSigner();
  };

  // Getting OnlyCars wallet balance
  // useEffect(() => {
  //   const getContractBalance = async () => {
  //     const signer = await getSigner();
  //     const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";

  //     const contract = new ethers.Contract(
  //       contractAddress,
  //       contractABI,
  //       signer
  //     );
  //     console.log(signer.address);
  //     try {
  //       // Call the balances function with the address parameter
  //       const balance = await contract.balances(signer.address); // Note: view function, no .wait()
  //       console.log(balance);
  //       setOnlyCarsBalance(`${formatEther(balance)}`);
  //     } catch (error) {
  //       console.error("Error fetching balance:", error);
  //     }
  //   };

  //   if (loggedIn) {
  //     getContractBalance();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loggedIn]);

  // TODO: Remove this shit once you make an actual GET user data API call
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen flex items-center justify-center gap-x-3">
          <RotatingLines
            visible={true}
            width="20"
            strokeColor="#ffffff"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
          <span className="font-medium">Preparing your dashboard</span>
        </div>
      ) : (
        <div
          className="min-h-full h-full w-full"
          style={
            pathname === "/dashboard"
              ? { overflow: "hidden" }
              : { overflow: "" }
          }
        >
          <Disclosure as="nav" className="bg-black text-white shadow-xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center gap-x-2">
                    <img
                      alt="OnlyCars"
                      src="/logo.png"
                      className="block h-8 w-8"
                    />
                    <span className="text-xl font-black text-indigo-500">
                      Only
                      <span className="font-black text-indigo-600">Cars</span>
                    </span>
                  </div>
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === pathname
                            ? "border-indigo-500 text-white"
                            : "border-transparent text-zinc-400 hover:border-indigo-300 hover:text-zinc-200",
                          "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <button
                    onClick={() => setWalletModalOpen(true)}
                    className="relative rounded-full bg-zinc-900/70 p-2 text-zinc-400 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Wallet</span>
                    <WalletIcon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    {user && (
                      <div>
                        <MenuButton className="relative flex rounded-full bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            alt=""
                            src={user.profileImage}
                            className="h-8 w-8 rounded-full"
                          />
                        </MenuButton>
                      </div>
                    )}
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <a
                            href={item.href}
                            className="block px-4 py-2 text-sm text-zinc-700 data-[focus]:bg-zinc-100"
                          >
                            {item.name}
                          </a>
                        </MenuItem>
                      ))}
                      <MenuItem>
                        <div
                          className="block px-4 py-2 text-sm text-zinc-700 data-[focus]:bg-zinc-100"
                          onClick={logout}
                        >
                          Logout
                        </div>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                  {loggedIn && (
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white group-hover:text-white">
                        {user.name}
                      </p>
                      <p className="text-xs font-medium text-zinc-500 group-hover:text-zinc-200">
                        {user.email}
                      </p>
                    </div>
                  )}
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-white p-2 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon
                      aria-hidden="true"
                      className="block h-6 w-6 group-data-[open]:hidden"
                    />
                    <XMarkIcon
                      aria-hidden="true"
                      className="hidden h-6 w-6 group-data-[open]:block"
                    />
                  </DisclosureButton>
                </div>
              </div>
            </div>
          </Disclosure>

          <div
            className="min-h-full h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            style={{ minHeight: "calc(100vh - 64px)" }}
          >
            {children}
          </div>
        </div>
      )}

      {/* Modal with charger info start */}
      <Dialog
        open={walletModalOpen}
        onClose={setWalletModalOpen}
        className="relative z-50"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-zinc-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-black px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div>
                <div>
                  <DialogTitle className="px-2 text-xl font-bold text-white">
                    Your Wallets
                  </DialogTitle>
                  <div className="text-sm text-zinc-400"></div>

                  <div className="mt-3 bg-zinc-900/70 border border-zinc-800 p-4 rounded-lg shadow-sm">
                    <h3 className="text-sm font-semibold text-white">
                      Web3Auth Wallet Balance <br />
                      <span className="text-zinc-400 font-light text-xs">
                        ({address})
                      </span>
                    </h3>
                    <div className="mt-3 flex items-center gap-x-2">
                      <div>
                        <img
                          src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                          alt="Eth"
                          className="h-6 w-6 mx-auto"
                        />
                      </div>
                      <div className="text-sm">{balance && balance} ETH</div>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-zinc-400">
                    This balance is used to pay for transactions inside the app.
                    Ensure sufficient funds are available to avoid transaction
                    failures.
                  </div>

                  <div className="border-t border-zinc-800 my-5 w-full" />

                  <div className="mt-3 bg-zinc-900/70 border border-zinc-800 p-4 rounded-lg shadow-sm">
                    <h3 className="text-sm font-semibold text-white">
                      OnlyCars Wallet Balance <br />
                      <span className="text-zinc-400 font-light text-xs">
                        ({process.env.NEXT_PUBLIC_CONTRACT_ADDRESS})
                      </span>
                    </h3>
                    <div className="mt-3 flex items-center gap-x-2">
                      <div>
                        <img
                          src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                          alt="Eth"
                          className="h-6 w-6 mx-auto"
                        />
                      </div>
                      <div className="text-sm">
                        {onlyCarsBalance && onlyCarsBalance} ETH
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-zinc-400">
                    This balance is used to pay for usage of chargers. You have
                    to keep this topped up before you can start charging your
                    vehicle.
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => setWalletModalOpen(false)}
                  className="mt-2 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold border border-zinc-200 text-zinc-900 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      {/* Modal with charger info end */}
    </>
  );
};

export default DashboardLayout;
