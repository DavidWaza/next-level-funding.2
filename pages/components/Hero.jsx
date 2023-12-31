import React from "react";
import Button from "./Button";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="body-bg w-full px-4 lg:px-[12rem] lg:pt-32">
      <Box sx={{ paddingTop: 15, flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={12} lg={6}>
            <p className="uppercase text-blue-500 font-bold lexend text-lg text-center lg:text-left md:px-10 lg:px-0 my-2">
              Next level funding
            </p>
            <p className="text-white space-grotesk font-bold text-[1.8rem] text-center lg:text-[4rem] lg:text-left md:leading-[73px] leading-[39px]">
              Our Capital, Our Risk,{" "}
              <span className="text-blue-500">Your Knowledge.</span>
            </p>
            <div className="md:w-[30rem] m-auto lg:ml-0">
              <p className="text-sm xl:text-lg tracking-wide md:text-left text-center font-light lexend text-white 2xl:w-[35rem] mt-1 ">
                With our program, you can get funded up to £1,000,000 with up to
                a 90% profit split. Unlock Your Trading Potential with Our
                Leading Proprietary Trading Firm.
              </p>
            </div>

            <div className="lg:flex gap-4 mt-7 grid justify-center lg:justify-start">
              <Link href="/about-us">
                <Button
                  className="backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-30 border border-slate-500 w-full"
                  text="learn more"
                />
              </Link>
              <Link href="/#evaluation-package">
                <Button
                  className="backdrop-filter bg-[#991275] border-none  lg:flex-1"
                  text="get started"
                  showArrow={true}
                />
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <div className="flex xl:justify-end justify-center relative">
              <div className="bg-white rounded-full h-20 w-20 p-2 backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-5">
                <img src="/assets/eth.png" className="" alt="eth" />
              </div>
              <div className="backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-5 w-30 h-30 rounded-full absolute p-[5rem] left-[40%] bottom-[30%] border border-slate-800 bg-white hidden lg:block"></div>
              <div className="relative z-30">
                <img
                  src="/assets/laptop.gif"
                  className="lg:w-[30rem] w-[20rem] h-auto"
                  alt="trade-computer"
                />
              </div>
              <div className="backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-5 w-30 h-30 rounded-full absolute p-[5rem] left-[60%] bottom-[10%] border border-slate-800 bg-white hidden lg:block"></div>
            </div>
          </Grid>
        </Grid>
        <Box sx={{ paddingTop: 10, paddingBottom: 10 }}></Box>
      </Box>
    </div>
  );
};

export default Hero;
