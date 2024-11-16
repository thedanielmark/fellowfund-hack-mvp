/* eslint-disable @next/next/no-img-element */
"use client";
import TwoPointGraph from "@/components/Graphs/TwoPointGraph";
import { useState } from "react";

function MarketPage({ params }: { params: { marketId: string } }) {
  const tabs = [
    { name: "Buy", href: "#", current: false },
    { name: "Sell", href: "#", current: false },
  ];
  const [currentTab, setCurrentTab] = useState("Buy");

  const [buyValue, setBuyValue] = useState("10");

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  // function to change the current tab
  function changeTab(tabName: string) {
    setCurrentTab(tabName);
  }

  return (
    <div className="py-12">
      <div className="grid grid-cols-12 gap-x-5">
        {/* Left column start */}
        <div className="col-span-9">
          <div className="flex items-center">
            <div>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="inline-block size-12 rounded-full"
              />
            </div>
            <h1 className="ml-3 text-3xl font-medium text-white">
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
        </div>
        {/* Left column end */}
        {/* Right column start */}
        <div className="col-span-3 mt-4 rounded-lg border border-zinc-800 bg-zinc-900 shadow-sm">
          <div className="p-5 flex items-center">
            <div className="shrink-0">
              <img
                alt=""
                src="https://i.pravatar.cc/150?img=5"
                className="size-10 rounded-full"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-zinc-100">
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
              <div className="px-5 border-b border-zinc-800">
                <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab.name}
                      onClick={() => changeTab(tab.name)}
                      className={classNames(
                        tab.name === currentTab
                          ? "border-primary-500 text-white"
                          : "border-transparent text-zinc-400 hover:border-zinc-400 hover:text-zinc-200",
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
          <div className="p-5">
            {currentTab === "Buy" && (
              <div>
                <div className="flex items-center gap-x-3">
                  <button
                    type="submit"
                    className="w-full rounded-md border border-transparent bg-green-600 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-zinc-50"
                  >
                    Yes (0.91)
                  </button>
                  <button
                    type="submit"
                    className="w-full rounded-md border border-transparent bg-red-600 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-zinc-50"
                  >
                    No (0.09)
                  </button>
                </div>

                <div>
                  <label
                    htmlFor="company-website"
                    className="block text-sm/6 font-medium text-zinc-900"
                  >
                    Buy Value
                  </label>
                  <div className="mt-2 flex rounded-md shadow-sm">
                    <button
                      className="inline-flex items-center rounded-l-md border border-r-0 border-zinc-500 px-4 text-zinc-500 sm:text-sm font-bold focus:ring-2 focus:ring-inset focus:ring-primary-600"
                      onClick={() => {
                        const value = parseInt(buyValue) - 1;
                        setBuyValue(value.toString());
                      }}
                    >
                      -
                    </button>
                    <input
                      id="company-website"
                      name="company-website"
                      type="text"
                      placeholder="10"
                      value={buyValue}
                      onChange={(e) => setBuyValue(e.target.value)}
                      className="block w-full min-w-0 flex-1 rounded-none border-0 py-1.5 bg-transparent text-white ring-1 ring-inset ring-zinc-500 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm/6"
                    />
                    <button
                      className="inline-flex items-center rounded-r-md border border-l-0 border-zinc-500 px-4 text-zinc-500 sm:text-sm font-bold focus:ring-2 focus:ring-inset focus:ring-primary-600"
                      onClick={() => {
                        const value = parseInt(buyValue) + 1;
                        setBuyValue(value.toString());
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-5 w-full rounded-md border border-transparent bg-primary-600 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-zinc-50"
                >
                  Buy
                </button>

                <div className="mt-12 grid grid-cols-2 text-sm">
                  <div className="text-zinc-400 font-seimbold">Avg Price</div>
                  <div className="text-white font-semibold text-right">
                    0.91
                  </div>
                  <div className="text-zinc-400 font-seimbold">Shares</div>
                  <div className="text-white font-semibold text-right">10</div>
                  <div className="text-zinc-400 font-seimbold">
                    Potential Return
                  </div>
                  <div className="text-white font-semibold text-right">9.1</div>
                </div>
              </div>
            )}
          </div>
          {/* Tabs content end */}
        </div>
        {/* Right column end */}
      </div>
    </div>
  );
}

export default MarketPage;
