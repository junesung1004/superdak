import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ProductPage() {
  return (
    <ProductItemContainer>
      <div className="product-container">
        {/* 이미지 */}
        <div className="img-wrapper">
          <img src="/dak-1.jpg" alt="상품이미지" />
          <img src="/delivery.jpg" alt="배송이미지" />
        </div>

        {/* 상품 내용 전체 콘테이너 */}
        <div className="product-wrap">
          {/* 상품 제목, 가격, 정보 */}
          <div className="product-content-wrap">
            <h1>맛있는 슈퍼닭 살살녹는 훈제 닭가슴살 100g</h1>
            <p>닭가슴살 보조설명</p>
            <p>
              25,000<span>원</span>
            </p>
          </div>

          {/* 상품 주의사항 */}
          <div className="product-info-wrap">
            <div className="info-wrap">
              <p>판매량</p>
              <p>7,500 팩 구매</p>
            </div>
            <div className="info-wrap">
              <p>배송방법</p>
              <p>특급배송</p>
            </div>
            <div className="info-wrap">
              <p>브랜드관</p>
              <p>슈퍼닭</p>
            </div>
            <div className="info-wrap">
              <p>보관방법</p>
              <p>냉동 보관</p>
            </div>
            <div className="info-wrap">
              <p>공지사항</p>
              <p>금방 품절되니 주문을 서두르세요.</p>
            </div>
          </div>

          <form className="option-container">
            {/* 수량옵션 */}
            <label htmlFor="option">상품수량</label>
            <select name="" id="option">
              <option disabled selected>
                상품옵션선택
              </option>
              <option value="1">1팩</option>
              <option value="3">3팩</option>
              <option value="5">5팩</option>
              <option value="10">10팩</option>
            </select>

            {/* 장바구니 및 바로구매 버튼 */}
            <div className="button-wrap">
              <Link to={"/cart"}>
                <button className="cart-btn">장바구니</button>
              </Link>
              <Link>
                <button className="buy-btn">바로구매</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </ProductItemContainer>
  );
}

const ProductItemContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
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
    transform: scale(0.85);
    .img-wrapper {
      img:last-child {
        display: none;
      }
    }
  }

  @media (max-width: 820px) {
    transform: scale(0.8);
    .img-wrapper {
      img:last-child {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    position: relative;
    top: -100px;
    .product-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
