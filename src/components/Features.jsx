import React from "react";
import Card from "./Card";

export default function Features() {
  return (
    <div className="w-full">
      <div className="max-w-[1340px] mx-auto p-4">
        <div className="flex flex-col items-center justify-center">
          <div className="items-center">
            <h1 className="text-[16px] font-normal text-gradient leading-3 mb-5">
              Features
            </h1>
          </div>
          <p className="my-5 text-[28px] md:text-[48px]  font-bold leading-9">
            Tools for NFTians
          </p>
        </div>
        <div className="flex items-center justify-center sm:flex sm:items-start mt-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-9">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
