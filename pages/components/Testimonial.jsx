import { register } from "swiper/element/bundle";

// import required modules
import GlassMorphCard from "./GlassMorphCard";

import { Keyboard, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonial = () => {
  register();
  return (
    <>
      <swiper-container
        slides-per-view="4"
        navigation="true"
        pagination="true"
        scrollbar="true"
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
        }}
      >
        <swiper-slide>
          <GlassMorphCard
            title="Excellent Service and ex..."
            text="Next Level Funding offers an exceptional experience for traders, with their deep expertise, personalized guidance, and supportive community. Their commitment to risk management and transparency stands out, making it a top choice for both new and experienced traders looking for growth and success."
          />
        </swiper-slide>
        <swiper-slide>
          <GlassMorphCard
            title="Excellent Service and ex..."
            text="Next Level Funding offers an exceptional experience for traders, with their deep expertise, personalized guidance, and supportive community. Their commitment to risk management and transparency stands out, making it a top choice for both new and experienced traders looking for growth and success."
          />
        </swiper-slide>
        <swiper-slide>
          <GlassMorphCard
            title="Excellent Service and ex..."
            text="Next Level Funding offers an exceptional experience for traders, with their deep expertise, personalized guidance, and supportive community. Their commitment to risk management and transparency stands out, making it a top choice for both new and experienced traders looking for growth and success."
          />
        </swiper-slide>
        <swiper-slide>
          <GlassMorphCard
            title="Excellent Service and ex..."
            text="Next Level Funding offers an exceptional experience for traders, with their deep expertise, personalized guidance, and supportive community. Their commitment to risk management and transparency stands out, making it a top choice for both new and experienced traders looking for growth and success."
          />
        </swiper-slide>
      </swiper-container>
    </>
  );
};
export default Testimonial;
