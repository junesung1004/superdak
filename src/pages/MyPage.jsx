import { useEffect, useState } from "react";
import { MyPageContainer } from "./MyPageStyle";
import { getMyPage } from "../api/api";
import { useUserState } from "../recoil/authLoginAtom";

export default function MyPage() {
  const [buyProducts, setBuyProducts] = useState([]);
  console.log("buyProducts : ", buyProducts);

  const [user] = useUserState();
  console.log("user : ", user);
  const uid = user ? user.uid : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const item = await getMyPage(uid);
        setBuyProducts(item);
      } catch (err) {
        console.error("마이페이지에서 데이터 불러오는 기능 에러 : ", err);
      }
    };
    fetchData();
  }, [uid]);

  return (
    <MyPageContainer>
      <h1>장바구니</h1>

      {/* 유저 정보 */}
      <div className="user-info-wrap">
        <div className="user-title">
          <p>혜택정보</p>
        </div>

        <div className="user-info">
          <p>
            <span>{user.displayName}</span> 님은, [슈퍼닭] 회원이십니다.
          </p>
          <p>
            <span>{buyProducts.price}</span> 원 이상 구매시, <span>0%</span>을 추가적립 받으실 수 있습니다.
          </p>
        </div>
      </div>

      {/* 주문한 상품 정보 */}
      <p className="instruction">장바구니에 담긴 상품은 30일 동안 보관됩니다.</p>
      <form>
        {/* 전체 체크박스 및 선택삭제 버튼*/}
        <div className="all-check-wrap">
          <div className="all-check">
            <input type="checkbox" id="all" />
            <label htmlFor="all">전체 선택</label>
          </div>
          <div className="btn-wrap">
            <button type="button">배달완료</button>
            <button type="button">주문취소</button>
          </div>
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
              <img src={"/logo.png"} alt={"상품 사진"} />
            </div>
            <div className="cart-item-content-wrap">
              <p>제목</p>
              <p>설명</p>
              <p>
                <span>1231</span>원
              </p>
            </div>

            <div className="cart-item-price-wrap">
              <p>
                <span>21313</span>원
              </p>
            </div>
            <div className="delete-btn-wrap">
              <button type="button">x</button>
            </div>
          </div>

          {/* 카트 상품 가격 표시 콘테이너 */}
          <div className="cart-item-price-wrap">
            <p>
              상품<span>21312313</span>원 총 가격 :<span className="price">123131</span>원
            </p>
          </div>
        </div>
      </form>
    </MyPageContainer>
  );
}
