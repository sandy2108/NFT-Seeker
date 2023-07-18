import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Features from '@/components/Features'
import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Blockchain from '@/components/Blockchain'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className} herobg`}
    >
   
     <Hero/>
     <Features/>
     <Blockchain/>
     <Footer/>
    </main>
  )
}
