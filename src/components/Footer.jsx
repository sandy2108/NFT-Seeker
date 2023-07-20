import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-[1340px] mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white">About NFT Seeker</h3>
            <p className="mt-4">NFT Seeker is an innovative app that allows you to discover, track, and analyze NFTs across multiple blockchains. Stay up-to-date with the latest trends and find unique digital assets with ease.</p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Explorer</Link></li>
              <li><Link href="https://twitter.com/Sanjaysk2108">Contact</Link></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white">Supported Blockchains</h3>
            <ul className="mt-4">
              <li>Ethereum</li>
              <li>Polygon</li>
              <li>Arbitrum</li>
              <li>Optimism</li>
              <li>Goerli Testnet</li>
              <li>Sepolia Testnet</li>
              <li>Polygon Mumbai</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <p className="mt-4">Email: info@nftseeker.com</p>
           
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <p className="text-center text-sm text-gray-400">&copy; {new Date().getFullYear()} NFT Seeker. All rights reserved.</p>
      </div>
    </footer>
  );
}
