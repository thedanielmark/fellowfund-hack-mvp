/**
 *
 * Error
 *
 */
import * as React from "react";

interface Props {
  message?: string;
}

export function Error({ message = "" }: Props) {
  return (
    <>
      <div className="dark:bg-zinc-100/70 border dark:border-zinc-200 rounded-lg lg:w-full h-full flex justify-center items-center">
        <div
          className="lg:w-full flex justify-center items-center"
          style={{ height: 300 }}
        >
          <h1 className="dark:text-slate-100">{message}</h1>
        </div>
      </div>
    </>
  );
}
