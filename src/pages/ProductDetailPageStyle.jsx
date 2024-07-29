import styled from "styled-components";

export const ProductItemContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  .product-container {
    display: flex;
    justify-content: center;
    gap: 90px;
    width: 100%;
    margin: 40px auto;
    /* 이미지 콘테이너 */
    .img-wrapper {
      width: 500px;
      height: 500px;
      box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      gap: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    /* 상품 전체 콘테이너 */
    .product-wrap {
      display: flex;
      flex-direction: column;
      gap: 10px;

      /* 상품 내용 콘테이너 */
      .product-content-wrap {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-bottom: 30px;
        border-bottom: 1px solid #dedede;
        h1 {
          font-size: 1.5rem;
          font-weight: 500;
        }
        p {
          font-size: 0.8rem;
          color: #7e7e7e;
        }
        p:last-child {
          font-size: 2rem;
          color: black;
          font-weight: bolder;
          span {
            font-size: 1.2rem;
          }
        }
      }

      /* 상품 주의사항 콘테이너 */
      .product-info-wrap {
        .info-wrap {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
          p:first-child {
            width: 70px;
            color: #726b6b;
            font-size: 1rem;
          }
          p:last-child {
            font-weight: 500;
            font-size: 1rem;
          }
        }
      }

      /* 옵션 수량 및 장바구니 및 바로구매 버튼 콘테이너 */
      .option-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 20px;
        border-top: 1px solid #dedede;
        label {
          margin-bottom: 5px;
          font-size: 1.1rem;
          font-weight: 500;
        }
        select {
          padding: 15px 20px;
        }
        .button-wrap {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          width: 100%;
          gap: 20px;
          .cart-btn {
            height: 50px;
            cursor: pointer;
            width: 230px;
            font-weight: bold;
            padding: 10px 80px;
            border: 1px solid #ededed;
            background-color: white;
            transition: 0.5s;
            border-radius: 8px;
            &:hover {
              background-color: rgba(244, 193, 193, 0.5);
            }
          }
          .buy-btn {
            cursor: pointer;
            color: white;
            height: 50px;
            width: 230px;
            font-weight: bold;
            padding: 10px 30px;
            border: 1px solid #ededed;
            background-color: aqua;
            transition: 0.5s;
            border-radius: 8px;
            &:hover {
              background-color: rgba(138, 127, 241, 0.5);
            }
          }
        }
      }
    }
  }

  @media (max-width: 1100px) {
    /* transform: scale(0.85); */
    padding: 0 20px;
    .img-wrapper {
      img:last-child {
        display: none;
      }
    }
  }

  /* @media (max-width: 820px) {
    .img-wrapper {
      transform: scale(0.8);
      img:last-child {
        display: none;
      }
    }
  } */

  @media (max-width: 768px) {
    position: relative;
    .product-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 390px) {
    box-sizing: border-box;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    min-height: 100vh;
    .product-container {
      display: flex;
      justify-content: center;
      gap: 90px;
      width: 100%;
      margin: 40px auto;
      /* 이미지 콘테이너 */
      .img-wrapper {
        width: 300px;
        height: 300px;
        box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        gap: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      /* 상품 전체 콘테이너 */
      .product-wrap {
        display: flex;
        flex-direction: column;
        gap: 10px;

        /* 상품 내용 콘테이너 */
        .product-content-wrap {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding-bottom: 30px;
          border-bottom: 1px solid #dedede;
          padding: 0 90px;
          h1 {
            font-size: 1rem;
            font-weight: 500;
          }
          p {
            font-size: 0.8rem;
            color: #7e7e7e;
          }
          p:last-child {
            font-size: 1.6rem;
            color: black;
            font-weight: bolder;
            margin-bottom: 10px;
            span {
              font-size: 1.2rem;
            }
          }
        }

        /* 상품 주의사항 콘테이너 */
        .product-info-wrap {
          padding: 20px 90px;
          .info-wrap {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 40px;
            p:first-child {
              width: 70px;
              color: #726b6b;
              font-size: 1rem;
            }
            p:last-child {
              font-weight: 500;
              font-size: 1rem;
            }
          }
        }

        /* 옵션 수량 및 장바구니 및 바로구매 버튼 콘테이너 */
        .option-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 20px;
          border-top: 1px solid #dedede;
          label {
            padding: 0 90px;
            margin-bottom: 5px;
            font-size: 1.1rem;
            font-weight: 500;
          }
          select {
            padding: 15px 80px;
          }
          .button-wrap {
            transform: scale(0.8);
            margin-top: 20px;
            display: flex;
            justify-content: center;
            width: 100%;
            gap: 20px;
            .cart-btn {
              height: 50px;
              cursor: pointer;
              width: 230px;
              font-weight: bold;
              padding: 10px 80px;
              border: 1px solid #ededed;
              background-color: white;
              transition: 0.5s;
              border-radius: 8px;
              &:hover {
                background-color: rgba(244, 193, 193, 0.5);
              }
            }
            .buy-btn {
              cursor: pointer;
              color: white;
              height: 50px;
              width: 230px;
              font-weight: bold;
              padding: 10px 30px;
              border: 1px solid #ededed;
              background-color: aqua;
              transition: 0.5s;
              border-radius: 8px;
              &:hover {
                background-color: rgba(138, 127, 241, 0.5);
              }
            }
          }
        }
      }
    }
  }
`;
