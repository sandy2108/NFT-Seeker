import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Blockchain from "@/components/Blockchain";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className} herobg`}>
      <Hero />
      <Features />
      <Blockchain />
    </main>
  );
}
