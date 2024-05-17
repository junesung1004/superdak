
import styled from "styled-components"
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper ,SwiperSlide } from "swiper/react"
import 'swiper/css'



export default function HomePage() {

  return (
    <SwiperContainer  className="slide-container">
      <Swiper
      loop={true}
      slidesPerView= {1}
      autoplay={{delay: 1500}}
      speed={3000}
      modules={[Autoplay, EffectFade]}
      // effect = "fade"
      >
        <SwiperSlide>
          <img src="main-image-1.gif" alt="메인 슬라이더 이미지1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="main-image-2.jpg" alt="메인 슬라이더 이미지2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="main-image-3.jpg" alt="메인 슬라이더 이미지3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="main-image-4.jpg" alt="메인 슬라이더 이미지4" />
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  )
}

const SwiperContainer = styled.div`
  width: 100%;
  overflow:hidden;

  @media (max-width:1280px) {
    .img-wrap {
      img {
        width: 50%;
        height: 50%; 
      }
    }
  }
`