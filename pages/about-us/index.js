import React from "react";
import TableComponent from "../components/TableComponent";
// import Carousel from "../components/Carousel";
import Button from "../components/Button";
// import Testimonial from "../components/Testimonial";
// import CoverflowCarousel from "../components/CoverflowCarousel";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
const AboutUs = () => {

  //   return  <Swiper
  //   effect={'cards'}
  //   grabCursor={true}
  //   modules={[EffectCards]}
  //   className="mySwiper"
  // >
  //   <SwiperSlide>Slide 1</SwiperSlide>
  //   <SwiperSlide>Slide 2</SwiperSlide>
  //   <SwiperSlide>Slide 3</SwiperSlide>
  //   <SwiperSlide>Slide 4</SwiperSlide>
  //   <SwiperSlide>Slide 5</SwiperSlide>
  //   <SwiperSlide>Slide 6</SwiperSlide>
  //   <SwiperSlide>Slide 7</SwiperSlide>
  //   <SwiperSlide>Slide 8</SwiperSlide>
  //   <SwiperSlide>Slide 9</SwiperSlide>
  // </Swiper>
  return (
    <main className="w-full body-bg pt-[5rem] text-white 2xl:h-[70vh] h-full">
      <div className="grid items-center justify-center py-[5rem]">
        <p className=" lexend uppercase text-slate-400  text-sm px-3 mt-[6rem] text-center">
          who we are
        </p>
        <p className="space-grotesk font-bold text-[3rem] text-center">
          About Us
        </p>
        <p className="2xl:w-5/12 w-3/4 lexend text-center m-auto font-extralight">
          We are a company that seeks profitable traders to trade our funds.
          Prove to us you are profitable by completing our evaluation phase and
          recieving immediate funding of up to $500k
        </p>
      </div>
      <div className="home-bg">
        <div className=" flex-col justify-center items-center 2xl:px-[10rem]">
          <section className=" 2xl:px-[10rem]">
            <div className="grid 2xl:grid-cols-2 grid-cols-none items-center py-20 gap-7 px-[2rem] 2xl:px-0">
              <div>
                <img
                  src="/assets/about.png"
                  className=" h-auto m-auto"
                  alt=""
                />
              </div>
              <div className="2xl:text-left text-center">
                <p className="space-grotesk 2xl:text-[4rem] font-bold text-3xl mt-10 2xl:mt-0">
                  Our Mission
                </p>
                <p className="lexend w-full text-lg font-thin 2xl:text-left text-center m-auto 2xl:m-0 pt-[2rem] ">
                  Our goal at nextlevelfunding is to help fund the dreams of
                  traders who do not have sufficient funds to make large returns
                  on there account per month. We seek profitable traders who can
                  trade our capital and hope to have a long lasting relationship
                  with them.
                </p>
              </div>
            </div>
          </section>

          {/* CAROUSEL */}
          <section className="mt-[10rem]">
            <p className="lexend uppercase text-slate-400 text-center text-sm">
              Perks of joining us
            </p>
            <p className="font-bold space-grotesk 2xl:text-6xl text-3xl text-center ">
              Why Choose Us
            </p>
     <>
     <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
            </Swiper></>
          </section>

          {/* tABLE */}
          <section className="flex justify-center 2xl:px-[10rem] px-[1.5rem] mt-[5rem]">
            <TableComponent />
          </section>

          {/* TESTIMONIALS */}
          <section className="2xl:px-[10rem] px-[2rem] py-[10rem]">
            <p className="lexend uppercase text-slate-400 text-left text-sm">
              what our traders are saying about us
            </p>
            <p className="font-bold space-grotesk 2xl:text-6xl text-3xl text-left ">
              Testimonials
            </p>
            {/* <Testimonial /> */}
          </section>
          <section>
            <section className="my-[10rem] relative hidden 2xl:block">
              <img src="/assets/rec.svg" className="w-full h-auto " alt="" />
              <div className="absolute top-[10%] z-10 left-[4rem]">
                <p className=" pt-10 lexend uppercase text-slate-400  text-sm px-3 ">
                  be a part of the winning team
                </p>
                <p className="space-grotesk font-bold text-[3rem] ">
                  Join our team of <br /> experienced traders
                </p>
                <div className="mt-[2rem]">
                  <Button
                    className="backdrop-filter bg-[#991275] border-none "
                    text="get started"
                    showArrow={true}
                  />
                </div>
              </div>
              <div className="absolute -top-[7rem] right-0">
                <img src="/assets/trader.png" className="w-3/4 h-auto" alt="" />
              </div>
            </section>
          </section>
        </div>
        <section className="2xl:px-[7rem]">
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default AboutUs;


// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';


// // import required modules
// import { EffectCards } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         effect={'cards'}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
