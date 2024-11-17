/* eslint-disable @next/next/no-img-element */
"use client";

import getFellowships from "@/utils/queries/getFellowships";
import { GraphQLClient } from "graphql-request";
import Link from "next/link";
import { useEffect, useState } from "react";

function DashboardHomePage() {
  const [fellowships, setFellowships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = new GraphQLClient(
          process.env.NEXT_PUBLIC_GRAPH_URL || ""
        );
        const query = getFellowships();
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
            className="flex flex-col justify-between p-5 overflow-hidden rounded-lg bg-white border border-zinc-200 shadow-lg"
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
