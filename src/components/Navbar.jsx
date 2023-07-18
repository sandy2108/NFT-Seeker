import React, { useState } from 'react'
import Link from 'next/link'
import { navLinks } from '@/Constants'
import {RiMenu5Line} from "react-icons/ri";
import {AiOutlineClose} from "react-icons/ai"

const Navbar = () => {

  const [active, setActive] = useState("Home");
  const [toggle , setToggle] = useState(false);

  return (
    <nav className='navbarbg '>
    <div className='max-w-[1340px] mx-auto flex justify-between items-center py-6 px-4 '>
        <Link href="/">
            <h1 className='text-2xl text-black md:text-4xl font-bold'>NFT SEEKER</h1>        
        </Link>

        <ul className='list-none sm:flex hidden justify-end items-center '>
           {navLinks.map((nav,index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-lg ${active === nav.title ? "text-black" : "text-gray-800"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
               <Link href={`${nav.id}`}>{nav.title}</Link>
            </li>
           ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
           {toggle ? <AiOutlineClose className='text-2xl text-gray-500 '  onClick={() => setToggle(!toggle)}/> : <RiMenu5Line className='text-2xl text-black' onClick={() => setToggle(!toggle)} />}
            
           <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-slate-400"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        </div>
    </div>
    </nav>
  )
}

export default Navbar