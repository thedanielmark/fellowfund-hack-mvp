/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@/providers/AuthProvider";
import { ethers, toUtf8Bytes } from "ethers";
import { contractABI } from "@/utils/contractABI";
import { RotatingLines } from "react-loader-spinner";
import { Description, Field, Label, Switch } from "@headlessui/react";

function RegisterVehiclePage() {
  const { address, getSigner } = useAuth();
  const [inputs, setInputs] = useState<any>({
    deviceDefinitionId: "",
    name: "",
    make: "",
    model: "",
    year: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [enabled, setEnabled] = useState(false);
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
  };

  useEffect(() => {
    const writeData = async () => {
      // Write to contract
      const signer = await getSigner();

      const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";
      const contract = new ethers.Contract(
        contractAddress,
        JSON.parse(JSON.stringify(contractABI)),
        signer
      );

      const tx = await contract.mintVehicle(
        metadataIPFSHash,
        toUtf8Bytes(attestationID)
      );
      console.log(tx);
      // Wait for transaction to finish
      const receipt = await tx.wait();
      if (receipt.status === 1) {
        // POST request to API
        const url = `${process.env.NEXT_PUBLIC_API_ROUTE}/broadcast/vehicle-created`;

        const payload: { [key: string]: any } = {
          address,
        };

        // Push inputs into payload using map
        Object.keys(inputs).map((key: any) => {
          payload[key] = inputs[key];
        });

        // Send a POST request
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Indicates you're sending JSON data
          },
          body: JSON.stringify(payload), // Convert the data object to JSON string
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json(); // Parse the JSON response
          })
          .then((data) => {
            console.log("Success:", data);
            setShowSuccess(true);
            setTransactionHash(receipt.hash);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    };

    if (metadataIPFSHash && attestationID) {
      writeData();
      console.log("Called");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [metadataIPFSHash, attestationID]);

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

  return (
    <>
      <div className="my-10 space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
        <form onSubmit={handleSubmit}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-zinc-900/70 border border-zinc-800 px-4 py-6 sm:p-6 overflow-hidden">
              <div>
                <h1 className="text-2xl font-semibold leading-6 text-white">
                  Create a New Fellowship Program
                </h1>
                <p className="mt-1 text-sm text-zinc-400">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>

              <div className="grid grid-cols-6 gap-6">
                {/* Name start */}
                <div className="col-span-3 sm:col-span-3">
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-zinc-800 focus-within:ring-2 focus-within:ring-primary-600">
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-zinc-200"
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
                      placeholder="Danny's Fellowship Programme"
                      className="block w-full border-0 py-1.5 px-0 bg-transparent text-white placeholder:text-zinc-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Name end */}

                {/* Amount start */}
                <div className="col-span-3 sm:col-span-3">
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-zinc-800 focus-within:ring-2 focus-within:ring-primary-600">
                    <label
                      htmlFor="make"
                      className="block text-xs font-medium text-zinc-200"
                    >
                      Programme Budget
                    </label>

                    <div className="relative rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        id="price"
                        name="price"
                        type="text"
                        placeholder="0.00"
                        aria-describedby="price-currency"
                        className="block w-full rounded-md border-0 py-1.5 pl-3 pr-12 bg-transparent text-white placeholder:text-zinc-400 focus:ring-0 sm:text-sm/6"
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

                {/* Impact metrics start */}
                <h1 className="col-span-6 sm:col-span-6 text-2xl">
                  Impact Metrics
                </h1>

                {/* GitHub commits start */}
                <div className="col-span-3 sm:col-span-6">
                  <Field className="flex items-center justify-between">
                    <span className="flex grow flex-col">
                      <Label
                        as="span"
                        passive
                        className="text-sm/6 font-medium text-white"
                      >
                        GitHub Commits
                      </Label>
                      <Description as="span" className="text-sm text-zinc-400">
                        Total number of GitHub commits made by the applicant to
                        their project.
                      </Description>
                    </span>
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
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
                {/* Events attended start */}
                <div className="col-span-3 sm:col-span-6">
                  <Field className="flex items-center justify-between">
                    <span className="flex grow flex-col">
                      <Label
                        as="span"
                        passive
                        className="text-sm/6 font-medium text-white"
                      >
                        Events Attended
                      </Label>
                      <Description as="span" className="text-sm text-zinc-400">
                        Total number of events attended by the applicant in
                        support of their project.
                      </Description>
                    </span>
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
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
                {/* Impact metrics end */}
              </div>
            </div>
            <div className="flex justify-end bg-zinc-800/70 px-4 py-3 text-right sm:px-6 border border-zinc-800">
              <button
                type="submit"
                className={`flex items-center justify-center gap-x-3 rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${
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
                <p className="text-sm text-white">
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

export default RegisterVehiclePage;
