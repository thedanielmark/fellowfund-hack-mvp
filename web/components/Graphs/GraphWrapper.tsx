/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

interface DurationTabProps {
  value: string;
  selected: boolean;
}
interface Props {
  title: string;
  duration: DurationTabProps[];
  setDuration: (duration: DurationTabProps[]) => void;
  twenty4duration: DurationTabProps[];
  setTwenty4Duration: (duration: DurationTabProps[]) => void;
  children: React.ReactNode;
  height?: number;
}

export default function GraphWrapper({ title, children, height = 400 }: Props) {
  return (
    <>
      <div className="bg-zinc-900/70 border border-zinc-800 rounded-lg overflow-hidden md:p-5 p-1 shadow">
        <section className="md:flex md:justify-between items-center px-5 md:px-0 lg:mx-4 pt-4 md:p-0">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
        </section>
        <div
          className="relative lg:p-5"
          style={{ height: height, width: "100%" }}
        >
          <div className="absolute text-zinc-600 top-[100px] right-[150px] font-bold">
            <div className="flex items-center space-x-2">
              <Image
                className="block w-6 h-auto opacity-50"
                src="/logo.png"
                alt="FellowFund"
                width={464}
                height={500}
                priority={true}
              />
              <span className="text-zinc-500">FellowFund</span>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
