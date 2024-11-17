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

function FellowshipCard({
  fellowshipId,
  signer,
}: {
  fellowshipId: number;
  signer: ethers.JsonRpcSigner;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [applications, setApplications] = useState<any>(null);
  const [impactValue, setImpactValue] = useState<string>("");
  const [applicantAddress, setApplicantAddress] = useState<string>("");
  const [applicationId, setApplicationId] = useState<string>("");
  const [achieved, setAchieved] = useState<boolean>(false);

  const getApplicationsFromContract = async (fellowshipId: number) => {
    try {
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "",
        JSON.parse(JSON.stringify(contractABI)),
        signer
      );
      const applications = await contract.applications(fellowshipId);
      console.log("applications: ", applications);
      setApplications(applications);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  const getFellowshipFromContract = async (fellowshipId: number) => {
    setLoading(true);
    try {
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "",
        JSON.parse(JSON.stringify(contractABI)),
        signer
      );
      const fellowship = await contract.fellowships(fellowshipId);
      setData(fellowship);
      const applications = await contract.applications(fellowshipId);
      setApplications(applications);
      console.log("data: ", fellowship, applications);
    } catch (error) {
      console.error("Error fetching fellowship:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleSetImpact = async () => {
    try {
      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "",
        JSON.parse(JSON.stringify(contractABI)),
        signer
      );

      const proof = ethers.toUtf8Bytes("");

      const tx = await contract.setApplicantImpact(
        fellowshipId,
        applicationId,
        achieved,
        proof
      );
      await tx.wait();

      await getFellowshipFromContract(fellowshipId);
      setApplicationId("");
      setAchieved(false);
    } catch (error) {
      console.error("Error setting impact:", error);
    }
  };

  useEffect(() => {
    getFellowshipFromContract(fellowshipId);
  }, [fellowshipId, signer]);

  if (loading) {
    return (
      <div className="flex justify-center">
        <RotatingLines
          visible={true}
          width="24"
          strokeColor="#000000"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="loading"
        />
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="text-xs space-y-1">
      <div><span className="font-semibold">Funds:</span> {ethers.formatEther(data.funds || '0')} ETH</div>
      <div><span className="font-semibold">Grant per accepted:</span> {ethers.formatEther(data.grantPerAccepted || '0')} ETH</div>
      <div><span className="font-semibold">Accepted:</span> {Number(data.acceptedApplicants)}</div>
      <div><span className="font-semibold">Epoch started:</span> {data.epochStarted ? 'Yes' : 'No'}</div>
      <div><span className="font-semibold">Status:</span> {Number(data.status)}</div>
      {/* <div><span className="font-semibold">Applications:</span> {applications.length}</div> */}

      <div className="mt-4 space-y-2">
        <input
          type="number"
          placeholder="Application ID"
          value={applicationId}
          onChange={(e) => setApplicationId(e.target.value)}
          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        />
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="achieved"
            checked={achieved}
            onChange={(e) => setAchieved(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
          />
          <label htmlFor="achieved" className="text-sm text-gray-900">
            Impact Achieved
          </label>
        </div>
        <button
          onClick={handleSetImpact}
          className="rounded bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500"
        >
          Set Impact
        </button>
      </div>
    </div>
  );
}

function OperatorPage() {
  const [fellowships, setFellowships] = useState<Fellowship[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [transactionHash, setTransactionHash] = useState<string>("");
  const [userAddress, setUserAddress] = useState<string>("");

  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);

  // Add this function to get signer
  const getSigner = async () => {
    if (!window.ethereum) throw new Error("Please install MetaMask");
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    setSigner(signer);
    return signer;
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
          "https://api.studio.thegraph.com/query/73364/fello-fund/version/latest",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
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
      const contractAddress =
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
        "0x25d598CBB74fa73290e74697616DE2740d280745";
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

  const handleResolveMarket = async (fellowshipId: number) => {
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

      const tx = await contract.resolveMarket(fellowshipId);
      const receipt = await tx.wait();

      setShowSuccess(true);
      setTransactionHash(receipt.hash);
      setMessage(
        `Successfully resolved market for fellowship ${fellowshipId}`
      );
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSigner();
  }, []);

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
                <table className="min-w-full divide-y divide-zinc-200">
                  <thead className="bg-zinc-50">
                    <tr>
                      <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-zinc-900 sm:pl-0">
                        Name
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-900">
                        Status
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-900">
                        No. of Applicants
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-900">
                        Actions
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-zinc-900">
                        Fellowship Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 bg-white">
                    {fellowships.map((fellowship) => (
                      <tr key={fellowship.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-0">
                          {JSON.parse(fellowship.metadata).name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <span
                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${fellowship.status === 0
                                ? "bg-gray-100 text-gray-800"
                                : fellowship.status === 1
                                  ? "bg-yellow-100 text-yellow-800"
                                  : fellowship.status === 2
                                    ? "bg-blue-100 text-blue-800"
                                    : fellowship.status === 3
                                      ? "bg-green-100 text-green-800"
                                      : "bg-purple-100 text-purple-800"
                              }`}
                          >
                            {
                              [
                                "Created",
                                "AcceptingApplications",
                                "MarketOpen",
                                "EpochStarted",
                                "Resolved",
                              ][fellowship.status]
                            }
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {fellowship?.totalApplications || 0}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <div className="flex gap-2">
                            <button
                              onClick={() =>
                                handleOpenMarkets(
                                  Number(fellowship.fellowshipId)
                                )
                              }
                              disabled={fellowship.status !== 1 || isLoading}
                              className="rounded bg-blue-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Open Markets
                            </button>
                            <button
                              onClick={() =>
                                handleEvaluateMarket(
                                  Number(fellowship.fellowshipId)
                                )
                              }
                              disabled={isLoading}
                              className="rounded bg-green-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Evaluate Market
                            </button>
                            <button
                              onClick={() => handleResolveMarket(Number(fellowship.fellowshipId))}
                              disabled={isLoading}
                              className="rounded bg-purple-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Resolve Market
                            </button>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {signer && (
                            <FellowshipCard
                              fellowshipId={Number(fellowship.fellowshipId)}
                              signer={signer}
                            />
                          )}
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
              <p
                className={`text-sm ${showSuccess ? "text-green-700" : "text-red-700"
                  }`}
              >
                {message}
              </p>
              {showSuccess && transactionHash && (
                <p className="mt-3 text-sm md:ml-6 md:mt-0">
                  <a
                    href={`https://optimism-sepolia.blockscout.com/tx/${transactionHash}`}
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
