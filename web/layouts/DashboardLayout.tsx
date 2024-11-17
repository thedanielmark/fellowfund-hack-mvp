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
import { ethers, JsonRpcSigner } from "ethers";
import { networks } from "@/utils/chains";

const navigation = [{ name: "Fellowships", href: "/dashboard" }];

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
  const [FellowFundBalance, setFellowFundBalance] = useState<number | any>();

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

  // Getting FellowFund wallet balance
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
  //       setFellowFundBalance(`${formatEther(balance)}`);
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
            strokeColor="#000000"
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
          <Disclosure as="nav" className="bg-white text-black shadow-xl">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center gap-x-2">
                    <Link href="/" className="flex items-center gap-x-3">
                      <span className="sr-only">Your Company</span>
                      <div className="flex items-center gap-x-3">
                        <img
                          alt=""
                          src="/logo-color.png"
                          className="h-8 w-auto sm:h-10"
                        />
                        <img
                          alt=""
                          src="/nouns-logo.svg"
                          className="h-8 w-auto sm:h-6"
                        />
                      </div>
                      <h1 className="text-3xl font-black text-primary-60 flex">
                        Fellow
                        <h1 className="text-primary-600">Fund</h1>
                      </h1>
                    </Link>
                  </div>
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === pathname
                            ? "border-primary-500 text-black"
                            : "border-transparent text-zinc-600 hover:border-primary-300 hover:text-zinc-800",
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
                    className="relative rounded-full bg-zinc-100/70 p-2 text-zinc-600 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Wallet</span>
                    <WalletIcon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  {/* <div className="shrink-0 rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                    <Listbox
                      value={selectedNetwork}
                      onChange={setSelectedNetwork}
                    >
                      <div className="relative">
                        <ListboxButton className="relative w-full cursor-default rounded-md text-black py-1.5 text-left shadow-sm focus:outline-none sm:text-sm sm:leading-6">
                          <span className="block truncate">
                            {selectedNetwork.name}
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              aria-hidden="true"
                              className="h-5 w-5 text-zinc-600"
                            />
                          </span>
                        </ListboxButton>

                        <ListboxOptions
                          transition
                          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                        >
                          {networks.map((network, index) => (
                            <ListboxOption
                              key={index}
                              value={network}
                              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-zinc-800 data-[focus]:bg-primary-600 data-[focus]:text-black"
                            >
                              <span className="block truncate font-normal group-data-[selected]:font-semibold">
                                {network.name}
                              </span>

                              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-primary-600 group-data-[focus]:text-black [.group:not([data-selected])_&]:hidden">
                                <CheckIcon
                                  aria-hidden="true"
                                  className="h-5 w-5"
                                />
                              </span>
                            </ListboxOption>
                          ))}
                        </ListboxOptions>
                      </div>
                    </Listbox>
                  </div> */}
                  <div className="mx-3">
                    <select
                      id="location"
                      name="location"
                      defaultValue="Canada"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 bg-transparent text-black ring-1 ring-inset ring-zinc-200 focus:ring-2 focus:ring-primary-600 sm:text-sm/6"
                    >
                      {networks.map((network, index) => (
                        <option key={index}>{network.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    {user && (
                      <div>
                        <MenuButton className="relative flex rounded-full bg-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
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
                      <p className="text-sm font-medium text-black group-hover:text-black">
                        {user.name}
                      </p>
                      <p className="text-xs font-medium text-zinc-500 group-hover:text-zinc-800">
                        {user.email}
                      </p>
                    </div>
                  )}
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-white p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
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
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div>
                <div>
                  <DialogTitle className="px-2 text-xl font-bold text-black">
                    Your Wallets
                  </DialogTitle>
                  <div className="text-sm text-zinc-600"></div>

                  <div className="mt-3 bg-zinc-100/70 border border-zinc-200 p-4 rounded-lg shadow-sm">
                    <h3 className="text-sm font-semibold text-black">
                      Web3Auth Wallet Balance <br />
                      <span className="text-zinc-600 font-light text-xs">
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

                  <div className="mt-2 text-xs text-zinc-600">
                    This balance is used to pay for transactions inside the app.
                    Ensure sufficient funds are available to avoid transaction
                    failures.
                  </div>

                  <div className="border-t border-zinc-200 my-5 w-full" />

                  <div className="mt-3 bg-zinc-100/70 border border-zinc-200 p-4 rounded-lg shadow-sm">
                    <h3 className="text-sm font-semibold text-black">
                      FellowFund Wallet Balance <br />
                      <span className="text-zinc-600 font-light text-xs">
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
                        {FellowFundBalance && FellowFundBalance} ETH
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-zinc-600">
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
                  className="mt-2 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold border border-zinc-200 text-zinc-100 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
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
