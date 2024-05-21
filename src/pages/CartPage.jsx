import { useEffect, useState } from "react";
import { CartPageContainer } from "./CartPageStyle";
import { getProducts } from "../api/api";

export default function CartPage() {
  const [products, setProducts] = useState([]);
  console.log("products : ", products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productItem = getProducts();
        setProducts(productItem);
      } catch (err) {
        console.error("장바구니 아이템 가져오는 기능 에러 : ", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <CartPageContainer>
      <h1>장바구니</h1>
      <div>
        <form>
          {/* 전체 체크박스 및 선택삭제 버튼*/}
          <div className="all-check-wrap">
            <div className="all-check">
              <input type="checkbox" id="all" />
              <label htmlFor="all">전체 선택</label>
            </div>
            <button>선택삭제</button>
          </div>

          {/* 장바구니 아이템 콘테이너 */}
          <div className="cart-wrap">
            {/* 슈퍼닭 분류 로고 */}
            <div className="logo-wrap">
              <div className="all-check">
                <input type="checkbox" id="all" />
                <label htmlFor="all">슈퍼닭</label>
              </div>
            </div>

            {/* 카트상품 */}
            <div className="cart-item-wrap">
              <div className="checkbox-wrap">
                <input type="checkbox" />
              </div>
              <div className="cart-img-wrap">
                <img src={products.image} alt={products.title} />
              </div>
              <div className="cart-item-content-wrap">
                <p>{products.title}</p>
                <p>{products.description}</p>
                <p>
                  <span>{products.price}</span>원
                </p>
              </div>
              <div className="cart-item-count-wrap">
                <button>-</button>
                <div>1</div>
                <button>+</button>
              </div>
              <div className="cart-item-price-wrap">
                <p>
                  <span>{products.price}</span>원
                </p>
              </div>
              <div className="delete-btn-wrap">
                <button>x</button>
              </div>
            </div>

            {/* 카트 상품 가격 표시 콘테이너 */}
            <div className="cart-item-price-wrap">
              <p>
                상품<span>{products.price}</span>원 총 가격 : <span className="price">{products.price}</span>원
              </p>
            </div>
          </div>
        </form>
      </div>
    </CartPageContainer>
  );
}
