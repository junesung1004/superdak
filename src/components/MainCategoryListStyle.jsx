import styled from "styled-components";

export const MainCategoryListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 50px;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1300px;
  /* 카테고리 제목 */
  .category-title {
    margin-top: 80px;
    color: black;
    font-weight: bold;
    font-size: 2rem;
    /* margin-bottom: 30px; */
    span {
      color: #ec3e8c;
    }
  }

  .item-container {
    display: grid;
    grid-template-columns: repeat(4, minmax(280px, 25%));
    grid-auto-rows: minmax(480px);
    gap: 20px;
    justify-content: center;
    margin-bottom: 60px;

    /* 상품 아이템 전체 틀 */
    .product-item-wrap {
      display: flex;
      flex-direction: column;
      border: 1px solid #dedede;
      border-radius: 10px;
      overflow: hidden;
      gap: 20px;
      height: 480px;
      .img-wrap {
        width: 100%;
        img {
          cursor: pointer;
          width: 100%;
          object-fit: cover;
        }
      }

      .item-content {
        padding: 15px;
        p {
          cursor: pointer;
          font-size: 0.85rem;
          color: black;
          margin-bottom: 18px;
        }
        p:nth-child(2) {
          font-size: 1.1rem;
        }
        p:nth-child(3) {
          font-size: 1.2rem;
          font-weight: bold;
          span {
            font-size: 1.6rem;
          }
        }
      }
    }
  }

  @media (max-width: 1300px) {
    .item-container {
      grid-template-columns: repeat(3, minmax(280px, 31%));
    }
  }

  @media (max-width: 1050px) {
    .category-title {
      font-size: 1.4rem;
      margin-top: 50px;
    }
    .item-container {
      grid-template-columns: repeat(2, minmax(280px, 40%));
    }
  }

  @media (max-width: 768px) {
    .category-title {
      font-size: 1.2rem;
      margin-top: 50px;
    }
    .item-container {
      grid-template-columns: repeat(1, minmax(280px, 320px));
    }
  }
`;
