import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateCart } from "../api/api";
import { ProductItemContainer } from "./ProductDetailPageStyle";
import { useUserState } from "../recoil/authLoginAtom";
// import { useAuthContext } from "../context/AuthContext";

export default function ProductDetailPage() {
  const [products, setProducts] = useUserState();
  console.log("products : ", products);

  const state = useLocation().state;
  console.log("state : ", state);

  // const { user } = useAuthContext();
  // console.log("userid: ", user.uid);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(state);
      } catch (err) {
        console.error("상품 디테일 페이지 받아오는 작업 에러 : ", err);
      }
    };
    fetchProducts();
  }, []);

  const goToCartEvent = async (e) => {
    e.preventDefault();
    try {
      const userObject = JSON.parse(user);
      if (products) {
        await updateCart(userObject.uid, products);
        console.log("장바구니에 상품이 추가되었습니다.");
        navigate("/cart"); // 장바구니 페이지로 이동
      } else {
        console.log("상품을 찾을 수 없습니다.");
      }
    } catch (err) {
      console.error("장바구니 추가 기능 에러 : ", err);
    }
  };

  return (
    <ProductItemContainer>
      <div className="product-container">
        {products ? (
          <>
            {/* 이미지 */}
            <div className="img-wrapper">
              <img src={products.image} alt="상품이미지" />
              <img src="/delivery.jpg" alt="배송이미지" />
            </div>

            {/* 상품 내용 전체 콘테이너 */}
            <div className="product-wrap">
              {/* 상품 제목, 가격, 정보 */}
              <div className="product-content-wrap">
                <h1>{products.title}</h1>
                <p>{products.description}</p>
                <p>
                  {products.price}
                  <span>원</span>
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
                {/* <label htmlFor="option">상품수량</label>
                <select name="" id="option">
                  <option disabled selected>
                    상품옵션선택
                  </option>
                  <option value="1">1팩</option>
                  <option value="3">3팩</option>
                  <option value="5">5팩</option>
                  <option value="10">10팩</option>
                </select> */}

                {/* 장바구니 및 바로구매 버튼 */}
                <div className="button-wrap">
                  <button className="cart-btn" onClick={goToCartEvent}>
                    장바구니
                  </button>
                  <button className="buy-btn">바로구매</button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <p>그런 상품은 없습니다.</p>
        )}
      </div>
    </ProductItemContainer>
  );
}
