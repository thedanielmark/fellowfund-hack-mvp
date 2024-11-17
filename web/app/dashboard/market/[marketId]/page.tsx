/* eslint-disable @next/next/no-img-element */
"use client";
import TwoPointGraph from "@/components/Graphs/TwoPointGraph";
import { useAuth } from "@/providers/AuthProvider";
import { contractABI } from "@/utils/contractABI";
import { marketContractABI } from "@/utils/marketContractABI";
import getMarket from "@/utils/queries/getMarket";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { ethers, parseEther } from "ethers";
import { GraphQLClient } from "graphql-request";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

function MarketPage({ params }: { params: { marketId: any } }) {
  const { getSigner } = useAuth();

  const tabs = [
    { name: "Yes", current: true },
    { name: "No", current: false },
  ];

  const [currentTab, setCurrentTab] = useState("Yes");
  const [yesValue, setYesValue] = useState("");
  const [noValue, setNoValue] = useState("");

  const [isVotingYesLoading, setIsVotingYesLoading] = useState(false);
  const [isVotingNoLoading, setIsVotingNoLoading] = useState(false);

  const [transactionHash, setTransactionHash] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  // function to change the current tab
  function changeTab(tabName: string) {
    setCurrentTab(tabName);
  }

  const [applicantData, setApplicantData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = new GraphQLClient(
          process.env.NEXT_PUBLIC_GRAPH_URL || ""
        );
        const query = getMarket(params.marketId);
        const result: any = await client.request(query);

        // Log the entire result to inspect its structure
        console.log("GraphQL Response:", result);

        // Check if data and applicant exist
        if (result?.applicant) {
          const applicantDataFromGraph = result.applicant;
          setApplicantData(applicantDataFromGraph);
          console.log("Address:", applicantDataFromGraph);
        } else {
          console.log("Markets data is missing or undefined.");
        }
      } catch (err: any) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData();
  }, []);

  // Vote yes
  const voteYes = async (event: any) => {
    event.preventDefault();
    setIsVotingYesLoading(true);
    setShowSuccess(false);
    // setMessage("");
    // setShowErrorMessage(false);

    // Write to contract
    const signer = await getSigner();

    console.log("MarketAddress:", applicantData.marketAddress);

    const contractAddress = applicantData.marketAddress || "";
    const contract = new ethers.Contract(
      contractAddress,
      JSON.parse(JSON.stringify(marketContractABI)),
      signer
    );

    const tx = await contract.placeBet(0, {
      value: parseEther(yesValue),
    });
    console.log(tx);
    setTransactionHash(tx.hash);
    // Wait for transaction to finish
    const receipt = await tx.wait();
    if (receipt.status === 1) {
      console.log("Success");
      setIsVotingYesLoading(false);
      setShowSuccess(true);
      // setTransactionHash(receipt.hash);
      // setIsLoading(false);
    }
  };

  // Vote no
  const voteNo = async (event: any) => {
    event.preventDefault();
    // setIsLoading(true);
    setIsVotingNoLoading(true);
    setShowSuccess(false);
    // setMessage("");
    // setShowErrorMessage(false);

    // Write to contract
    const signer = await getSigner();

    const contractAddress = applicantData.marketAddress || "";
    const contract = new ethers.Contract(
      contractAddress,
      JSON.parse(JSON.stringify(marketContractABI)),
      signer
    );

    const tx = await contract.placeBet(1, {
      value: parseEther(noValue),
    });
    console.log(tx);
    // Wait for transaction to finish
    const receipt = await tx.wait();
    if (receipt.status === 1) {
      console.log("Success");
      setIsVotingNoLoading(false);
      setShowSuccess(true);
      // setShowSuccess(true);
      // setTransactionHash(receipt.hash);
      // setIsLoading(false);
    }
  };

  return (
    <div className="py-6 sm:py-12 px-4 sm:px-0 max-w-5xl mx-auto">
      {applicantData ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12">
          {/* Left column start */}
          <div className="lg:col-span-6">
            <div className="flex items-center">
              <div className="shrink-0">
                <img
                  alt=""
                  src={JSON.parse(applicantData.metadata).avatarURL}
                  className="inline-block size-10 sm:size-12 rounded-full"
                />
              </div>
              <h1 className="ml-3 text-xl sm:text-3xl font-medium text-black">
                {JSON.parse(applicantData.metadata).name}&apos;s Performance
                Market
              </h1>
            </div>

            <div className="mt-8 sm:mt-12">
              <h1 className="text-2xl sm:text-3xl font-medium text-black">
                Applicant Details
              </h1>
              <div className="mt-4 sm:mt-5">
                <div>
                  <div>
                    <h1 className="text-sm text-zinc-500">Name</h1>
                    <p className="text-base font-bold text-black">
                      {JSON.parse(applicantData.metadata).name}
                    </p>
                  </div>
                  <div className="mt-5">
                    <h1 className="ext-sm text-zinc-500">
                      About the Applicant
                    </h1>
                    <p className="text-base font-bold text-black">
                      {JSON.parse(applicantData.metadata).bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Left column end */}
          {/* Right column start */}
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-10 mt-4 rounded-lg border border-zinc-200 bg-white shadow-sm">
              <div className="p-4 sm:p-5 flex items-center">
                <div className="shrink-0">
                  <img
                    alt=""
                    src="https://i.pravatar.cc/150?img=5"
                    className="size-8 sm:size-10 rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium ring-zinc-900">
                    Will Alice be able to increase her performance by 25%?
                  </p>
                </div>
              </div>

              <div>
                <div className="sm:hidden">
                  <label htmlFor="tabs" className="sr-only">
                    Select a tab
                  </label>
                  {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                  <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-zinc-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                  >
                    {tabs.map((tab) => (
                      <option key={tab.name}>{tab.name}</option>
                    ))}
                  </select>
                </div>
                <div className="hidden sm:block">
                  <div className="px-4 sm:px-5 border-b border-zinc-200">
                    <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                      {tabs.map((tab) => (
                        <button
                          key={tab.name}
                          onClick={() => changeTab(tab.name)}
                          className={classNames(
                            tab.name === currentTab
                              ? "border-primary-500 text-black"
                              : "border-transparent text-zinc-600 hover:border-zinc-400 hover:text-zinc-800",
                            "whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
                          )}
                        >
                          {tab.name}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>

              {/* Tabs content start  */}
              <div className="p-4 sm:p-5">
                {currentTab === "Yes" && (
                  <div>
                    <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                      <label
                        htmlFor="yesValue"
                        className="block text-xs font-medium text-zinc-800"
                      >
                        Amount to vote with in ETH
                      </label>
                      <input
                        id="yesValue"
                        name="yesValue"
                        type="text"
                        required={true}
                        value={yesValue}
                        onChange={(e) => setYesValue(e.target.value)}
                        placeholder="3"
                        className="block w-full border-0 py-1.5 px-0 bg-transparent text-black placeholder:text-zinc-600 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <button
                      type="submit"
                      onClick={voteYes}
                      className={`mt-5 flex items-center justify-center gap-x-3 w-full rounded-md border border-transparent bg-primary-600 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-zinc-50 ${
                        isVotingYesLoading
                          ? "cursor-not-allowed opacity-50"
                          : "cursor-pointer opacity-100"
                      }`}
                    >
                      {isVotingYesLoading ? (
                        <>
                          <RotatingLines
                            visible={true}
                            width="20"
                            strokeColor="#000000"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                          />{" "}
                          Voting
                        </>
                      ) : (
                        "Vote Yes"
                      )}
                    </button>
                  </div>
                )}

                {currentTab === "No" && (
                  <div>
                    <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                      <label
                        htmlFor="noValue"
                        className="block text-xs font-medium text-zinc-800"
                      >
                        Amount to vote with in ETH
                      </label>
                      <input
                        id="noValue"
                        name="noValue"
                        type="text"
                        required={true}
                        value={noValue}
                        onChange={(e) => setNoValue(e.target.value)}
                        placeholder="3"
                        className="block w-full border-0 py-1.5 px-0 bg-transparent text-black placeholder:text-zinc-600 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <button
                      type="submit"
                      onClick={voteNo}
                      className={`mt-5 flex items-center justify-center gap-x-3 w-full rounded-md border border-transparent bg-primary-600 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-zinc-50 ${
                        isVotingNoLoading
                          ? "cursor-not-allowed opacity-50"
                          : "cursor-pointer opacity-100"
                      }`}
                    >
                      {isVotingNoLoading ? (
                        <>
                          <RotatingLines
                            visible={true}
                            width="20"
                            strokeColor="#000000"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                          />{" "}
                          Voting
                        </>
                      ) : (
                        "Vote No"
                      )}
                    </button>
                  </div>
                )}

                {showSuccess && (
                  <div className="mt-5 rounded-md bg-primary-100 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <InformationCircleIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-primary-600"
                        />
                      </div>
                      <div className="ml-3 flex-1 md:flex md:justify-between">
                        <p className="text-sm text-black">
                          Your application was successfully submitted.
                        </p>
                        <p className="mt-3 flex items-center gap-x-3 text-sm md:ml-6 md:mt-0">
                          <a
                            href={`https://optimism-sepolia.blockscout.com/tx/${transactionHash}`}
                            className="whitespace-nowrap font-medium text-primary-500 hover:text-primary-900"
                            target="_blank"
                          >
                            View Transaction
                            <span aria-hidden="true"> &rarr;</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Tabs content end */}
            </div>
          </div>
          {/* Right column end */}
        </div>
      ) : (
        <div className="flex justify-center items-center h-96">
          <RotatingLines
            visible={true}
            width="20"
            strokeColor="#000000"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </div>
      )}
    </div>
  );
}

export default MarketPage;
