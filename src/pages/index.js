import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Blockchain from "@/components/Blockchain";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} herobg`}>
      <Head>
        <title>NFT SEEKER - Build it for Community</title>
        <meta name="title" content="NFT SEEKER - Built for the Community"/>
        <meta name="description" content="NFT Seeker: Your Gateway to Digital Treasures! Explore, manage, and cherish your NFT collections from major networks, including Ethereum Testnet, Polygon Testnet, and Sepolia Testnet, all in one convenient platform. Discover the hidden gems within your collections and fast-track your journey to the world of blockchain art. Join us in beta and become a part of our thriving community, now with added support for Sepolia Testnet!"/>
        <meta name="keywords" content="NFT Seeker, Digital Treasures, NFT Collections, Ethereum Testnet, Polygon Testnet, Sepolia Testnet, Blockchain Art, Beta Community, Sepolia, Testnet, Blockchain Exploration"/>
      </Head>
      <Hero />
      <Features />
      <Blockchain />
    </main>
  );
}
