import React from 'react'
import Image from "next/image";
import mustache from "../../assets/mustache.svg"
   

const OurWork = () => {

    const images = [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/337dd0f6dd37b914d64d61326a75ab2f53c17280814ed6fa6694dc9b1d8f053e?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/04fa6e4f93bc725508317fe8faabe733efd6bf39be89cfbe8259bb39d09ffbff?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d859961fb048cca66f52de973a6b58b0628b2cef7006e7e5e1fbb63b9310861b?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3543487245fe386abc3e81e02b3497c39a5e3eae7723a919bfe578f3434c086f?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2aedb73fd8f98d60cd991ea1753fc04ab9dc82336c844ef0868498ca0ccc04cc?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/90dccfec96fc857cb01c7520eeb8bce3a347908f882259ebec0068f4d013c0ef?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e"
      ];


  return (
    <section className="flex flex-col mt-12 pt-16 items-center px-24">
      <h1 className="text-5xl font-semibold text-stone-700 max-md:text-4xl mt-2">
        Our Work
      </h1>
      <div className="flex gap-4 justify-between items-center mt-5 ">
        <div className="shrink-0 h-[2px] bg-[#D9A536]  w-[143px]" />
        <Image src={mustache}  alt="mustache icon"/>
        <div className="shrink-0 h-[2px] bg-[#D9A536]  w-[143px]" />
      </div>
    <ImageGrid images={images} />
    <style>{`builder-component { max-width: none !important; }`}</style>
  </section>
  )
}

function ImageGrid({ images }) {
    return (
      <div className="mt-14 w-full grid grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div key={index} className="flex flex-col w-full cursor-pointer border-[8px] hover:border-[#D9A536]  border-white  transition-all duration-300 ease-in-out">
              <img
                loading="lazy"
                src={src}
                alt={`Work sample ${index + 1}`}
                className="object-contain w-full"
              />
            </div>
          ))}
      </div>
    );
  }
export default OurWork