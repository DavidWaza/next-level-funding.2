import React from "react";
import CarouselCard from "./CarouselCard";
import { Swiper, SwiperSlide } from "swiper/react";
import GlassMorphCard from "./GlassMorphCard";
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
          <CarouselCard
            img="/assets/crown-blue.png"
            title="Trading Evaluation at its best"
            text="Our evaluation account allows traders to prove their skill in order to trade our live funds."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img="/assets/crown-pink.svg"
            title="High Profit Splits"
            text="Our profit split for the first month on all accounts is 80%. On the second month you will then receive 90% of all profits made!
              "
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img="/assets/crown-pink.svg"
            title="Trading Evaluation at its best"
            text="Our evaluation account allows traders to prove their skill in order to trade our live funds."
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard
            img="/assets/crown-pink.svg"
            title="Trading Evaluation at its best"
            text="Our evaluation account allows traders to prove their skill in order to trade our live funds."
          />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Coverflow;
