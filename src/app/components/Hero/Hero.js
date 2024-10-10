"use client"
import React from 'react'
import salonImage from "../../assets/salonImage.svg"
import Image from "next/image";
import Navbar from '../Navbar/Navbar';
import AppointmentButton from '../Buttons/AppointmentButton';
import { useState,useEffect } from 'react';

const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative flex flex-col items-center">
        <div className="absolute z-20 top-0 w-full">
               <Navbar/>
        </div>
     <div className="w-full">
     <Image src = {salonImage} className="w-full" />
    </div>
    <div className="flex flex-col items-center justify-center absolute z-10 text-white text-center h-full w-full max-sm:px-4 max-sm:mt-7">
    <h1 className="text-[19px] sm:text-4xl md:text-5xl xl:text-7xl font-semibold ">
      Our Hairstyle Enhances Your Smile!!
    </h1>
    <p className="relative mt-2 md:mt-6 text-[16px] sm:text-lg md:text-2xl xl:text-4xl text-center ">
      Our barbershop is the territory created purely for males who {!isMobile&&  <br />}
      appreciate premium quality, time and flawless look.
    </p>
    <AppointmentButton/>
    </div>
  </section>
  )
}

export default Hero