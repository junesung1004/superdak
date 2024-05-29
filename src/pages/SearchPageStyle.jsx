import styled from "styled-components";

export const SearchPageContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 50px 0;
  /* 헤더 css */
  .header-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .search-title-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #dedede;
      padding-bottom: 20px;
      .title-wrap {
        h1 {
          font-weight: bold;
          font-size: 1.4rem;
          color: #c3bebe;
          span {
            font-size: 1.7rem;
            color: #a0b8ec;
          }
        }
      }

      .search-item-info {
        p {
          font-size: 1rem;
          color: #c3bebe;
          span {
            color: black;
            font-size: 1.4rem;
            font-weight: bold;
          }
        }
      }
    }

    .text-wrap {
      .text-list-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.8rem;
        li {
          color: #a69595;
        }
        li:first-child {
          font-weight: bolder;
          font-size: 1rem;
          color: #908484;
        }
      }
    }

    /* 배송종류 & 카테고리 , 혜택 등등 텍스트 css */
    .item-delivery-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 30px;
      cursor: pointer;
      .text-wrap {
        width: 220px;
        padding: 20px 15px;
        display: flex;
        justify-content: space-between;
        background-color: #eae5e5;
        border-radius: 8px;
        color: #575353;
      }
    }
  }

  //검색 아이템 틀
  .search-item-container {
    margin-top: 80px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 40px;
    .search-item-wrap {
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
