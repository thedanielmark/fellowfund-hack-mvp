/* eslint-disable @next/next/no-img-element */
"use client";

import getMarkets from "@/utils/queries/getMarkets";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";
import { useEffect, useState } from "react";

function FellowshipMarketsPage({
  params,
}: {
  params: { fellowshipId: string };
}) {
  const [applicants, setApplicants] = useState([]);

  const sample = [
    {
      id: "1",
      applicants: [
        {
          id: "1x0",
          marketAddress: "0x7c6fc2d72701445e90d9c5d17af25a12fe8efe2d",
          metadata:
            '{"name":"Daniel Mark","amount":"0.0005","bio":"Hello","gitHubUsername":"thedanielmark"}',
          grantAmount: "0",
        },
        {
          id: "1x1",
          marketAddress: "0x91a260cfe178f08baab367c0fcfaa18ac89cefd7",
          metadata:
            '{"name":"Jason Statham","amount":"0.0005","bio":"Hello again","gitHubUsername":"jason"}',
          grantAmount: "0",
        },
        {
          id: "1x2",
          marketAddress: "0x607c8f4b47bb24e0b55b98b2f2ba45ea1d21c50f",
          metadata:
            '{"name":"Meghan","amount":"0.0003","bio":"Less cause I\'m a woman","gitHubUsername":"meghan"}',
          grantAmount: "0",
        },
      ],
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = new GraphQLClient(
          process.env.NEXT_PUBLIC_GRAPH_URL || ""
        );
        const query = getMarkets(params.fellowshipId);
        const result: any = await client.request(query);

        // Log the entire result to inspect its structure
        console.log("GraphQL Response:", result);

        // Check if data and fellowships exist
        if (result?.fellowships) {
          const applicants = result.fellowships[0].applicants;
          setApplicants(applicants);
          console.log("applicants:", applicants);
        } else {
          console.log("applicants data is missing or undefined.");
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
        {applicants.map((applicant: any, index: number) => (
          <div
            key={index}
            className="flex flex-col justify-between p-5 overflow-hidden rounded-lg shadow-lg bg-zinc-100"
          >
            <div>
              <div className="flex items-center">
                <div className="shrink-0">
                  <a href={"/fellowship"}>
                    <span className="sr-only">
                      {JSON.parse(applicant.metadata).name}
                    </span>
                    <img
                      alt=""
                      src={JSON.parse(applicant.metadata).avatarURL}
                      className="size-10 rounded-full"
                    />
                  </a>
                </div>
                <div className="ml-3">
                  <Link
                    href={`/dashboard/fellowship/${applicant.id}`}
                    className="hover:underline"
                  >
                    <h1 className="text-xl font-medium text-zinc-900">
                      {JSON.parse(applicant.metadata).name}
                    </h1>
                  </Link>
                  <div className="text-sm text-gray-500 font-bold">
                    {JSON.parse(applicant.metadata).gitHubUsername}
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-black font-medium text-sm">
                  {JSON.parse(applicant.metadata).bio}
                </p>
              </div>
            </div>

            <div>
              <div className="mt-5">
                {/* <div className="flex justify-between">
                  <p className="text-sm text-gray-500">Total Fund Size</p>
                  <p className="text-sm font-medium text-black">
                    {applicant.funds / 10 ** 18} ETH
                  </p>
                </div> */}
                {/* <div className="flex justify-between">
                  <p className="text-sm text-gray-500">Application Deadline</p>
                  <p className="text-sm font-medium text-black">
                    {new Date(
                      applicant.applicationDeadline * 1000
                    ).toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500">Epoch Endtime</p>
                  <p className="text-sm font-medium text-black">
                    {new Date(applicant.epochEndTime * 1000).toLocaleString()}
                  </p>
                </div> */}
              </div>

              <div className="mt-8">
                <Link
                  href={`/dashboard/market/${applicant.id}`}
                  className="block w-full text-center rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  View Market
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FellowshipMarketsPage;
