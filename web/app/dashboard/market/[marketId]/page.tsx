/* eslint-disable @next/next/no-img-element */
"use client";
import TwoPointGraph from "@/components/Graphs/TwoPointGraph";
import { useState } from "react";

function MarketPage({ params }: { params: { marketId: string } }) {
  const tabs = [
    { name: "Yes", current: true },
    { name: "No", current: false },
  ];

  const [currentTab, setCurrentTab] = useState("Yes");
  const [yesValue, setYesValue] = useState("10");
  const [noValue, setNoValue] = useState("10");

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  // function to change the current tab
  function changeTab(tabName: string) {
    setCurrentTab(tabName);
  }

  return (
    <div className="py-6 sm:py-12 px-4 sm:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left column start */}
        <div className="lg:col-span-9">
          <div className="flex items-center">
            <div>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="inline-block size-10 sm:size-12 rounded-full"
              />
            </div>
            <h1 className="ml-3 text-xl sm:text-3xl font-medium text-black">
              Guil&apos;s Performance Market
            </h1>
          </div>

          {/* Graph start */}
          <div className="mt-5">
            <TwoPointGraph
              title=""
              id="prop-voters-over-time"
              data1={{
                type: "line",
                name: "Yes votes",
                endpoint: `/market/yes`,
                dataName: "proposalsCumulative",
              }}
              data2={{
                type: "line",
                name: "No votes",
                endpoint: `/market/no`,
                dataName: "votesCumulative",
              }}
            />
          </div>
          {/* Graph end */}

          <div className="mt-8 sm:mt-12">
            <h1 className="text-2xl sm:text-3xl font-medium text-black">
              Applicant Details
            </h1>
            <div className="mt-4 sm:mt-5">
              <div>
                <div>
                  <h1 className="text-sm font-medium ring-zinc-900">Name</h1>
                  <p className="text-base text-zinc-800">Fabian Ferno</p>
                </div>
                <div className="mt-5">
                  <h1 className="text-sm font-medium ring-zinc-900">
                    About the Applicant
                  </h1>
                  <p className="text-base text-zinc-800">
                    Fabian is a software engineer with 5 years of experience. He
                    is a blockchain enthusiast and has been working on
                    blockchain projects for the past 3 years. He is currently
                    working on a decentralized finance project. He is passionate
                    about blockchain technology and is looking to contribute to
                    the blockchain ecosystem. He is a strong believer in the
                    future of blockchain technology and is excited about the
                    potential of blockchain technology to revolutionize the
                    world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Left column end */}
        {/* Right column start */}
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-10 mt-4 rounded-lg border border-zinc-200 bg-zinc-100 shadow-sm">
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
                    className="mt-5 w-full rounded-md border border-transparent bg-primary-600 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-zinc-50"
                  >
                    Vote Yes
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
                    className="mt-5 w-full rounded-md border border-transparent bg-primary-600 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-zinc-50"
                  >
                    Vote No
                  </button>
                </div>
              )}
            </div>
            {/* Tabs content end */}
          </div>
        </div>
        {/* Right column end */}
      </div>
    </div>
  );
}

export default MarketPage;
