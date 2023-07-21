import React from "react";
import eth from "../assets/eth.png";
import poly from "../assets/matic-logo.png";
import arb from "../assets/arb.png";
import op from "../assets/op.png";
import Image from "next/image";
import Footer from "./Footer";

export default function Blockchain() {
  return (
    <>
      <section className="blockchainbg ">
        <div className="max-w-[1340px] mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="items-center">
              <h1 className="text-[16px] font-normal text-gradient leading-3 mb-5">
                Networks
              </h1>
            </div>
            <p className="mt-5 text-[28px] md:text-[48px]  font-bold leading-9">
              Supported Mainnet
            </p>
          </div>
          <div className="grid grid-cols-2 py-[140px] md:grid-cols-4 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <Image src={eth} alt="Ethereum" className="w-24 h-24 mb-4" />
              <p className="text-lg font-semibold text-gray-800">Ethereum</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={poly}
                alt="Polygon"
                className="w-24 h-24 mb-4"
                height={30}
                width={40}
              />
              <p className="text-lg font-semibold text-gray-800">Polygon</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={arb} alt="Arbitrum" className="w-24 h-24 mb-4" />
              <p className="text-lg font-semibold text-gray-800">Arbitrum</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={op} alt="Optimism" className="w-24 h-24 mb-4" />
              <p className="text-lg font-semibold text-gray-800">Optimism</p>
            </div>
          </div>
     
          <div className="flex-none md:flex-none text-center items-center justify-center my-10">
            <p className="mt-5 text-[28px] md:text-[48px]  font-bold leading-9">
              Included Testnet
            </p> 

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            <div className="flex flex-col items-center">
              <Image src={eth} alt="Ethereum" className="w-24 h-24 mb-4" />
              <p className="text-lg font-semibold text-gray-800">Goerli Testnet</p>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={poly}
                alt="Polygon"
                className="w-24 h-24 mb-4"
                height={30}
                width={40}
              />
              <p className="text-lg font-semibold text-gray-800">Polygon Mumbai</p>
            </div>

            <div className="flex flex-col items-center">
              <Image src={eth} alt="Ethereum" className="w-24 h-24 mb-4" />
              <p className="text-lg font-semibold text-gray-800">Sepolia Testnet</p>
            </div>
            </div>

          </div>


        </div>
      </section>
    </>
  );
}
