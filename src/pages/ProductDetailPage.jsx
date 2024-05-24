import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getProductId, updateCart } from "../api/api";
import { ProductItemContainer } from "./ProductDetailPageStyle";
import { useUserState } from "../recoil/authLoginAtom";

export default function ProductDetailPage() {
  const [products, setProducts] = useState();
  console.log("디테일 페이지 products : ", products);

  const [user, setUser] = useUserState();
  // console.log("user :", user);
  // console.log("user.uid : ", user.uid);
  const uid = user ? user.uid : null;

  const navigate = useNavigate();

  //useLocation() : 현재 url에 대한 정보를 제공하는 훅
  const location = useLocation();

  //location 현재 url에 대한 정보를 담은 변수를 활용해 pathname의 속성을 추출한다.
  const pathName = location.pathname;

  //문자열을 / 기준으로 나눈 후에 마지막 요소를 추출하여 id 변수에 할당
  const id = pathName.split("/").pop();
  // console.log("id : ", id);

  //옵션 문구
  const option = ["1개", "2개", "3개", "4개", "5개", "6개", "7개", "8개", "9개", "10개"];

  //수량 갯수
  const [selectQuantity, setSelectQuantity] = useState(1);
  console.log("selectQuantity : ", selectQuantity);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductId(id);
        if (data) {
          setProducts(data);
        }
      } catch (err) {
        console.error("상품 디테일 페이지 받아오는 작업 에러 : ", err);
      }
    };
    fetchProducts();
  }, [id]);

  const handleQuantityChange = (e) => {
    setSelectQuantity(Number(e.target.value));
  };

  const goToCartEvent = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("회원전용 기능입니다. 회원가입 페이지로 이동하겠습니다.");
      navigate("/login");
      return;
    }

    try {
      if (products) {
        // products가 존재하는 경우
        if (selectQuantity > products.quantity) {
          // 선택한 수량의 갯수가 등록한 아이템의 갯수를 초과할때
          alert("총 물량의 재고를 넘게 살 수 없습니다.");
        } else {
          // 장바구니에 상품을 추가하고 이동
          const updataProducts = { ...products, selected: selectQuantity };
          await updateCart(uid, updataProducts, selectQuantity);
          console.log("장바구니에 상품이 추가되었습니다.");
          navigate("/cart");
        }
      } else {
        // products가 존재하지 않는 경우
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
                  {products.price * selectQuantity}
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
                  <p>금방 품절되니 주문을 서두르세요..!</p>
                </div>
              </div>

              <form className="option-container">
                {/* 수량옵션 */}
                <label htmlFor="option">상품수량</label>
                <select name="" id="option" value={selectQuantity} onChange={handleQuantityChange}>
                  <option disabled value="">
                    상품옵션선택
                  </option>
                  {option.map((el, idx) => {
                    return (
                      <option value={idx + 1} key={idx}>
                        {el}
                      </option>
                    );
                  })}
                </select>

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
