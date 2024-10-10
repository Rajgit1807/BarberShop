import React from 'react'
import Image from "next/image"
import globeImg from "../../assets/globee.svg"

const AppointmentForm = () => {

    const formInputs = [
        { name: "Name", type: "text" },
        { name: "Email", type: "email" },
        { name: "Phone", type: "tel" },
        { name: "Time", type: "text" },
      ];
    
      const formSelects = [
        { name: "Services", options: ["Services","Massage","Hair Spa"] },
        { name: "Choose Barber", options: ["Choose Barber","Roxy","Nami","Robin"] },
      ];

  return (
    <main className="flex flex-col text-2xl font-semibold rounded-none max-w-[600px] text-zinc-300 h-full relative bg-[#151515]">
        <Image src={globeImg} alt="" className="w-[96%] z-10"/>
    <section className="flex flex-col justify-center py-0.5 w-full h-full absolute z-20">
      <form className="flex relative flex-col justify-between items-center px-5 pt-7 pb-16 w-full">
        <div className="flex flex-col items-center">
        <h1 className=" text-5xl text-[#D9A536] max-md:text-4xl">
          Make an Appointment
        </h1>
        <p className=" text-2xl text-center text-white mt-[3%] font-normal px-2">
          Barber is a person whose occupation is mainly to cut dress groom
          <br />
        </p>
        </div>
        <div className="flex flex-col items-center">
        <div className="flex gap-4 mt-[10%]  max-md:mt-10 ">
          {formInputs.slice(0, 2).map((input, index) => (
            <FormInput key={index} name={input.name} type={input.type} />
          ))}
        </div>
        <div className="flex gap-4 mt-[10%] max-md:mt-10">
          {formInputs.slice(2).map((input, index) => (
            <FormInput key={index} name={input.name} type={input.type} />
        ))}
        </div>
        <div className="flex gap-4 mt-[10%] max-md:mt-10 w-full">
          {formSelects.map((select, index) => (
            <FormSelect key={index} name={select.name} options={select.options} />
          ))}
        </div>
        </div>
       
        <button className="w-[90%] py-7 mt-20 text-[28px] font-medium text-white bg-[#D9A536] rounded-sm max-md:px-5 max-md:mt-10">
          MAKE AN APPOINTMENT
        </button>
      </form>
    </section>
  </main>
  )
}

export default AppointmentForm


function FormInput({ name, type }) {
  return (
    <div className="grow w-fit">
      <label htmlFor={name.toLowerCase()} className="sr-only">{name}</label>
      <input
        id={name.toLowerCase()}
        type={type}
        placeholder={name}
        className="px-2.5 py-3 border border-solid bg-zinc-300 bg-opacity-0 border-zinc-300 w-full placeholder:text-[#C3C3C7] text-[#C3C3C7]"
        aria-label={name}
      />
    </div>
  );
}

function FormSelect({ name, options }) {
    return (
      <div className="flex flex-col w-full">
        <div className=" relative flex gap-5 justify-between px-2.5 py-3.5 border border-solid bg-zinc-300 bg-opacity-0 border-zinc-300">
          <select
            id={name.toLowerCase()}
            className="appearance-none bg-transparent border-none w-full outline-none"
            aria-label={name}
          >
            {options.map((option, index) => (
              <option key={index} value={option} className ="outline-none">
                {option}
              </option>
            ))}
          </select>
          <img loading="lazy"  src="https://cdn.builder.io/api/v1/image/assets/TEMP/15cd2f918987310fb33d812121cbe6dfdfde8f8bcfb0ada22c2a84f6b72a147f?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e" alt="" className="object-contain shrink-0 my-auto aspect-[1.03] w-[31px] absolute right-2 z-[-1]" />
        </div>
      </div>
    );
  }