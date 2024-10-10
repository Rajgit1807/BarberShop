import React from 'react'
import Image from 'next/image'
import Logo1 from "../../assets/Barberz white.svg"
import Logo2 from "../../assets/Barberz.svg"

const Logo = () => {
  return (
    <div className="relative mt-[-3px] h-fit cursor-pointer">
        <Image src= {Logo2} alt="logo" className="absolute left-3 xl:left-4 top-[2.8px] xl:top-1 w-[145px] xl:w-[160px]" />
        <Image src= {Logo1} alt="logo" className="mx-auto w-[185px] xl:w-[210px]"/>
    </div>
  )
}

export default Logo