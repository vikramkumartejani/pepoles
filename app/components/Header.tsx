import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 py-5">
      <div className="flex items-center justify-between w-full">
        <Image
          src="/assets/pepoles-logo.svg"
          alt="pepoles-logo"
          width={300}
          height={111}
          className="md:w-[300px] sm:w-[200px] w-[150px]"
        />
        <div className="relative md:w-[157px] w-fit md:h-[59px]">
          {/* Background Image Div */}
          <div
            className="absolute inset-0 h-full w-full bg-cover bg-center rounded-md"
            style={{
              backgroundImage: "url('/assets/texture-bg.jpg')",
              opacity: 0.3, // 30% opacity for the background image (this is fine)
            }}
          ></div>

          {/* Button */}
          <button className="relative z-10 w-full h-full rounded-md bg-[#BFD7C1] md:px-[15px] px-[15px] py-2 bg-opacity-80 text-black text-[15px] sm:text-[16px] md:text-[20px] md:leading-[24px] tracking-[0.02em] font-super-pixel custom-box-shadow">
            CONNECT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
