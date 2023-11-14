"use client"

import Image from 'next/image'
import soundlogo from '../assets/Images/logo.png'
import { WebMenu } from './../Constants/index'
import '../globals.css'
import { AiOutlineMenuFold } from 'react-icons/Ai' 
import { useState } from 'react'

// w-full block flex-grow lg:flex lg:items-center lg:w-auto
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <nav className="bg-orange-100 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-2xl font-semibold">
      <span>
            <Image
           src={soundlogo}
           width={100}
           height={40}
           alt="Picture of the author"
           />
          </span> 
      </div>
        <ul className='hidden md:flex space-x-4 items-center flex-grow justify-center gap-4'>
                 {WebMenu.map((menulist,index) => (
                        <li className=' bg-white text-orange-500 px-4 py-2 rounded no-underline  hover:text-white hover:no-underline hover:bg-orange-500'  key={index}>{menulist}</li>
                 ))}                        
                 </ul>
                 <button className='bg-orange-500 text-white px-4 py-2 rounded '>Download</button>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-[#FF4000] border-[#FF4000]">
           <AiOutlineMenuFold />
        </button>
      </div>
    </div>

    {menuOpen && (
         <ul className='md:hidden mt-4'>
                 {WebMenu.map((menulist, index) => (
                        <li  key={index} className='block rounded text-white text-lg my-2 hover:underline border-b py-3 border-white-500 bg-orange-500 px-4'>{menulist}</li>
                 ))}                        
                 </ul>     
    )}
  </nav>
  )
}

export default Navbar
