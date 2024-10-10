import React from "react";
import Image from "next/image";
import mustache from "../../assets/mustache.svg"

const pricingData = [
  {
    service: "Hair Cut",
    price: "$10",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    width:"w-[200px]"
  },
  {
    service: "Shaving",
    price: "$40",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
     width:"w-[195px]"
  },
  {
    service: "Hair Styling",
    price: "$25",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
     width:"w-[143px]"
  },
  {
    service: "Beard Trimming",
    price: "$25",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
     width:"w-[78px]"
  },
  {
    service: "Hair Trimming",
    price: "$30",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
     width:"w-[105px]"
  },
  {
    service: "Face Cleaning",
    price: "$60",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
     width:"w-[113px]"
  },
  {
    service: "Kids Hair Cut",
    price: "$15",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
     width:"w-[122px]"
  },
  {
    service: "Mustache Trim",
    price: "$12",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
     width:"w-[100px]"
  },
];

const BarberPricing = () => {
  return (
    <section className="flex flex-col items-center rounded-none bg-[#FDF8E9] px-[7%] w-full mt-16 pt-24 pb-9">
      <div>
        <h1 className="text-5xl font-semibold text-[#4A4845] max-md:text-4xl mt-4">
        Barbershop Pricing Plan        
        </h1>
        <div className="flex gap-3 items-center justify-center mt-5">
          <div className="shrink-0 h-[2px] bg-[#D9A536]  w-[130px]" />
          <Image src={mustache} alt="mustache icon" className="w-[75px]" />
          <div className="shrink-0 h-[2px] bg-[#D9A536]  w-[130px]" />
        </div>
      </div>

      <div className="w-full flex justify-between mt-7">
        <div>
          {pricingData.slice(0, 4).map((item, index) => (
            <PricingItem
              key={index}
              service={item.service}
              price={item.price}
              text={item.text}
              width={item.width}
            />
          ))}
        </div>
        <div>
          {pricingData.slice(4, 8).map((item, index) => (
            <PricingItem
              key={index}
              service={item.service}
              price={item.price}
              text={item.text}
              width={item.width}
            />
          ))}
        </div>
      </div>
      <button className="self-center px-6 py-3 mt-11 text-lg font-medium text-center text-white bg-[#D9A536] rounded-lg border-2 border-[#D9A536] border-solid max-md:px-5 max-md:mt-10">
        VIEW MORE
      </button>
    </section>
  );
};

export default BarberPricing;

function PricingItem({ service, price, text,width }) {
  return (
    <div className="font-semibold mt-10 max-w-[500px]">
      <div className="flex justify-between gap-5 w-fit">
        <p className="text-4xl text-zinc-800 text-nowrap">{service}</p>
        <div className={`shrink-0 self-stretch my-auto border-[#D9A536] border-dashed border-[3px] h-[3px] ${width} `}/>
        <div className="self-stretch text-5xl text-[#D9A536] max-md:text-3xl">
          {price}
        </div>
      </div>

      <p className="w-[87%] mt-3 text-[17px]">{text}</p>
    </div>
  );
}
