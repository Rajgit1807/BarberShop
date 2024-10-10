import React from 'react'
import ServiceCard from './ServiceCard';
import mustache from "../../assets/mustache.svg"
import Image from 'next/image';
const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e97ec0b0a9fa5fc4a5eb1977f49d2389ec09d71e66c081b7ed9c58c51fbb43a1?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
      title: "Hair Cut",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/284c8f428f2a7a0a79ebe265a941d38ecdebf0477c601dde93de041e78e2fc87?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
      title: "Shaving",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/71e2e746790caba6b1960a2b5160c6562e1254a207f7f5d8703d4a09e8293364?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
      title: "Hair Color",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/025105b4ef8a6fe09f2e957dac4970848292d6a87dc0182c1c857d646eed1af2?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
      title: "Beard Trim",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.",
    },
  ];

const OurServices = () => {
  return (
    <section className="flex flex-col items-center  bg-[#FDF8E9] mt-20 px-20 py-28">
        <h1 className="text-[#D9A536] text-3xl">SERVICES</h1>
      <h1 className="text-5xl font-semibold text-stone-700 max-md:text-4xl mt-2">
        Our Services
      </h1>
      <div className="flex gap-4 justify-between items-center mt-5 ">
        <div className="shrink-0 h-[2px] bg-[#D9A536]  w-[143px]" />
        <Image src={mustache}  alt="mustache icon"/>
        <div className="shrink-0 h-[2px] bg-[#D9A536]  w-[143px]" />
      </div>
      <div className="self-stretch mt-28 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <style>{`builder-component { max-width: none !important; }`}</style>
    </section>
  )
}

export default OurServices