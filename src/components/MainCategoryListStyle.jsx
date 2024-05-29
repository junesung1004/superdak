import styled from "styled-components";

export const MainCategoryListContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 50px 0;
  /* 헤더 css */
  .category-title {
    font-size: 1.8rem;
    color: #2d302d;
    font-weight: bold;
  }

  //검색 아이템 틀
  .search-item-container {
    margin-top: 23px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding: 10px;

    .search-item-wrap {
      cursor: pointer;
      width: 256px;
      height: 440px;
      display: flex;
      flex-direction: column;
      border: 1px solid #f2eded;
      border-radius: 20px;
      overflow: hidden;
      .img-wrap {
        width: 256px;
        height: 256px;
        margin-bottom: 10px;
        img {
          width: 100%;
        }
      } /* 이미지 */

      .item-info {
        padding: 4px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        border-radius: 10px;
        h1 {
          font-size: 1.1rem;
          color: #524e4e;
        }
        p {
          font-size: 0.8rem;
          color: #7a7777;
        }
        .item-price {
          display: flex;
          gap: 14px;
          align-items: end;
          p:nth-child(1) {
            font-size: 1.5rem;
            color: tomato;
            font-weight: bold;
          }
          p:nth-child(2) {
            font-size: 0.9rem;
            color: black;
            span {
              font-size: 1.5rem;
              color: black;
              font-weight: bold;
            }
          }
          p:nth-child(3) {
            font-size: 1rem;
            color: #7a7777;
            text-decoration: line-through;
          }
        }
        .item-review {
          display: flex;
        }
        img {
          width: 78px;
          height: 20px;
        }
      } //상품 정보
    }
  }
`;
