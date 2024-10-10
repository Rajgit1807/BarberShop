import React from "react";
import mustache from "../../assets/mustache.svg";
import Image from "next/image";

const testimonials = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3b6a37ab9305b1c3690aa01d7644717bc462add66ca077eccd0091bf2635fa29?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
    quote:
      "Just came back to home and should say that it is definitely a great experience. I would recommend it for everyone who needs a bike for a short term or want to t...",
    name: "Robert Fox",
    occupation: "Writer",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/43d1a3368ecfedc2c844342e956f7158a76a3dab84624b15cbb09bb005903a8a?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cb6637bcfd833e090ef631bacc4d52f19b109870081894ad47e615f6aed9f08b?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
    quote:
      "Amazing service! Claire helped me to reduce the shipping price a little and shipped it immediately after purchasing. The amethyst cave I got is a beauty and I c...",
    name: "Marvin McKinney",
    occupation: "Businessman",
    rating:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/17383e250d52048c2747f8c33bc3cec67c32592ed33e7562acd507d8de4e2528?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
  },
];

const Testimonial = () => {
  return (
    <section className="flex flex-col w-full relative mt-5">
        <div className="bg-black absolute z-10 w-full h-full bg-opacity-60">

        </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/02caa6b6036cfe1d2c54f9875e6bb730508e37704362ceebdbcdc33da00cbf8c?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e"
        alt=""
        className="w-full"
      />
      <div className="absolute px-12 z-20 w-full">
        <div className="flex flex-col items-center mt-[8%]">
          <h1 className="text-[#D9A536] text-3xl">TESTIMONIALS</h1>
          <h1 className="text-5xl font-semibold text-white max-md:text-4xl mt-2">
            Hear From Our Customers
          </h1>
          <div className="flex gap-4 justify-between items-center mt-5 ">
            <div className="shrink-0 h-[2px] bg-[#D9A536]  w-[143px]" />
            <Image src={mustache} alt="mustache icon" />
            <div className="shrink-0 h-[2px] bg-[#D9A536]  w-[143px]" />
          </div>
        </div>
        <div className="relative self-stretch mt-36 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

function TestimonialCard({ image, quote, name, occupation, rating }) {
  return (
    <article className="flex flex-col w-6/12">
      <div className="flex relative flex-col px-3.5 pt-12 pb-2.5 mx-auto w-full rounded-xl bg-neutral-800 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ">
        <div className="flex gap-5">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={image}
              alt={`${name}'s profile`}
              className="object-contain shrink-0 max-w-full rounded-full aspect-square w-[147px] max-md:mt-8"
            />
          </div>
          <div className="flex flex-col ml-5 w-9/12 ">
            <blockquote className="text-2xl font-semibold text-white">
              "{quote}"
            </blockquote>
            <div className="flex gap-5 max-md:flex-col mt-9">
              <div className="flex flex-col w-[68%]">
                <div className="flex flex-col items-start">
                  <h2 className="self-stretch text-4xl font-semibold text-[#D9A536]">
                    {name}
                  </h2>
                  <p className="text-xl text-white">{occupation}</p>
                  <img
                    loading="lazy"
                    src={rating}
                    alt="Customer rating"
                    className="object-contain mt-3.5 max-w-full aspect-[6.06] w-[115px]"
                  />
                </div>
              </div>
              <div className="flex flex-col  w-[32%]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fa584b3b6bd6aa861f204683dd967af8c632b23f78019bcc551600d6a0e1a7e?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e"
                  alt=""
                  className="self-end object-contain grow shrink-0 mt-16 max-w-full aspect-[0.98] w-[102px] max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
