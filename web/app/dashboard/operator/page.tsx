"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { ethers } from "ethers";
import { contractABI } from "@/utils/contractABI";
import { RotatingLines } from "react-loader-spinner";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

// Define types for our fellowship data
type Fellowship = {
  acceptedApplicants: number;
  applicationDeadline: string;
  blockTimestamp: string;
  blockNumber: string;
  epochEndTime: string;
  epochStarted: boolean;
  fellowshipId: string;
  funds: string;
  grantPerAccepted: string;
  id: string;
  marketDeadline: string;
  metadata: string;
  resolved: boolean;
  status: number;
  totalApplications: number;
  transactionHash: string;
};

// At the top of the file, after the imports
declare global {
  interface Window {
    ethereum?: any;
  }
}

function OperatorPage() {

  const [fellowships, setFellowships] = useState<Fellowship[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [transactionHash, setTransactionHash] = useState<string>("");
  const [userAddress, setUserAddress] = useState<string>("");

  // Add this function to get signer
  const getSigner = async () => {
    if (!window.ethereum) throw new Error("Please install MetaMask");
    const provider = new ethers.BrowserProvider(window.ethereum);
    return await provider.getSigner();
  };

  // Modify the useEffect to use window.ethereum
  useEffect(() => {
    const loadFellowships = async () => {
      try {
        const query = `
          query MyQuery {
            fellowships {
              acceptedApplicants
              applicationDeadline
              blockTimestamp
              blockNumber
              epochEndTime
              epochStarted
              fellowshipId
              applicants {
                id
              }
              funds
              grantPerAccepted
              id
              marketDeadline
              metadata
              resolved
              status
              totalApplications
              transactionHash
            }
          }
        `;

        const response = await fetch(
          'https://api.studio.thegraph.com/query/73364/fello-fund/version/latest',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
          }
        );

        const data = await response.json();
        if (data.data?.fellowships) {
          console.log("data.data.fellowships: ", data.data.fellowships);
          setFellowships(data.data.fellowships);
        }
      } catch (error) {
        console.error("Error loading fellowships:", error);
      }
    };

    loadFellowships();
  }, []);

  const handleOpenMarkets = async (fellowshipId: number) => {
    setIsLoading(true);
    setMessage("");
    setShowSuccess(false);

    try {
      const signer = await getSigner();
      const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0x25d598CBB74fa73290e74697616DE2740d280745";
      const contract = new ethers.Contract(
        contractAddress,
        JSON.parse(JSON.stringify(contractABI)),
        signer
      );

      const tx = await contract.openFellowshipMarkets(fellowshipId);
      const receipt = await tx.wait();

      setShowSuccess(true);
      setTransactionHash(receipt.hash);
      setMessage(`Successfully opened markets for fellowship ${fellowshipId}`);
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEvaluateMarket = async (fellowshipId: number) => {
    setIsLoading(true);
    setMessage("");
    setShowSuccess(false);

    try {
      const signer = await getSigner();
      const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";
      const contract = new ethers.Contract(
        contractAddress,
        JSON.parse(JSON.stringify(contractABI)),
        signer
      );

      const tx = await contract.evaluateMarket(fellowshipId);
      const receipt = await tx.wait();

      setShowSuccess(true);
      setTransactionHash(receipt.hash);
      setMessage(
        `Successfully evaluated market for fellowship ${fellowshipId}`
      );
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="my-10 space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-zinc-100/70 border border-zinc-200 px-4 py-6 sm:p-6">
          <div>
            <h1 className="text-2xl font-semibold leading-6 text-black">
              Operator Dashboard
            </h1>
            <p className="mt-1 text-sm text-zinc-600">
              Manage fellowship markets and evaluations
            </p>
          </div>

          {/* Fellowships List */}
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-zinc-700">
                  <thead>
                    <tr>
                      <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-0">
                        Name
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                        Status
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                        No. of Applicants
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-black">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-700">
                    {fellowships.map((fellowship) => (
                      <tr key={fellowship.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-0">
                          {JSON.parse(fellowship.metadata).name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-300">
                          {
                            [
                              "Created",
                              "AcceptingApplications",
                              "MarketOpen",
                              "EpochStarted",
                              "Resolved",
                            ][fellowship.status]
                          }
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {fellowship?.totalApplications || 0}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleOpenMarkets(Number(fellowship.fellowshipId))}
                              disabled={fellowship.status !== 1 || isLoading}
                              className="rounded bg-primary-600 px-2 py-1 text-xs font-semibold text-black shadow-sm hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Open Markets
                            </button>
                            <button
                              onClick={() => handleEvaluateMarket(Number(fellowship.fellowshipId))}
                              disabled={fellowship.status !== 2 || isLoading}
                              className="rounded bg-primary-600 px-2 py-1 text-xs font-semibold text-black shadow-sm hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Evaluate Market
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="flex justify-center">
          <RotatingLines
            visible={true}
            width="40"
            strokeColor="#ffffff"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </div>
      )}

      {/* Success/Error Message */}
      {message && (
        <div
          className={`rounded-md p-4 ${showSuccess ? "bg-primary-900" : "bg-red-900"
            }`}
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <InformationCircleIcon
                className={`h-5 w-5 ${showSuccess ? "text-primary-400" : "text-red-400"
                  }`}
                aria-hidden="true"
              />
            </div>
            <div className="ml-3 flex-1 md:flex md:justify-between">
              <p className="text-sm text-black">{message}</p>
              {showSuccess && (
                <p className="mt-3 text-sm md:ml-6 md:mt-0">
                  <a
                    href={`https://sepolia.etherscan.io/tx/${transactionHash}`}
                    className="whitespace-nowrap font-medium text-primary-500 hover:text-primary-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Transaction
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OperatorPage;
