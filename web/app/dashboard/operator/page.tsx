"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { ethers } from "ethers";
import { contractABI } from "@/utils/contractABI";
import { RotatingLines } from "react-loader-spinner";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

// Define types for our fellowship data
type Fellowship = {
    id: number;
    metadata: string;
    funds: bigint;
    applicationDeadline: number;
    marketDeadline: number;
    epochEndTime: number;
    status: number;
    maxApplicants: number;
};

function OperatorPage() {
    const { address, getSigner } = useAuth();
    const [fellowships, setFellowships] = useState<Fellowship[]>([
        // Mock fellowship entry
        {
            id: 1,
            metadata: JSON.stringify({
                name: "Demo Fellowship Program",
                githubOrg: "fellowfund",
                kpiTargets: {
                    totalCommits: {
                        targetValue: 3,
                        weight: 0.7
                    },
                    poapEvents: {
                        targetValue: 1,
                        weight: 0.3
                    }
                }
            }),
            funds: BigInt("1000000000000000000"), // 1 ETH
            applicationDeadline: Math.floor(Date.now() / 1000) + 3600, // 1 hour from now
            marketDeadline: Math.floor(Date.now() / 1000) + 7200, // 2 hours from now
            epochEndTime: Math.floor(Date.now() / 1000) + 10800, // 3 hours from now
            status: 1, // AcceptingApplications
            maxApplicants: 5
        }
    ]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [transactionHash, setTransactionHash] = useState<string>("");

    // Load fellowships from the contract
    useEffect(() => {
        const loadFellowships = async () => {
            const signer = await getSigner();
            const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";
            const contract = new ethers.Contract(
                contractAddress,
                JSON.parse(JSON.stringify(contractABI)),
                signer
            );

            const fellowshipCount = await contract.fellowshipCount();
            const fellowshipsData: Fellowship[] = [];

            for (let i = 0; i < fellowshipCount; i++) {
                const fellowship = await contract.fellowships(i);
                fellowshipsData.push({ ...fellowship, id: i });
            }

            setFellowships(fellowshipsData);
        };

        if (address) {
            loadFellowships();
        }
    }, [address, getSigner]);

    const handleOpenMarkets = async (fellowshipId: number) => {
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
            setMessage(`Successfully evaluated market for fellowship ${fellowshipId}`);
        } catch (error: any) {
            setMessage(`Error: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="my-10 space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-zinc-900/70 border border-zinc-800 px-4 py-6 sm:p-6">
                    <div>
                        <h1 className="text-2xl font-semibold leading-6 text-white">
                            Operator Dashboard
                        </h1>
                        <p className="mt-1 text-sm text-zinc-400">
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
                                            <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                                                ID
                                            </th>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Status
                                            </th>
                                            <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-700">
                                        {fellowships.map((fellowship) => (
                                            <tr key={fellowship.id}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                                    {fellowship.id}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-300">
                                                    {["Created", "AcceptingApplications", "MarketOpen", "EpochStarted", "Resolved"][fellowship.status]}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => handleOpenMarkets(fellowship.id)}
                                                            disabled={fellowship.status !== 1 || isLoading}
                                                            className="rounded bg-primary-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                                        >
                                                            Open Markets
                                                        </button>
                                                        <button
                                                            onClick={() => handleEvaluateMarket(fellowship.id)}
                                                            disabled={fellowship.status !== 2 || isLoading}
                                                            className="rounded bg-primary-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
                <div className={`rounded-md p-4 ${showSuccess ? 'bg-primary-900' : 'bg-red-900'}`}>
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <InformationCircleIcon
                                className={`h-5 w-5 ${showSuccess ? 'text-primary-400' : 'text-red-400'}`}
                                aria-hidden="true"
                            />
                        </div>
                        <div className="ml-3 flex-1 md:flex md:justify-between">
                            <p className="text-sm text-white">{message}</p>
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
