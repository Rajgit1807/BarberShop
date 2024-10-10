import React from 'react'
import Image from 'next/image';
import phoneImg from "../../assets/phoneimg.svg"
import messageBox from "../../assets/messageBox.svg"

const Socials = () => {
    const iconData = [
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8eaa9c2e1c9f4c32b1cf4466034ae84b588f7f16621067bf0ee77482b70a0f2?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e", alt: "Icon 1" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e05ecd7f99231342f7dbd9d84658a0fb342f80c26ad7545dcdf4032610ebcae8?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e", alt: "Icon 2" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/deae99e2746b701e95300c4a4f69c27c8f570e8f8b5f000213a19add2cdb227d?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e", alt: "Icon 3" },
        { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f2a5e367dd4c9295a3d684e1eaa03db04d66822346344d23758fc4ec953f163?placeholderIfAbsent=true&apiKey=53e1d8f0c18046be998a4441f234c80e", alt: "Icon 4" }
      ];

  return (
    <div className="flex justify-between w-full px-[4%]">
        <div className="flex max-sm:flex-col sm:items-center sm:gap-2 text-white">
        <div className="flex ">
        <Image src={phoneImg} alt="phone icon" />
        <p className="mb-1">+123456789</p>
        </div>
        <div className="flex ">
        <Image  src={messageBox} alt="message icon"/>
        <p className="mb-1">barberz.123@info.com</p>
        </div>
        </div>
        <div className="flex items-center gap-8">
        {iconData.map((item, index) => (
  <img key={index} src={item.src} alt="socialnetwork icons" className="w-5 cursor-pointer">
    
  </img>
))}
        </div>

    </div>
  )
}

export default Socials