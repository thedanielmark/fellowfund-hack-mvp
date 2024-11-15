/* eslint-disable @next/next/no-img-element */
"use client";
import TwoPointGraph from "@/components/Graphs/TwoPointGraph";

function MarketPage({ params }: { params: { marketId: string } }) {
  return (
    <div className="py-12">
      <div className="grid grid-cols-12 gap-x-5">
        {/* Left column start */}
        <div className="col-span-8">
          <div className="flex items-center">
            <div>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="inline-block size-12 rounded-full"
              />
            </div>
            <h1 className="ml-3 text-3xl font-medium text-white">
              Fabian&apos;s Performance Market
            </h1>
          </div>

          {/* Graph start */}
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
          {/* Graph end */}
        </div>
        {/* Left column end */}
        {/* Right column start */}
        <div className="col-span-4 mt-4 rounded-lg border border-zinc-800 bg-zinc-900 shadow-sm">
          <h3 className="sr-only">Items in your cart</h3>

          <div className="border-t border-zinc-200 px-4 py-6 sm:px-6">
            <button
              type="submit"
              className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-zinc-50"
            >
              Confirm order
            </button>
          </div>
        </div>
        {/* Right column end */}
      </div>
    </div>
  );
}

export default MarketPage;
