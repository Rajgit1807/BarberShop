import React from "react";
import Image from "next/image";
import mustache from "../../assets/mustache.svg";
import TeamMembers from "./TeamMembers";

const Specialists = () => {
  return (
    <section className="flex flex-col items-center px-10 py-28 w-full">
      <h1 className="text-[#D9A536] text-3xl ">SPECIALISTS</h1>
      <h1 className="text-5xl font-semibold text-stone-700 max-md:text-4xl mt-2">
        Our Team
      </h1>
      <div className="flex gap-4 justify-between items-center mt-5 ">
        <div className="shrink-0 h-[2px] bg-[#D9A536]  w-[143px]" />
        <Image src={mustache} alt="mustache icon" />
        <div className="shrink-0 h-[2px] bg-[#D9A536]  w-[143px]" />
      </div>
      <TeamMembers />
    </section>
  );
};

export default Specialists;
