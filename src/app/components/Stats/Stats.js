import React from 'react'

const statisticsData = [
    { count: '2000+', label: 'HAPPY CLIENTS' },
    { count: '500', label: 'HAIR CUTS', },
    { count: '150', label: 'STYLERS',  },
    { count: '35', label: 'BRANCHES',}
  ];

const Stats = () => {
  return (
    <div className="bg-[#FDF8E9] flex justify-center items-center w-full py-20 px-[5%]">
 <section className="flex flex-wrap justify-between w-full">
      {statisticsData.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </section>
    </div>
  )
}

export default Stats


function StatItem({ count, label}) {
    return (
      <>
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-7xl font-semibold text-black max-md:text-4xl">
            {count}
          </h2>
          <p className="text-3xl font-medium uppercase text-zinc-800">
            {label}
          </p>
        </div>
        {!(count == 35) && <img 
          loading="lazy" 
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/58b56d146bd392a071425f293212e46c33a8bc4f5092222a91f47e48b3661751?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e'  
          alt="" 
          className="object-contain shrink-0 my-auto aspect-square w-[93px]" 
        />}
        
      </>
    );
  }
  