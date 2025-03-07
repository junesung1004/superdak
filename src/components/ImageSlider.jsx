import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { SwiperContainer } from "./ImageSliderStyle";

export default function ImageSlider() {
  return (
    <SwiperContainer className="slide-container">
      <Swiper
        loop={true}
        slidesPerView={1}
        autoplay={{ delay: 1500 }}
        speed={3000}
        navigation
        modules={[Navigation, Autoplay, EffectFade, Pagination, Scrollbar]}
        effect="fade"
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            src="main-image-1.gif"
            alt="메인 슬라이더 이미지1"
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="main-image-2.jpg"
            alt="메인 슬라이더 이미지2"
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="main-image-3.jpg"
            alt="메인 슬라이더 이미지3"
            style={{ width: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="main-image-4.jpg"
            alt="메인 슬라이더 이미지4"
            style={{ width: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
}
