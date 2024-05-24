import { useEffect, useState } from "react";
import { CartPageContainer } from "./CartPageStyle";
import { deleteCart, getCart } from "../api/api";
import { useUserState } from "../recoil/authLoginAtom";

export default function CartPage() {
  const [products, setProducts] = useState([]);
  const [user] = useUserState();
  console.log("카트 페이지 products : ", products);
  //console.log("카트페이지 user : ", user);
  // console.log("product.id : ", products[1].id);

  const uid = user ? user.uid : null;
  console.log("uid : ", uid);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productItem = await getCart(uid);
        setProducts(productItem);
      } catch (err) {
        console.error("장바구니 아이템 가져오는 기능 에러! : ", err);
      }
    };
    fetchProducts();
  }, [uid]);

  const clickDeleteBtn = async () => {
    console.log("버튼을 눌렀습니다.");
    try {
      const remove = await deleteCart(uid, products.id);
    } catch (err) {
      console.error("장바구니 삭제기능 에러 :", err);
    }
  };

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
            <button type="button">선택삭제</button>
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

            {products.length > 0 &&
              products.map((product, idx) => {
                return (
                  <div key={idx}>
                    {/* 카트상품 */}
                    <div className="cart-item-wrap">
                      <div className="checkbox-wrap">
                        <input type="checkbox" />
                      </div>
                      <div className="cart-img-wrap">
                        <img src={product.image} alt={product.title} />
                      </div>
                      <div className="cart-item-content-wrap">
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                        <p>
                          <span>{product.price}</span>원
                        </p>
                      </div>
                      <div className="cart-item-count-wrap">
                        <button type="button">-</button>
                        <div>1</div>
                        <button type="button">+</button>
                      </div>
                      <div className="cart-item-price-wrap">
                        <p>
                          <span>{product.price}</span>원
                        </p>
                      </div>
                      <div className="delete-btn-wrap">
                        <button type="button" onClick={clickDeleteBtn}>
                          x
                        </button>
                      </div>
                    </div>

                    {/* 카트 상품 가격 표시 콘테이너 */}
                    <div className="cart-item-price-wrap">
                      <p>
                        상품<span>{product.price}</span>원 총 가격 : <span className="price">{products.price}</span>원
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </form>
      </div>
    </CartPageContainer>
  );
}
