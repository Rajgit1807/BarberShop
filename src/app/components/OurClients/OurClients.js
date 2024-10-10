import React from 'react'
import Image from "next/image";
import mustache from "../../assets/mustache.svg"

const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bfed6ad072e50541304a4a246c7c59a775c56fba6881b7a04b0bf787d4cab9c0?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e", alt: "Image 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c10d36ad39e083d79e63b86e9fb0faa5577dff7ce726f3e655b466818e2ba0ce?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e", alt: "Image 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e2e398931d305f0abf00603f4846c60238d2b884cfaf1e12a5a8cb6b3f5a208?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e", alt: "Image 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8d40c8b55dd1d3dbd1b715c39fafeb96789e332fb55dad068307c2d01452735?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e", alt: "Image 4" },
  ];

const OurClients = () => {
  return (
    <section className="flex flex-col pt-24 items-center px-24 pb-16">
      <h1 className="text-5xl font-semibold text-[#4A4845] max-md:text-4xl mt-2">
        Our Clients
      </h1>
      <div className="flex gap-4 items-center mt-5">
        <div className="shrink-0 h-[2px] bg-[#D9A536]  w-[143px]" />
        <Image src={mustache}  alt="mustache icon"/>
        <div className="shrink-0 h-[2px] bg-[#D9A536]  w-[143px]" />
      </div>
      <section className="flex gap-6 max-md:flex-col justify-between items center mt-16 w-full">
      {images.map((image, index) => (
        <ImageCard key={index} src={image.src} alt={image.alt} />
      ))}
    </section>
    </section >
  )
}

export default OurClients


function ImageCard({ src, alt }) {
    return (
      <div className="">
        <img
          loading="lazy"
          src={src}
          alt={alt}
          className="object-contain aspect-[1.4] max-w-[280px]"
        />
      </div>
    );
  }