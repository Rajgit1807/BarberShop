"use client"
import React from 'react'
import Logo from '../Logo/Logo';
import Socials from './Socials';
import { useState,useEffect } from 'react';
import close from "../../assets/close.png"
import Image from 'next/image';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 880);
      };
  
      // Initial check
      handleResize();
  
      // Add event listener
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div className="bg-[#292727] bg-opacity-35 flex flex-col items-center w-full pt-1 sm:pt-4 max-sm:h-[85px]">
        <Socials/>
        {!isMobile &&  <div className=" text-white flex justify-between w-full px-[10%] font-semibold text-[18px] xl:text-[21px] my-3 xl:my-8">
          <a className="hover:text-[#f5cf84] cursor-pointer">Home</a>
          <div className="hover:text-[#f5cf84] cursor-pointer">
          <a className="inline">Services</a>
          <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ebc8f1bd227902d7eb92687922fd1b4f6c33602d545de4f2ca033fda4de5cdb?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e" 
        className=" w-[10px] h-[10px] xl:w-[12px] xl:h-[12px] mt-[3px] ml-[1px] inline" 
        alt=""
      />
          </div>
          <a className="hover:text-[#f5cf84] cursor-pointer">About Us</a>
                 <Logo/>
          <a className="hover:text-[#f5cf84] cursor-pointer">Team</a>
          <a className="hover:text-[#f5cf84] cursor-pointer">Booking</a>
          <a className="hover:text-[#f5cf84] cursor-pointer">Contact Us</a>
        </div>}
       
        {isMobile && 
        <div className="w-full flex justify-between sm:items-center px-4 sm:px-[10%] mt-1 max-sm:mt-[-8px]">
            <div className="mt-1 sm:mt-5">
            <Logo/>
            </div>
           <div>
           <button
             onClick={toggleMenu}
             className="p-2 focus:outline-none"
           >
             <div className="space-y-1 cursor-pointer">
               <span className="block w-6 h-0.5 bg-white"></span>
               <span className="block w-6 h-0.5 bg-white"></span>
               <span className="block w-6 h-0.5 bg-white"></span>
             </div>
           </button>
     
           <div
             className={`fixed top-0 left-0 h-full w-52 bg-[#655025] transform ${
               isOpen ? 'translate-x-0' : '-translate-x-full'
             } transition-transform duration-300 ease-in-out`}
           >
             <button
               onClick={toggleMenu}
               className="absolute top-4 right-4  focus:outline-none cursor-pointer"
             >
               <Image src={close} alt="close icon"/>
             </button>
             <nav className="mt-16 space-y-3 px-8 text-white font-semibold">
               <a href="#" className="hover:text-[#f5cf84] block cursor-pointer">Home</a>
               <a href="#" className="hover:text-[#f5cf84] block cursor-pointer">Services</a>
               <a href="#" className="hover:text-[#f5cf84] block cursor-pointer">About Us</a>
               <a className="hover:text-[#f5cf84] block cursor-pointer">Team</a>
               <a className="hover:text-[#f5cf84] block cursor-pointer">Booking</a>
               <a href="#" className="hover:text-[#f5cf84] block cursor-pointer">Contact Us</a>
             </nav>
           </div>
               
         </div>
         </div>
         }
     
    </div>
  )
}

export default Navbar