/* eslint-disable @next/next/no-img-element */
"use client";

import getMarkets from "@/utils/queries/getMarkets";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";
import { useEffect, useState } from "react";

function DashboardHomePage() {
  // const markets = [
  //   {
  //     name: "Will Alice be able to increase her performance by 25%?",
  //     pfp_url: "https://i.pravatar.cc/150?img=5",
  //     chance: 25,
  //     volume: 1000,
  //     fundName: "Ethereum",
  //     fundLogo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  //     yes: 600,
  //     no: 400,
  //   },
  //   {
  //     name: "Will Bob be able to increase his performance by 17%?",
  //     pfp_url: "https://i.pravatar.cc/150?img=10",
  //     chance: 15,
  //     volume: 500,
  //     fundName: "Polygon",
  //     fundLogo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
  //     yes: 300,
  //     no: 200,
  //   },
  //   {
  //     name: "Will Charlie be able to increase his performance by 21%?",
  //     pfp_url: "https://i.pravatar.cc/150?img=15",
  //     chance: 10,
  //     volume: 200,
  //     fundName: "Binance Smart Chain",
  //     fundLogo: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
  //     yes: 150,
  //     no: 50,
  //   },
  //   {
  //     name: "Will Diana be able to increase her performance by 5%?",
  //     pfp_url: "https://i.pravatar.cc/150?img=20",
  //     chance: 50,
  //     volume: 3000,
  //     fundName: "Avalanche",
  //     fundLogo: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
  //     yes: 2000,
  //     no: 1000,
  //   },
  // ];

  const sampleData = [
    {
      id: "0",
      epochEndTime: "1732233600",
      applicationDeadline: "1732060800",
      maxApplicants: "10",
      metadata:
        '{"name":"My first program","amount":"0.0005","githubCommits":true,"githubOrganizationHandle":"","githubOrganizationWeight":"63","eventsAttended":false,"eventsCount":"3","eventsWeight":"76","applicationDeadline":"2024-11-20","marketDeadline":"2024-11-21","epochEndtime":"2024-11-22","status":"Created","maxApplicants":"10","gitHubOrganizationHandle":"fellowfund"}',
      funds: "500000000000000",
    },
    {
      id: "1",
      epochEndTime: "1731774075",
      applicationDeadline: "1731773835",
      maxApplicants: "100",
      metadata:
        '{"name":"NounsDAO Fellow Special Edition","description":"This fellowship intends to fund active contributors, bringing results and stickness to the ecosystem.","githubOrg":"fellowfund","kpiTargets":{"totalCommits":{"targetValue":6,"weight":0.8},"poapEvents":{"targetValue":2,"weight":0.2}}}',
      funds: "0",
    },
    {
      id: "2",
      epochEndTime: "1732233600",
      applicationDeadline: "1732060800",
      maxApplicants: "10",
      metadata:
        '{"name":"My first program","amount":"0.0005","githubCommits":true,"githubOrganizationHandle":"","githubOrganizationWeight":"63","eventsAttended":false,"eventsCount":"3","eventsWeight":"76","applicationDeadline":"2024-11-20","marketDeadline":"2024-11-21","epochEndtime":"2024-11-22","status":"Created","maxApplicants":"10","gitHubOrganizationHandle":"fellowfund"}',
      funds: "500000000000000",
    },
    {
      id: "3",
      epochEndTime: "1732233600",
      applicationDeadline: "1732060800",
      maxApplicants: "10",
      metadata:
        '{"name":"My first program","amount":"0.0005","githubCommits":true,"githubOrganizationHandle":"","githubOrganizationWeight":"47","eventsAttended":false,"eventsCount":"3","eventsWeight":"69","applicationDeadline":"2024-11-20","marketDeadline":"2024-11-21","epochEndtime":"2024-11-22","status":"Created","maxApplicants":"10","gitHubOrganizationHandle":"fellowfund"}',
      funds: "500000000000000",
    },
    {
      id: "4",
      epochEndTime: "1731774870",
      applicationDeadline: "1731774630",
      maxApplicants: "10",
      metadata:
        '{"name":"NounsDAO Fellow Special Edition","description":"This fellowship intends to fund active contributors, bringing results and stickness to the ecosystem.","githubOrg":"fellowfund","kpiTargets":{"totalCommits":{"targetValue":6,"weight":0.8},"poapEvents":{"targetValue":2,"weight":0.2}}}',
      funds: "1000",
    },
  ];

  const [fellowships, setFellowships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = new GraphQLClient(
          process.env.NEXT_PUBLIC_GRAPH_URL || ""
        );
        const query = getMarkets();
        const result: any = await client.request(query);

        // Log the entire result to inspect its structure
        console.log("GraphQL Response:", result);

        // Check if data and fellowships exist
        if (result?.fellowships) {
          const fellowships = result.fellowships;
          setFellowships(fellowships);
          console.log("Fellowships:", fellowships);
        } else {
          console.log("Fellowships data is missing or undefined.");
        }
      } catch (err: any) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="relative w-full h-full"
      style={{
        minHeight: "calc(-64px + 100vh)",
      }}
    >
      <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        {fellowships.map((fellowship: any, index: number) => (
          <div
            key={index}
            className="flex flex-col justify-between p-5 overflow-hidden rounded-lg shadow-lg bg-zinc-100"
          >
            <div>
              <div className="flex items-center">
                <div className="shrink-0">
                  <a href={"/fellowship"}>
                    <span className="sr-only">
                      {JSON.parse(fellowship.metadata).name}
                    </span>
                    <img
                      alt=""
                      src={JSON.parse(fellowship.metadata).logoURL}
                      className="size-10 rounded-full"
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <h1 className="text-xl font-medium text-zinc-900">
                    <Link
                      href={`/dashboard/fellowship/${fellowship.id}`}
                      className="hover:underline"
                    >
                      {JSON.parse(fellowship.metadata).name}
                    </Link>
                  </h1>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-black font-medium text-sm">
                  {JSON.parse(fellowship.metadata).description}
                </p>
              </div>
            </div>

            <div>
              <div className="mt-5">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500">Total Fund Size</p>
                  <p className="text-sm font-medium text-black">
                    {fellowship.funds / 10 ** 18} ETH
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500">Application Deadline</p>
                  <p className="text-sm font-medium text-black">
                    {new Date(
                      fellowship.applicationDeadline * 1000
                    ).toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500">Epoch Endtime</p>
                  <p className="text-sm font-medium text-black">
                    {new Date(fellowship.epochEndTime * 1000).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href={`/dashboard/fellowship/${fellowship.id}`}
                  className="block w-full text-center rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Apply to Fellowship
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardHomePage;
