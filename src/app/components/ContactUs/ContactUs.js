import React from "react";
import Image from "next/image";
import ContactBg from "../../assets/Contact background.svg";
import mustache from "../../assets/mustache.svg"
import AppointmentForm from "./AppointmentForm";

const ContactUs = () => {
  return (
    <section className="flex flex-col items-start mt-16 w-full relative">
       <div className="w-[80%] relative ">
       <Image src={ContactBg} alt="" className="w-full"/>
      <div className="absolute top-0 flex flex-col justify-center pl-[7%] w-full h-full pr-[40%]">
        <h2 className="text-4xl text-[#D9A536]">CONTACT</h2>
        <h1 className="text-6xl font-semibold text-white max-md:text-4xl mt-4">Get In Touch</h1>
        <div className="flex gap-3 items-center mt-5 ">
        <div className="shrink-0 h-[2px] bg-[#D9A536]  w-[130px]" />
        <Image src={mustache}  alt="mustache icon" className="w-[75px]"/>
        <div className="shrink-0 h-[2px] bg-[#D9A536]  w-[130px]" />
      </div>
        <p className="z-10 self-stretch mt-5 w-full text-2xl text-white max-md:max-w-full">
          Suspendisse pretium felis dolor, sed placerat diam blandit vitae. Sed
          eu nisl massa. Phasellus vehicula tristique orci ut ultrices. Duis eu
          libero augue. In vulputate sodales tempus. Phasellus dolor orci,
          consectetur in tincidunt eget, consectetur non orci.
        </p>
      </div>
        </div> 
     <div className="absolute right-0 h-full">
 <AppointmentForm/>
     </div>
    </section>
  );
};

export default ContactUs;
