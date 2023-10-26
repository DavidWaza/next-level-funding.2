import React from "react";
import Button from "./Button";
import Image from "next/image";
import MarqueeComponent from "./MarqueeComponent";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

const Hero = () => {
  return (
    <div className="home-bg w-full">
      <Container>
        <Box sx={{ paddingTop: 20, flexGrow: 1 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} lg={6}>
              <p className="uppercase text-[#537DFF] text-2xl lg:text-xl lg:text-left font-bold lexend text-center">
                Next level funding
              </p>
              <p className="py-3 lg:text-6xl text-[27px] font-bold space-grotesk text-center lg:text-left text-white">
                Our Capital, Our Risk, Your Knowledge.
              </p>
              <p className="text-md xl:text-sm lg:text-left text-center font-light lexend text-white">
                With our program, you can get funded up to £1,000,000 with up to
                a 90% profit split. Unlock Your Trading Potential with Our
                Leading Proprietary Trading Firm
              </p>
              <div className="md:flex grid gap-3 mt-14 justify-center lg:justify-start">
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
          <Box sx={{paddingTop: 10, paddingBottom: 10}}>
          <MarqueeComponent />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Hero;
