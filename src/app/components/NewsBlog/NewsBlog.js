import React from "react";
import mustache from "../../assets/mustache.svg";
import Image from "next/image";
import shop1 from "../../assets/shopPic (1).svg";
import shop2 from "../../assets/shopPic (2).svg";
import shop3 from "../../assets/shopPic (3).svg";

const blogData = [
  {
    shopImg: shop3,
    date: 25,
    month: "May",
  },
  {
    
    shopImg: shop2,
    date: 20,
    month: "Jun",
  },
  {
    
    shopImg: shop1,
    date: 22,
    month: "Jul",
  },
];

const NewsBlog = () => {
  return (
    <section className="flex flex-col items-center pt-16 pb-16">
      <div className="flex items-center flex-col">
        <h1 className="text-[#D9A536] text-3xl ">News From Blog</h1>
        <h1 className="text-5xl font-semibold text-stone-700 max-md:text-4xl mt-2">
          What’s on our mind
        </h1>
        <div className="flex gap-4 justify-between items-center mt-5 ">
          <div className="shrink-0 h-[2px] bg-[#D9A536]  w-[143px]" />
          <Image src={mustache} alt="mustache icon" />
          <div className="shrink-0 h-[2px] bg-[#D9A536]  w-[143px]" />
        </div>
      </div>
      <div className="z-10 mt-20 w-full px-[3%]">
        <div className="flex justify-between gap-8">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              img={blog.shopImg}
              date={blog.date}
              month={blog.month}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsBlog;

function BlogCard({  img, date,month }) {
  return (
    <div>
      <div className="w-full relative">
        <Image src={img} alt="" className="w-full" />
        <div className="absolute bg-[#D9A536] flex flex-col items-center justify-center w-[70px] h-[60px] right-0 bottom-[-30px] font-bold text-xl">
          <p>{month}</p>
          <p>{date}</p>
        </div>
      </div>
      <div className="ps-1 flex gap-4 items-center mt-6">
        <div className="w-1 h-24 bg-[#D9A536]"></div>
        <div>
          <p className="text-[#726F6E] text-lg">BEARD STYLES / BY ADMIN</p>
          <p className="w-full text-2xl font-semibold">
            The Best Barbershop In <br /> The Town
          </p>
        </div>
      </div>
      <p className="z-10 self-start mt-3 text-lg ps-1 pr-4">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </p>
    </div>
  );
}
