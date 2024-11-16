/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@/providers/AuthProvider";
import { ethers, toUtf8Bytes } from "ethers";
import { contractABI } from "@/utils/contractABI";
import { RotatingLines } from "react-loader-spinner";
import { Description, Field, Label, Switch } from "@headlessui/react";
import { parseEther } from "ethers";

function CreateFellowshipPage() {
  const { address, getSigner } = useAuth();
  const [inputs, setInputs] = useState<any>({
    name: "",
    description: "",
    logoURL: "",
    amount: 0,
    githubCommits: false,
    githubOrganizationHandle: "",
    githubOrganizationWeight: 0,
    eventsAttended: false,
    eventsCount: "",
    eventsWeight: 0,
    applicationDeadline: "",
    marketDeadline: "",
    epochEndtime: "",
    status: "Created",
    maxApplicants: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [gitHubCommitsEnabled, setGitHubCommitsEnabled] = useState(false);
  const [eventsAttendedEnabled, setEventsAttendedEnabled] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const [metadataIPFSHash, setMetadataIPFSHash] = useState<string>("");
  const [attestationID, setAttestationID] = useState<string>("");

  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [transactionHash, setTransactionHash] = useState<string>("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");
    setShowErrorMessage(false);

    // Write to contract
    const signer = await getSigner();

    const contractAddress = "0x25d598CBB74fa73290e74697616DE2740d280745";
    const contract = new ethers.Contract(
      contractAddress,
      JSON.parse(JSON.stringify(contractABI)),
      signer
    );

    const tx = await contract.createFellowship(
      JSON.stringify(inputs),
      parseEther(inputs.amount),
      new Date(inputs.applicationDeadline).getTime() / 1000,
      new Date(inputs.marketDeadline).getTime() / 1000,
      new Date(inputs.epochEndtime).getTime() / 1000,
      { value: parseEther(inputs.amount) }
    );
    console.log(tx);
    // Wait for transaction to finish
    const receipt = await tx.wait();
    if (receipt.status === 1) {
      console.log("Success");
      setShowSuccess(true);
      setTransactionHash(receipt.hash);
      setIsLoading(false);
    }
  };

  // Function to handle onChange of inputs
  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.persist();
    setInputs((prev: any) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // Detect changes in eventsAttendedEnabled and gitHubCommitsEnabled and update inputs
  useEffect(() => {
    setInputs((prev: any) => ({
      ...prev,
      githubCommits: gitHubCommitsEnabled,
      eventsAttended: eventsAttendedEnabled,
    }));
  }, [gitHubCommitsEnabled, eventsAttendedEnabled]);

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  return (
    <>
      <div className="my-10 space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
        <form onSubmit={handleSubmit}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-zinc-100/70 border border-zinc-200 px-4 py-6 sm:p-6 overflow-hidden rounded-md">
              <div>
                <h1 className="text-2xl font-semibold leading-6 text-black">
                  Create a New Fellowship Program
                </h1>
                <p className="mt-1 text-sm text-zinc-600">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>

              <div className="grid grid-cols-6 gap-6">
                {/* Name start */}
                <div className="col-span-3 sm:col-span-3">
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      A Friendly Name For Your Fellowship Program
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required={true}
                      value={inputs.name}
                      onChange={handleInputChange}
                      placeholder="Danny's Fellowship Program"
                      className="block w-full border-0 py-1.5 px-0 bg-transparent text-black placeholder:text-zinc-600 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Name end */}

                {/* Amount start */}
                <div className="col-span-3 sm:col-span-3">
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                    <label
                      htmlFor="amount"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      Program Budget
                    </label>

                    <div className="relative rounded-md">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        id="amount"
                        name="amount"
                        type="text"
                        value={inputs.amount}
                        onChange={handleInputChange}
                        placeholder="0.00"
                        aria-describedby="price-currency"
                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-12 bg-transparent text-black placeholder:text-zinc-600 focus:ring-0 sm:text-sm/6"
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <span
                          id="price-currency"
                          className="text-gray-500 sm:text-sm"
                        >
                          USD
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Amount end */}

                {/* Description start */}
                <div className="col-span-6 sm:col-span-6">
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                    <label
                      htmlFor="description"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      A Friendly Name For Your Fellowship Program
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      required={true}
                      value={inputs.description}
                      onChange={handleInputChange}
                      placeholder="This is a fellowship program for developers who are"
                      className="block w-full border-0 py-1.5 px-0 bg-transparent text-black placeholder:text-zinc-600 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Description end */}

                {/* Logo URL start */}
                <div className="col-span-6 sm:col-span-6">
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                    <label
                      htmlFor="logoURL"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      URL to your fellowship&apos;s logo
                    </label>
                    <input
                      id="logoURL"
                      name="logoURL"
                      required={true}
                      value={inputs.logoURL}
                      onChange={handleInputChange}
                      placeholder="https://example.com/logo.png"
                      className="block w-full border-0 py-1.5 px-0 bg-transparent text-black placeholder:text-zinc-600 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Logo URL end */}

                <div className="col-span-6 w-full pt-0.5 bg-zinc-800" />

                {/* Impact metrics start */}
                <h1 className="col-span-6 sm:col-span-6 text-2xl">
                  Impact Metrics
                </h1>

                {/* GitHub commits start */}
                <div className="col-span-6 sm:col-span-6">
                  <Field className="flex items-center justify-between">
                    <span className="flex grow flex-col">
                      <Label
                        as="span"
                        passive
                        className="text-sm/6 font-medium text-black"
                      >
                        GitHub Commits
                      </Label>
                      <Description as="span" className="text-sm text-zinc-600">
                        Total number of GitHub commits made by the applicant to
                        their project.
                      </Description>
                    </span>
                    <Switch
                      checked={gitHubCommitsEnabled}
                      onChange={setGitHubCommitsEnabled}
                      className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-zinc-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 data-[checked]:bg-primary-600"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                      />
                    </Switch>
                  </Field>
                </div>
                {/* GitHub commits end */}

                {/* GitHub organization start */}
                <div className="col-span-3 sm:col-span-3">
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                    <label
                      htmlFor="gitHubOrganizationHandle"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      GitHub Organization Handle
                    </label>

                    <div className="relative rounded-md">
                      <div className="flex rounded-md ring-0 ring-inset sm:max-w-md">
                        <span className="flex select-none items-center text-gray-500 sm:text-sm">
                          https://github.com/
                        </span>
                        <input
                          id="gitHubOrganizationHandle"
                          name="gitHubOrganizationHandle"
                          type="text"
                          value={inputs.githubOrganization}
                          onChange={handleInputChange}
                          placeholder="BoneyM"
                          className="block w-full rounded-md border-0 py-1.5 pl-3 pr-12 bg-transparent text-black placeholder:text-zinc-600 focus:ring-0 sm:text-sm/6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* GitHub organization end */}

                {/* GitHub organization weight start */}
                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="gitHubOrganizationWeight"
                    className="block text-xs font-medium text-zinc-800"
                  >
                    Weight for this metric (0-1)
                  </label>

                  <div className="mt-3 relative flex items-center gap-x-2 rounded-md">
                    <input
                      type="range"
                      value={inputs.githubOrganizationWeight}
                      onChange={(e) =>
                        setInputs({
                          ...inputs,
                          githubOrganizationWeight: e.target.value,
                        })
                      }
                      className="appearance-none bg-zinc-800 slider rounded-full"
                    />
                    <div className="text-sm text-zinc-800 font-bold">
                      {inputs.githubOrganizationWeight / 100}
                    </div>
                  </div>
                </div>
                {/* GitHub organization weight end */}

                <div className="col-span-6 w-full pt-0.5 bg-zinc-800" />

                {/* Events attended start */}
                <div className="col-span-6 sm:col-span-6">
                  <Field className="flex items-center justify-between">
                    <span className="flex grow flex-col">
                      <Label
                        as="span"
                        passive
                        className="text-sm/6 font-medium text-black"
                      >
                        Events Attended
                      </Label>
                      <Description as="span" className="text-sm text-zinc-600">
                        Total number of events attended by the applicant in
                        support of their project.
                      </Description>
                    </span>
                    <Switch
                      checked={eventsAttendedEnabled}
                      onChange={setEventsAttendedEnabled}
                      className="group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-zinc-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 data-[checked]:bg-primary-600"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
                      />
                    </Switch>
                  </Field>
                </div>
                {/* Events attended end */}

                {/* Events count start */}
                <div className="col-span-3">
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                    <label
                      htmlFor="eventsCount"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      Number of Events
                    </label>
                    <input
                      id="eventsCount"
                      name="eventsCount"
                      type="text"
                      required={true}
                      value={inputs.eventsCount}
                      onChange={handleInputChange}
                      placeholder="3"
                      className="block w-full border-0 py-1.5 px-0 bg-transparent text-black placeholder:text-zinc-600 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Events count end */}

                {/* Events weight start */}
                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="make"
                    className="block text-xs font-medium text-zinc-800"
                  >
                    Weight for this metric (0-1)
                  </label>

                  <div className="mt-3 relative flex items-center gap-x-2 rounded-md">
                    <input
                      type="range"
                      value={inputs.eventsWeight}
                      onChange={(e) =>
                        setInputs({
                          ...inputs,
                          eventsWeight: e.target.value,
                        })
                      }
                      className="appearance-none bg-zinc-800 slider rounded-full"
                    />
                    <div className="text-sm text-zinc-800 font-bold">
                      {inputs.eventsWeight / 100}
                    </div>
                  </div>
                </div>
                {/* Events weight end */}
                {/* Impact metrics end */}

                <div className="col-span-6 w-full pt-0.5 bg-zinc-800" />

                {/* Fellowship info start */}
                <h1 className="col-span-6 sm:col-span-6 text-2xl">
                  Fellowship Info
                </h1>

                {/* Applcation deadline start */}
                <div className="col-span-3">
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                    <label
                      htmlFor="applicationDeadline"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      Application Deadline
                    </label>
                    <input
                      id="applicationDeadline"
                      name="applicationDeadline"
                      type="date"
                      required={true}
                      value={inputs.applicationDeadline}
                      onChange={handleInputChange}
                      placeholder="2021-12-31"
                      className="block w-full border-0 py-1.5 px-0 bg-transparent text-black placeholder:text-zinc-600 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Application deadline end */}

                {/* Market deadline start */}
                <div className="col-span-3">
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                    <label
                      htmlFor="marketDeadline"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      Market Deadline
                    </label>
                    <input
                      id="marketDeadline"
                      name="marketDeadline"
                      type="date"
                      required={true}
                      value={inputs.marketDeadline}
                      onChange={handleInputChange}
                      placeholder="2021-12-31"
                      className="block w-full border-0 py-1.5 px-0 bg-transparent text-black placeholder:text-zinc-600 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Market deadline end */}

                {/* Epoch endtime start */}
                <div className="col-span-3">
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                    <label
                      htmlFor="epochEndtime"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      Epoch End Time
                    </label>
                    <input
                      id="epochEndtime"
                      name="epochEndtime"
                      type="date"
                      required={true}
                      value={inputs.epochEndtime}
                      onChange={handleInputChange}
                      placeholder="2021-12-31"
                      className="block w-full border-0 py-1.5 px-0 bg-transparent text-black placeholder:text-zinc-600 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Epoch endtime end */}

                {/* Max applicants start */}
                <div className="col-span-3 sm:col-span-3">
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                    <label
                      htmlFor="maxApplicants"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      Maximum Number of Applicants
                    </label>
                    <input
                      id="maxApplicants"
                      name="maxApplicants"
                      type="text"
                      required={true}
                      value={inputs.maxApplicants}
                      onChange={handleInputChange}
                      placeholder="10"
                      className="block w-full border-0 py-1.5 px-0 bg-transparent text-black placeholder:text-zinc-600 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Max applicants end */}
                {/* Fellowship info end */}
              </div>
            </div>
            <div className="flex justify-end bg-zinc-800/70 px-4 py-3 text-right sm:px-6 border border-zinc-200">
              <button
                type="submit"
                className={`flex items-center justify-center gap-x-3 rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${
                  isLoading
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer opacity-100"
                }`}
              >
                {isLoading ? (
                  <>
                    <RotatingLines
                      visible={true}
                      width="20"
                      strokeColor="#ffffff"
                      strokeWidth="5"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                    />{" "}
                    Creating Program
                  </>
                ) : (
                  "Create Program"
                )}
              </button>
            </div>
          </div>
        </form>

        {showSuccess && (
          <div className="rounded-md bg-primary-900 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <InformationCircleIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-primary-400"
                />
              </div>
              <div className="ml-3 flex-1 md:flex md:justify-between">
                <p className="text-sm text-black">
                  Your program was successfully created.
                </p>
                <p className="mt-3 flex items-center gap-x-3 text-sm md:ml-6 md:mt-0">
                  <a
                    href={`https://scan.sign.global/attestation/${attestationID}`}
                    className="whitespace-nowrap font-medium text-primary-500 hover:text-primary-200"
                    target="_blank"
                  >
                    View Attestation
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                  <a
                    href={`https://sepolia.etherscan.io/tx/${transactionHash}`}
                    className="whitespace-nowrap font-medium text-primary-500 hover:text-primary-200"
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
    </>
  );
}

export default CreateFellowshipPage;
