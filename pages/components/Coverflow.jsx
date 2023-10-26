import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import GlassMorphCard from './GlassMorphCard';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
const Coverflow = () => {
  return (
    <div>
        <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
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
                  <GlassMorphCard />
                </SwiperSlide>
                <SwiperSlide>
                  <GlassMorphCard />
                </SwiperSlide>
                <SwiperSlide>
                  <GlassMorphCard />
                </SwiperSlide>
                <SwiperSlide>
                  <GlassMorphCard />
                </SwiperSlide>
                <SwiperSlide>
                  <GlassMorphCard />
                </SwiperSlide>
              </Swiper>
    </div>
  )
}

export default Coverflow