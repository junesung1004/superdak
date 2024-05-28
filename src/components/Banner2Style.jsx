import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
  .img-wrap {
    width: 100%;
    img {
      width: 100%;
    }
  }

  @media (max-width: 980px) {
    display: none;
  }
`;
