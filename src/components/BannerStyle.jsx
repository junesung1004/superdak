import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 130px;
  margin: 0 auto;
  display: flex;
  gap: 80px;
  margin-top: 40px;
  /* flex-direction:column; */
  align-items: center;
  justify-content: center;
  background-color: #efe4da;
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
