import React from 'react';

function ServiceCard({ icon, title, description }) {
  return (
    <article className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-center px-4 py-3.5 w-full bg-white rounded-xl max-md:mt-9">
        <img loading="lazy" src={icon} alt={`${title} icon`} className="object-contain aspect-square w-[94px]" />
        <h2 className="mt-7 text-3xl font-medium text-zinc-800">{title}</h2>
        <p className="self-stretch mt-8 text-lg font-light text-center text-black">
          {description}
        </p>
        <button className="text-nowrap px-5 py-2 mt-6 text-[22px] font-semibold text-center text-[#D9A536] rounded-lg border-2 border-[#D9A536] border-solid bg-white bg-opacity-0 max-md:px-5">
          READ MORE
        </button>
      </div>
    </article>
  );
}

export default ServiceCard;