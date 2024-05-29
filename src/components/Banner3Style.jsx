import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  margin: 40px 0;
  width: 100%;
  position: relative;
  background-color: #eaf6f5;
  height: 590px;

  .title-wrap {
    display: flex;
    gap: 20px;
    align-items: center;
    position: absolute;
    top: 50px;
    left: 35%;
    img {
      width: 100px;
      height: 100px;
    }
    span {
      font-weight: bold;
      font-size: 1.5rem;
    }
  }

  .img-container {
    width: 1300px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 180px;
    padding: 180px 0;

    .img-wrap {
      width: 350px;
      height: 600px;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
      }
      p {
        margin-top: 10px;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
        color: black;
        z-index: 11;
      }
    }
  }
`;
