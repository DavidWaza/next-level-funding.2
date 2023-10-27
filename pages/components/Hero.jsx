import React from "react";
import Button from "./Button";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="home-bg w-full px-4 lg:px-[12rem] pt-20">
      <Box sx={{ paddingTop: 20, flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={6}>
            <p className="uppercase text-[#537DFF] text-2xl lg:text-xl lg:text-left font-bold lexend text-center">
              Next level funding
            </p>
            <p className="py-3 lg:text-[4rem] text-[27px] font-bold space-grotesk text-center lg:text-left text-white">
              Our Capital, Our Risk, Your Knowledge.
            </p>
            <p className="text-sm xl:text-lg tracking-wide lg:text-left text-center font-light lexend text-white 2xl:w-[35rem] mt-1">
              With our program, you can get funded up to £1,000,000 with up to a
              90% profit split. Unlock Your Trading Potential with Our Leading
              Proprietary Trading Firm
            </p>
            <div className="md:flex grid gap-3 mt-14 justify-center lg:justify-start">
              <Link href="/about-us">
                <Button
                  className="backdrop-filter bg-[transparent] backdrop-blur-lg bg-opacity-30 border border-slate-500 w-full"
                  text="learn more"
                />
              </Link>
              <Link href="/#evaluation-package">
                <Button
                  className="backdrop-filter bg-[#991275] border-none "
                  text="get started"
                  showArrow={true}
                />
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <div className="flex xl:justify-end justify-center">
              <img
                src="/assets/laptop.gif"
                className="lg:w-[30rem] w-[20rem] h-auto"
                alt="trade-computer"
              />
            </div>
          </Grid>
        </Grid>
        <Box sx={{ paddingTop: 10, paddingBottom: 10 }}></Box>
      </Box>
    </div>
  );
};

export default Hero;
