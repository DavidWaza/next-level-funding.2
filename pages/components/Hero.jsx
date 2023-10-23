import React from "react";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="w-full body-bg pt-[5rem] text-white 2xl:h-[70vh] h-full">
        <div className="2xl:px-[10rem] px-[2rem] pt-[4rem]">
          <div className="grid grid-cols-none 2xl:grid-cols-2 justify-center items-center ">
            <div className="grid justify-center items-center">
              <p className="uppercase text-[#537DFF] text-[14px] lg:text-sm text-center 2xl:text-left font-bold lexend">
                Unlock your trading potential with our leading propriatary
                trading firm
              </p>
              <p className="py-3 lg:text-6xl text-[27px] font-bold space-grotesk text-center 2xl:text-left ">
                Where <span className="span-oppo">Opportunities </span>Meet Precision: Your Path to
                Financial Success.
              </p>
              <p className="text-md 2xl:text-xs 2xl:text-left text-center font-light lexend ">
                With our program, you can get funded up to $500,000 with up to a
                90% profit split.{" "}
              </p>
              <div className="2xl:flex grid gap-3 mt-14 justify-center 2xl:justify-start">
                <Button
                  className="backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-30 border border-slate-500 w-full"
                  text="learn more"
                />
                <Button
                  className="backdrop-filter bg-[#991275] border-none "
                  text="get started"
                  showArrow={true}
                />
              </div>
            </div>

            <div className="flex justify-end 2xl:mt-24">
              <Image
                src="/assets/laptop.gif"
                width={450}
                height={50}
                alt="trade-computer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
