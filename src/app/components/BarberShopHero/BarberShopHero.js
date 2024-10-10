import React from 'react'
import AppointmentButton from '../Buttons/AppointmentButton';

const BarberShopHero = () => {
  return (
    <section className="flex flex-col text-3xl text-white rounded-none relative  mt-16">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d2c842812522ae9129b0ec5425d52362a763371bf90c62c2de141f4e36c4189?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e"
          alt=""
          className="w-full"
        />
        <HeroContent />
    </section>
  )
}

export default BarberShopHero

function HeroContent() {
    return (
      <div className="flex flex-col items-center absolute w-full h-full justify-center">
        <h2 className="text-4xl text-[#D9A536] ">
          Best Barbershop In The City
        </h2>
        <h1 className="mt-10 text-7xl text-center max-md:mt-10  max-md:text-4xl">
          Making you look good <br /> is in our heritage.
        </h1>
        <p className="self-stretch mt-10 text-center max-md:mt-10 ">
          Barber is a person whose occupation is mainly to cut dress groome style{" "}
          <br /> and shave men's and boy's hair
        </p>
        <div className="mt-[-14px]">
        <AppointmentButton />
        </div>
      </div>
    );
  }