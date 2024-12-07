import Image from "next/image";
import React from "react";

const Header = () => {
    return (
        <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 py-5">
            <div>
                <Image
                    src="/assets/pepoles-logo.svg"
                    alt="pepoles-logo"
                    width={300}
                    height={111}
                />
                <div className="relative w-[157px] h-[59px]">
                    {/* Background Image Div */}
                    <div
                        className="absolute inset-0 h-full w-full bg-cover bg-center rounded-md"
                        style={{
                            backgroundImage: "url('/assets/bg.jpg')",
                            opacity: 0.3, // 30% opacity for the background image (this is fine)
                        }}
                    ></div>

                    {/* Button */}
                    <button className="relative z-10 w-full h-full rounded-md bg-[#BFD7C1] bg-opacity-80 text-black text-[20px] leading-[24px] tracking-[0.02em] font-super-pixel custom-box-shadow">
                        CONNECT
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Header;
