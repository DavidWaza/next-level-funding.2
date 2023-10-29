import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import PriceCard from "./PriceCard";
import GlassMorphCard from "./GlassMorphCard";
const TestimonialComponent = () => {
  return (
    <div>
      <Swiper
        // effect={"coverflow"}
        grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        initialSlide={1}
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
      </Swiper>
    </div>
  );
};

export default TestimonialComponent;
