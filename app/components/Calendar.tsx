"use client";

import Image from "next/image";
import { useState } from "react";

const DAYS_OF_WEEK = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const CALENDAR_DATA = Array.from({ length: 25 }, (_, i) => ({
  day: DAYS_OF_WEEK[i % 7],
  date: i + 1,
}));

export default function Calendar() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (date: number) => {
    setFlippedCards((prev) =>
      prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
    );
  };

  return (
    <div className="min-h-screen lg:pt-[33px] lg:pb-[33px] pb-[80px]">
      <div className="flex items-center justify-center relative md:px-8 px-4">
        <Image
          src="/assets/snow-man.svg"
          alt="snowman"
          width={66}
          height={66}
          className="absolute lg:bottom-[109px] bottom-[-105px] xl:left-[3.6vw] xl:max-w-[4.2vw] lg:max-w-[4.8vw] lg:left-[1vw] left-4 z-[0]"
        />
        <div
          className="bg-[#FFFFFF42] border-[5px] border-black rounded-[6px] py-[27px] md:px-[25px] px-6 max-w-[290px] sm:max-w-[530px] md:max-w-[730px] lg:max-w-[900px] xl:max-w-[1079px] w-full relative z-[2]"
          style={{
            boxShadow: `
    11px 11px 14.6px 0px #0000008A inset,
    16px 19px 43.8px 0px #000000,
    var(--sds-size-depth-0) var(--sds-size-depth-100) var(--sds-size-depth-100) var(--sds-size-depth-negative-100) var(--sds-color-black-100),
    var(--sds-size-depth-0) var(--sds-size-depth-400) var(--sds-size-depth-800) var(--sds-size-depth-negative-100) var(--sds-color-black-200),
    8px 8px 0px 0px #000000
  `,
          }}
        >
          {/* Header Icon */}
          <div className="flex justify-center mb-[25.81px]">
            <div className="bg-black rounded-full pt-[13.35px] flex items-center justify-center md:w-[78.41px] w-[67px]  h-[67px] h-[78.43px]">
              <Image
                src="/assets/pole.png"
                alt="Calendar Icon"
                width={41.46}
                height={62.58}
                className="md:h-[62.58px] h-[50px] md:w-[41.46px] w-auto"
              />
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-[24px] gap-y-[16px] pb-[20px]">
            {CALENDAR_DATA.map(({ day, date }) => (
              <div
                key={date}
                onClick={() => toggleCard(date)}
                className="perspective-1000 cursor-pointer"
              >
                <div
                  className={`
                relative transform-style-preserve-3d transition-transform duration-700
                ${flippedCards.includes(date) ? "rotate-y-180" : ""}
              `}
                >
                  {/* Front of Card */}
                  <div className="relative backface-hidden sm:w-auto w-full h-[135px]">
                    <div
                      className="border-2 border-[#005B5E] p-[5px] bg-[#BD3742E0] h-full aspect-square rounded-[6px] mx-auto "
                      style={{
                        boxShadow: `
      var(--sds-size-depth-0) var(--sds-size-depth-100) var(--sds-size-depth-100) var(--sds-size-depth-negative-100) var(--sds-color-black-100),
      var(--sds-size-depth-0) var(--sds-size-depth-400) var(--sds-size-depth-800) var(--sds-size-depth-negative-100) var(--sds-color-black-200),
      3px 3px 0px 0px #D90429
    `,
                      }}
                    >
                      <div
                        className="text-black lowercase text-[24px] font-nicholas font-[500] tracking-[3%]"
                        style={{
                          textShadow: `
      0px -1.94px 0.45px #39BBED33,
      0px 1.29px 31.98px #F8E236,
      -1.94px 1.29px 2.2px #00000040,
      2.58px 5.17px 4.14px #00000040,
      0px 0px 0.65px #F8E236,
      0px 0.65px 1.68px #000000AD,
      0px 0px 2.58px #00FFFF66,
      -0.65px 0.65px 1.29px #00000069,
      -0.65px 3.23px 3.94px #00000096
    `,
                        }}
                      >
                        {day}
                      </div>

                      <div className="relative h-[70%] bg-[#00A388] rounded-[3px] overflow-hidden">
                        <img
                          src="/assets/texture-bg.jpg"
                          alt="texture"
                          className="object-cover w-full h-full absolute z-[0] opacity-[0.76]" /* Lower z-index */
                        />
                        <div
                          className="flex items-center justify-center w-full h-full relative z-[1]"
                          style={{
                            boxShadow: `-3px 2px 3.4px 0px #00000040 inset, 4px 8px 6.4px 0px #00000040 inset`,
                          }}
                        >
                          <span
                            className="text-[40px] font-[400] font-xmas text-black relative z-[2] pt-2"
                            style={{
                              textShadow: `
      0px -1.94px 0.45px #39BBED33,
      0px 1.29px 31.98px #F8E236,
      -1.94px 1.29px 2.2px #00000040,
      2.58px 5.17px 4.14px #00000040,
      0px 0px 0px #F8E236,
      0px 0.65px 1.68px #000000AD,
      0px 0px 2.58px #00FFFF66,
      -0.65px 0.65px 1.29px #00000069,
      -0.65px 3.23px 3.94px #00000096
    `,
                            }}
                          >
                            {date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 h-[135px]">
                    <div
                      className="border-2 border-[#005B5E] bg-[#BD3742E0] aspect-square rounded-[6px] h-full overflow-hidden mx-auto"
                      style={{
                        boxShadow: `
      var(--sds-size-depth-0) var(--sds-size-depth-100) var(--sds-size-depth-100) var(--sds-size-depth-negative-100) var(--sds-color-black-100),
      var(--sds-size-depth-0) var(--sds-size-depth-400) var(--sds-size-depth-800) var(--sds-size-depth-negative-100) var(--sds-color-black-200),
      3px 3px 0px 0px #D90429
    `,
                      }}
                    >
                      <img
                        src={`/assets/behind-img.png`}
                        alt={`Horror image ${date}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
