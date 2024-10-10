"use client"
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const teamMembers = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/35d089b991f01422f2c4c59d4d77f2b8ae5644b07591ac0adbb377d9b55e18a0?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
    name: "DAVID",
    role: "Hair Cut Specialist",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d9a47cc27758c119e3197e2564327efe55bca79a48df2842ea95776653c2c42b?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
    name: "PAUL",
    role: "Beard & Trimming",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0c6ef20efeb7e12a7fe7bcba0cff2e070b67c4e082952fb8b0073b3aa8e693e?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
    name: "CHARLIE",
    role: "Hair Color Specialist",
  },
 
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d9a47cc27758c119e3197e2564327efe55bca79a48df2842ea95776653c2c42b?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
    name: "PAUL",
    role: "Beard & Trimming",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/35d089b991f01422f2c4c59d4d77f2b8ae5644b07591ac0adbb377d9b55e18a0?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
    name: "DAVID",
    role: "Hair Cut Specialist",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b0c6ef20efeb7e12a7fe7bcba0cff2e070b67c4e082952fb8b0073b3aa8e693e?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e",
    name: "CHARLIE",
    role: "Hair Color Specialist",
  },

];

const TeamMembers = () => {
  return (
    <main className="w-full mt-[54px]">
    <Splide
    options={{
      type: 'loop',
      perPage: 3,
      perMove: 1,
      gap: '1rem',
      pagination: false,
      breakpoints: {
        1024: { perPage: 2 },
        768: { perPage: 1 },
      },
    }}
  >
    {teamMembers.map((member, index) => (
      <SplideSlide key={index}>
        <TeamMember {...member} />
      </SplideSlide>
    ))}
  </Splide>
    </main>
  );
};

export default TeamMembers;


function TeamMember({ imageSrc, name, role }) {
  return (
    <article className="flex flex-col max-w-[400px] text-white mx-auto">
      <img
        loading="lazy"
        src={imageSrc}
        alt={`${name}, ${role}`}
        className="object-contain w-full aspect-[0.8]"
      />
      <div className="flex flex-col px-20 pt-3.5 pb-7 bg-[#B78E36] max-md:px-5">
        <h2 className="self-center text-4xl font-semibold">{name}</h2>
        <p className="text-xl self-center font-medium mt-3">{role}</p>
      </div>
    </article>
  );
}
