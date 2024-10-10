import React from 'react'
import Image from 'next/image'
import cutting1 from "../../assets/cutting1 (1).svg"
import cutting2 from "../../assets/cutting1 (2).svg"
import cutting3 from "../../assets/cutting1 (3).svg"

const Introduction = () => {
  return (
    <div className="flex max-xl:flex-col gap-2 w-full">
        <div className="w-full xl:w-[60%] flex flex-col items-center pt-28 px-7">
        <h2 className="text-[40px] text-[#D9A536]">Introducing</h2>
      <h1 className="mt-1.5 text-6xl font-semibold text-center text-stone-700 max-md:text-4xl leading-[90px]">
        BARBERZ..The Barbershop <br /> Since 1990
      </h1>
      <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfa2c6417989608791e4b78f3b0bebb382cf22b5aa27bdff1b7ecae8dfe397da?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e"
      alt="Barberz logo"
      className="object-contain mt-5 max-w-full aspect-[1.03] w-[120px]"
    />
     <div className="self-stretch mt-1.5 w-full text-2xl text-center text-zinc-800 max-md:max-w-full">
      <p>
        Barber is a person whose occupation is mainly to cut dress groom style and shave men's and boys' hair. A barber's place of work is known as a "barbershop" or a "barber's". Barbershops are also places of social interaction and public discourse. In some instances, barbershops are also public forums.
      </p>
    </div>
    <button className="px-16 py-5 mt-14  text-[29px] font-medium text-white bg-[#D9A536] rounded-md max-md:px-5 max-md:mt-10">
      MORE ABOUT US
    </button>
        </div>
  <div className="pt-12 w-full xl:w-[40%] ">
    <div className="xl:relative grid grid-cols-3 xl:w-[540px] w-full px-12">
    <Image src={cutting1} alt="" className=" max-lg:w-full xl:absolute xl:z-20 xl:right-0 xl:top-[510px]"/>
    <Image src={cutting2} alt="" className="max-lg:w-full xl:absolute xl:top-[270px] xl:z-10"/>
    <Image src={cutting3} alt="" className="max-lg:w-full xl:absolute xl:right-0"/>
    </div>
  </div>
    </div>
  )
}

export default Introduction