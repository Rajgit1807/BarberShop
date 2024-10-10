import React from 'react'
import bgTexture from "../../assets/bgtexture.svg"
import logoC from "../../assets/logoC.svg"
import Image from 'next/image';
import scissors from "../../assets/small scissors.svg"
import mustache from "../../assets/mustache.svg"
import mailIcon from "../../assets/mailIcon.svg"
import mapIcon from "../../assets/mapIcon.svg"
import phIcon from "../../assets/PhoneIcon.svg"
import fbIcon from "../../assets/facebookIcon.svg"
import twIcon from "../../assets/twitterIcon.svg"
import insIcon from "../../assets/instaIcon.svg"
import ytIcon from "../../assets/youtubeIcon.svg"

const quickLinks = [
    { text: 'HOME', },
    { text: 'ABOUT US'},
    { text: 'GALLERY' },
    { text: 'CONTACT US' },
    { text: 'HAIRS', },
    { text: 'BEAUTY'},
    { text: 'SPA' },
    { text: 'MASSAGE' }
  ];

const icons = [
    {icon:phIcon, text: "+4125987645" , size: "text-[24px]"},
    {icon:mailIcon, text:"barberz.123@info.com" ,size:"text-[20px]"},
    {icon:mapIcon,text:"GOLDEN STREET, CHINATOWN",text2:"SAN FRANCISCO", size:"text-[20px]"},
]
const socailIcon =[
    {icon:fbIcon},
    {icon:twIcon},
    {icon:ytIcon},
    {icon:insIcon},
]
const Footer = () => {
  return (
    <section className=" w-full bg-[#35312F] relative h-[470px] mt-32">
        <Image src={bgTexture} alt="texture" className="absolute left-0 h-[470px] z-10"/>
        <div className="absolute w-[30%] flex flex-col items-center z-20 left-0 h-full justify-center px-16">
        <Image src={logoC} alt="texture" className="max-w-[220px]"/>
        <p className="text-center text-[16px] text-white mt-4"> There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form.</p>
        <input type="email" placeholder="Email*" className="mt-12 bg-white outline-none placeholder:text-[#292727] placeholder:font-semibold font-semibold text-[#292727] px-2 py-1 w-full text-[18px]">
        </input>
        <button className="mt-5 px-5 py-px border-2 border-white border-solid bg-[#D9A536] bg-opacity-80 rounded-[30px] text-xl font-medium text-white uppercase whitespace-nowrap max-w-[149px]">
      Subscribe
    </button>
        </div>
        <div className="absolute w-[70%] flex z-20 right-0 h-full  px-16 pt-20">
            <div className="flex justify-between w-full">
            <QuickLinkItem title="QUICK LINKS"  links={quickLinks.slice(0,4)}/>
            <QuickLinkItem title="SERVICES"  links={quickLinks.slice(4)}/>
            </div>
            <div className=" w-full flex flex-col items-end">
                <div>
                <TopTitle title="CONTACT"/>
                <div className="flex flex-col gap-4 ps-16 mt-2">
                {icons.map((item, index) => (
            <ContactItem key={index} icon={item.icon} text={item.text} text2={item.text2} size={item.size}/>
          ))}
                </div>
                <div className="flex gap-8 items-center mt-10 ps-[80px]">
                {socailIcon.map((item, index) => (
            <div key={index} >
              <Image src={item.icon} alt="social icons" className="w-11" />
            </div>
          ))}
                </div>

                </div>
            </div>
        </div>
        <div className="absolute z-30 bottom-3 w-full flex items-center">
        <div className="flex gap-2.5  mx-auto text-white">
      <div className="flex z-10 gap-1 -mt-1.5 text-center whitespace-nowrap">
        <h2 className="grow text-xl">Copyright</h2>
        <span className="z-10 flex items-center justify-center pb-[3px] mt-2 text-xs rounded-full border border-white border-solid bg-zinc-300 bg-opacity-0 h-[15px] w-[15px]">
          c
        </span>
      </div>
      <div className="flex gap-2.5 -mt-1.5 text-xl">
        <time>2021</time>
        <p className="basis-auto">All rights reserved</p>
      </div>
    </div>
        </div>
    </section>
  )
}

export default Footer

function TopTitle ({title}){
    return (<div className="flex flex-col items-center">
<p className="text-white text-[30px]">{title}</p>
        <div className="flex gap-1 items-center">
          <div className="shrink-0 h-[2px] bg-[#D9A536] w-[60px]" />
          <Image src={mustache} alt="mustache icon" className="w-[35px]" />
          <div className="shrink-0 h-[2px] bg-[#D9A536] w-[60px]" />
        </div>
    </div>)
}

function QuickLinkItem({title, links }) {
    return (
      <div>
        <TopTitle title={title}/>
        <div className="flex flex-col gap-2 px-3 mt-2">
          {links.map((item, index) => (
            <div key={index} className="flex items-center gap-7 ps-8">
              <Image src={scissors} alt="scissors icon" className="" />
              <p className="text-nowrap text-white text-[24px] cursor-pointer">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

function ContactItem ({icon,text,text2,size}){
    return(
        <div className="flex items-center gap-9">
       <Image src={icon} alt ="icons"/>
       <div className="flex flex-col text-white">
    <p className={`${size}`}>{text}</p>
       {text2 && <p className={`${size}`}>{text2}</p>}
       </div>
        </div>
    )
}