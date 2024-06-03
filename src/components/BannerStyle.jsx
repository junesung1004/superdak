// BannerStyle.js
import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 130px;
  margin: 0 auto;
  display: flex;
  gap: 80px;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  background-color: #efe4da;
  opacity: 0;
  transform: translateX(300px);
  transition: opacity 1.5s ease-out, transform 1.5s ease-out;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .logo-wrap {
    width: 120px;
    height: 120px;
    img {
      transform: scale(0.8);
      width: 100%;
      border-radius: 50%;
    }
  }

  .text-wrap {
    p {
      font-size: 1.5rem;
      font-weight: bolder;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
