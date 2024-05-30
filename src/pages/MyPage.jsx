import { useEffect, useState } from "react";
import { MyPageContainer } from "./MyPageStyle";
import { deleteMyPage, getMyPage, updateCart } from "../api/api";
import { useUserState } from "../recoil/authLoginAtom";

export default function MyPage() {
  const [buyProducts, setBuyProducts] = useState([]);
  //console.log("buyProducts : ", buyProducts);

  const [user] = useUserState();
  //console.log("user : ", user);
  const uid = user ? user.uid : null;

  //체크박스 선택한 갯수 및 정보를 담는 state변수
  const [selectProductList, setSelectProductList] = useState([]);
  console.log("selectProductList : ", selectProductList);

  //api데이터를 uid 즉 유저의id가 있을때 마운트 되어서 정보를 보여주는 코드
  useEffect(() => {
    const fetchData = async () => {
      try {
        const item = await getMyPage(uid);

        const discountProducts = item.map((el) => {
          if (el.category === "닭가슴살") {
            return {
              ...el,
              discountPrice: el.price * 0.9,
            };
          }
          return el;
        });
        setBuyProducts(discountProducts);
      } catch (err) {
        console.error("마이페이지에서 데이터 불러오는 기능 에러 : ", err);
      }
    };
    fetchData();
  }, [uid]);

  //인풋 체크박스 선택됬는지 여부의 이벤트
  const handleSelectCheck = (productId) => {
    setSelectProductList((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]));
  };

  //인풋 타입중 체크박스가 전체선택이 됬는지 여부의 이벤트
  const checkedAllEvent = () => {
    if (selectProductList.length === buyProducts.length) {
      setSelectProductList([]);
    } else {
      setSelectProductList(buyProducts.map((product) => product.id));
    }
  };

  //배달완료 버튼 누르면 데이터베이스의 mypage에 있는 상품을 삭제하는 이벤트 호출
  const clickSuccessDlivery = async () => {
    try {
      if (selectProductList.length < 1) {
        alert("배달 완료된 아이템을 선택해주세요.");
      } else {
        await Promise.all(selectProductList.map((productId) => deleteMyPage(uid, productId)));
        const updateProduts = buyProducts.filter((product) => !selectProductList.includes(product.id));
        setBuyProducts(updateProduts);
        setSelectProductList([]);
        alert("총알배송 완료해드렸습니다. 감사합니다!");
      }
    } catch (err) {
      console.error("장바구니 주문 후 데이터베이스 자료 삭제 기능 에러 : ", err);
    }
  };

  //x버튼을 누르면 그 해당 product.id를 받아와서 일치하는 데이터를 삭제하는 이벤트
  //마이페이지에서 주문한 상품을 주문을 취소하면 장바구니에 다시 돌아가게 기능을 구현할 것.
  const clickDelteBtn = async (productId) => {
    console.log("버튼 동작 되낭?");
    try {
      await deleteMyPage(uid, productId);
      setBuyProducts((prev) => prev.filter((product) => product.id !== productId));
      //주문 취소한 상품은 다시 카트 장바구니에다 추가하고 싶음
      // await updateCart();
    } catch (err) {
      console.error("해당 아이템 삭제기능 에러 :", err);
    }
  };

  //체크박스 선택된 애들 주문 취소하는 이벤트
  const clickSelectDelete = async () => {
    try {
      if (selectProductList.length < 1) {
        alert("주문 취소하실 상품을 선택해주세요.");
      } else {
        await Promise.all(selectProductList.map((productId) => deleteMyPage(uid, productId)));
        const updateProducts = buyProducts.filter((product) => !selectProductList.includes(product.id));
        setBuyProducts(updateProducts);
        setSelectProductList([]);
      }
    } catch (err) {
      console.error("선택한 제품 주문 취소하기 에러 : ", err);
    }
  };

  return (
    <MyPageContainer>
      <h1>마이페이지</h1>

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
            <span>52000</span> 원 이상 구매시, <span>10%</span>을 추가적립 받으실 수 있습니다.
          </p>
        </div>
      </div>

      {/* 주문한 상품 정보 */}
      <p className="instruction">장바구니에 담긴 상품은 30일 동안 보관됩니다.</p>
      <form>
        {/* 전체 체크박스 및 선택삭제 버튼*/}
        <div className="all-check-wrap">
          <div className="all-check">
            <input type="checkbox" id="all" checked={selectProductList.length === buyProducts.length} onChange={checkedAllEvent} />
            <label htmlFor="all">전체 선택</label>
          </div>
          <div className="btn-wrap">
            <button type="button" onClick={clickSuccessDlivery}>
              선택 배달완료
            </button>
            <button type="button" onClick={clickSelectDelete}>
              선택 주문취소
            </button>
          </div>
        </div>

        {/* 장바구니 아이템 콘테이너 */}
        <div className="cart-wrap">
          {/* 슈퍼닭 분류 로고 */}
          <div className="logo-wrap">
            <div className="all-check">
              <input type="checkbox" id="all" checked={selectProductList.length === buyProducts.length} onChange={checkedAllEvent} />
              <label htmlFor="all">슈퍼닭</label>
            </div>
          </div>

          {/* 카트상품 */}
          {buyProducts.map((product, idx) => {
            return (
              <div key={idx}>
                <div className="cart-item-wrap">
                  <div className="checkbox-wrap">
                    <input type="checkbox" checked={selectProductList.includes(product.id)} onChange={() => handleSelectCheck(product.id)} />
                  </div>
                  <div className="cart-img-wrap">
                    <img src={product.image} alt={"상품 사진"} />
                  </div>
                  <div className="cart-item-content-wrap">
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>
                      <span>{product.discountPrice ? (product.discountPrice * product.selected).toLocaleString() : (product.price * product.selected).toLocaleString()}</span>원
                    </p>
                  </div>

                  <div className="cart-item-price-wrap">
                    <p>
                      <span>{product.discountPrice ? (product.discountPrice * product.selected).toLocaleString() : (product.price * product.selected).toLocaleString()}</span>원
                    </p>
                  </div>
                  <div className="delete-btn-wrap">
                    <button type="button" onClick={() => clickDelteBtn(product.id)}>
                      x
                    </button>
                  </div>
                </div>

                {/* 카트 상품 가격 표시 콘테이너 */}
                <div className="cart-item-price-wrap">
                  <p>
                    상품<span>{product.price.toLocaleString()}</span>원 총 가격 :<span className="price">{product.price.toLocaleString()}</span>원
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </form>
    </MyPageContainer>
  );
}
