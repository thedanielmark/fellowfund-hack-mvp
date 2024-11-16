/* eslint-disable @next/next/no-img-element */
"use client";

function DashboardHomePage() {
  const markets = [
    {
      name: "Will Alice be able to increase her performance by 25%?",
      pfp_url: "https://i.pravatar.cc/150?img=5",
      chance: 25,
      volume: 1000,
      fundName: "Ethereum",
      fundLogo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      yes: 600,
      no: 400,
    },
    {
      name: "Will Bob be able to increase his performance by 17%?",
      pfp_url: "https://i.pravatar.cc/150?img=10",
      chance: 15,
      volume: 500,
      fundName: "Polygon",
      fundLogo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
      yes: 300,
      no: 200,
    },
    {
      name: "Will Charlie be able to increase his performance by 21%?",
      pfp_url: "https://i.pravatar.cc/150?img=15",
      chance: 10,
      volume: 200,
      fundName: "Binance Smart Chain",
      fundLogo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
      yes: 150,
      no: 50,
    },
    {
      name: "Will Diana be able to increase her performance by 5%?",
      pfp_url: "https://i.pravatar.cc/150?img=20",
      chance: 50,
      volume: 3000,
      fundName: "Avalanche",
      fundLogo: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
      yes: 2000,
      no: 1000,
    },
  ];

  return (
    <div
      className="relative w-full h-full"
      style={{
        minHeight: "calc(-64px + 100vh)",
      }}
    >
      <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        {markets.map((market, index) => (
          <div
            key={index}
            className="flex flex-col p-5 overflow-hidden rounded-lg shadow-lg bg-zinc-100"
          >
            <div className="flex items-center">
              <div className="shrink-0">
                <a href={"/market"}>
                  <span className="sr-only">{market.name}</span>
                  <img
                    alt=""
                    src={market.pfp_url}
                    className="size-10 rounded-full"
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-zinc-100">
                  <a href={"/author"} className="hover:underline">
                    {market.name}
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center space-x-2">
              <div className="text-xs font-medium text-gray-900">Consensus</div>
              {Number(market.yes) + Number(market.no) === 0 ? (
                <div className="w-full flex bg-gray-200 dark:bg-zinc-800 rounded-full h-1.5"></div>
              ) : (
                <div className="w-full flex bg-gray-200 dark:bg-zinc-100 rounded-full h-1.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{
                      width: `${
                        (Number(market.yes) /
                          (Number(market.yes) + Number(market.no))) *
                        100
                      }%`,
                    }}
                  />
                  <div
                    className="bg-red-500 h-2.5 rounded-full"
                    style={{
                      width: `${
                        (Number(market.no) /
                          (Number(market.yes) + Number(market.no))) *
                        100
                      }%`,
                    }}
                  />
                </div>
              )}
            </div>

            <div className="mt-8">
              <a
                href="/market/id"
                className="block w-full text-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Market
              </a>
            </div>

            <div className="mt-5 flex items-center">
              <div>
                <img
                  alt=""
                  src={market.fundLogo}
                  className="inline-block size-5 rounded-full"
                />
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium text-gray-200 group-hover:text-black">
                  {market.fundName}
                </p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700"></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardHomePage;
