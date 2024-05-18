import styled from "styled-components";

export const SwiperContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;

  //이전버튼, 다음버튼 css코드
  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    &:hover {
      background: rgba(0, 0, 0, 0.9);
    }
    &:after {
      font-size: 35px;
    }
  }

  //페이지 순서를 dot 형태의 이미지로 표시하는 css
  .swiper-pagination {
    display: flex !important;
    gap: 20px !important;
    justify-content: center !important;
    position: absolute;
    bottom: 30px;
  }

  .swiper-pagination-bullet {
    width: 40px;
    height: 10px;
    background: #fff;
    opacity: 1;
    border-radius: 5px;
  }

  .swiper-pagination-bullet-active {
    background: #007aff;
  }

  //페이지의 위치를 스크롤바로 표시해주는 css
  .swiper-scrollbar {
    background: rgba(0, 0, 0, 0.1);
    height: 5px;

    .swiper-scrollbar-drag {
      background: #da6acf;
    }
  }

  @media (max-width: 1150px) {
    display: none;
    .img-wrap {
      img {
        width: 50%;
        height: 50%;
      }
    }
  }
`;
