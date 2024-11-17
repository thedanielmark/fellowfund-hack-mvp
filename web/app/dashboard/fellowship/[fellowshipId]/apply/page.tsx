/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@/providers/AuthProvider";
import { ethers, parseEther, toUtf8Bytes } from "ethers";
import { contractABI } from "@/utils/contractABI";
import { RotatingLines } from "react-loader-spinner";
import { Description, Field, Label, Switch } from "@headlessui/react";

function ApplyToFellowhipPage({
  params,
}: {
  params: { fellowshipId: string };
}) {
  const { address, getSigner } = useAuth();
  const [inputs, setInputs] = useState<any>({
    name: "",
    avatarURL: "",
    bio: "",
    gitHubUsername: "",
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

    // Write to contract
    const signer = await getSigner();

    const contractAddress = process.env.NEXT_PUBLIC_DEPLOYED_ADDRESS || "";
    const contract = new ethers.Contract(
      contractAddress,
      JSON.parse(JSON.stringify(contractABI)),
      signer
    );

    const tx = await contract.applyToFellowship(
      BigInt(params.fellowshipId),
      JSON.stringify(inputs)
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

  //   Get details of the fellowship program
  useEffect(() => {
    const fetchFellowshipProgram = async () => {
      // Fetch Fellowship Program
      const url = `${process.env.NEXT_PUBLIC_API_ROUTE}/fellowship/${params.fellowshipId}`;

      // Send a GET request
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json(); // Parse the JSON response
        })
        .then((data) => {
          console.log("Success:", data);
          setMetadataIPFSHash(data.metadataIPFSHash);
          setAttestationID(data.attestationID);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    if (params.fellowshipId) {
      fetchFellowshipProgram();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.fellowshipId]);

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
            <div className="space-y-6 bg-white border-t border-x border-zinc-200 shadow-lg px-4 py-6 sm:p-6 overflow-hidden rounded-t-lg">
              <div>
                <h1 className="text-2xl font-semibold leading-6 text-black">
                  Create your application
                </h1>
                <p className="mt-1 text-sm text-zinc-600">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>

              <div className="grid grid-cols-6 gap-6">
                {/* Name start */}
                <div className="col-span-3 sm:col-span-3">
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      Your Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required={true}
                      value={inputs.name}
                      onChange={handleInputChange}
                      placeholder="Rasputin"
                      className="block w-full border-0 py-1.5 px-0 bg-transparent text-black placeholder:text-zinc-600 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Name end */}

                {/* Amount start */}
                <div className="col-span-3 sm:col-span-3">
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                    <label
                      htmlFor="avatarURL"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      Avatar URL
                    </label>
                    <div className="relative rounded-md">
                      <input
                        id="avatarURL"
                        name="avatarURL"
                        type="text"
                        placeholder="https://example.com/avatar.png"
                        value={inputs.avatarURL}
                        onChange={handleInputChange}
                        className="block w-full border-0 py-1.5 px-0 bg-transparent text-black placeholder:text-zinc-600 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                {/* Amount end */}

                {/* Bio start */}
                <div className="col-span-6 sm:col-span-6">
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                    <label
                      htmlFor="bio"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      Your short bio
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      rows={3}
                      required={true}
                      value={inputs.bio}
                      onChange={handleInputChange}
                      placeholder="My name is Rasputin and I'm a lover of the Russian queen..."
                      className="block w-full border-0 py-1.5 px-0 bg-transparent text-black placeholder:text-zinc-600 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Bio end */}

                <div className="col-span-6 w-full pt-0.5 bg-zinc-100" />

                <div className="col-span-6">
                  <h1 className="text-2xl font-semibold leading-6 text-black">
                    Impact metrics
                  </h1>

                  <div className="mt-2">
                    <span className="text-sm text-zinc-600">
                      Your GitHub address will be used to check how frequently
                      you commit code to your project.
                    </span>
                  </div>
                </div>

                {/* GitHub username start */}
                <div className="col-span-6 sm:col-span-6">
                  <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-zinc-200 focus-within:ring-2 focus-within:ring-primary-600">
                    <label
                      htmlFor="gitHubUsername"
                      className="block text-xs font-medium text-zinc-800"
                    >
                      Your GitHub username
                    </label>
                    <input
                      id="gitHubUsername"
                      name="gitHubUsername"
                      type="text"
                      required={true}
                      value={inputs.gitHubUsername}
                      onChange={handleInputChange}
                      placeholder="daddycool"
                      className="block w-full border-0 py-1.5 px-0 bg-transparent text-black placeholder:text-zinc-600 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="mt-3">
                    <a
                      href="http://localhost:5174"
                      target="_blank"
                      className="rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                    >
                      Validate my GitHub
                    </a>
                  </div>
                </div>
                {/* GitHub username end */}
              </div>
            </div>
            <div className="flex justify-end bg-zinc-200 px-4 py-3 text-right sm:px-6 border-b border-x border-white/10 rounded-b-lg">
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
                      strokeColor="#000000"
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
          <div className="rounded-md bg-primary-100 p-4">
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
    </>
  );
}

export default ApplyToFellowhipPage;
