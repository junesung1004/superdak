import { useEffect, useState } from "react";
import { CartPageContainer } from "./CartPageStyle";
import { deleteCart, getCart, uploadMyPage } from "../api/api";
import { useUserState } from "../recoil/authLoginAtom";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

export default function CartPage() {
  const [products, setProducts] = useState([]);
  const [user] = useUserState();
  console.log("카트 페이지 products : ", products);
  //console.log("카트페이지 user : ", user);

  // 유저가 있으면 user.uid를 가져오고 없으면 null 로 비워둬서 에러를 방지
  const uid = user ? user.uid : null;
  //console.log("uid : ", uid);

  //선택된 제품의 갯수를 변수에 담아서 활용하는 코드
  const [selectProducts, setSelectProducts] = useState([]);
  console.log("selectProducts :", selectProducts);

  const navigate = useNavigate();

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

  const clickDeleteBtn = async (productId) => {
    console.log("버튼을 눌렀습니다.!");
    try {
      if (!selectProducts) {
        alert("선택한 상품이 없습니다.");
      } else {
        await deleteCart(uid, productId);
        setProducts((prev) => prev.filter((product) => product.id !== productId));
      }
    } catch (err) {
      console.error("장바구니 삭제기능 에러 :", err);
    }
  };

  const handleSelectCheck = (productId) => {
    //console.log("productId : ", productId);
    setSelectProducts((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]));
  };

  const handleSelectDelete = async () => {
    console.log(selectProducts);
    console.log(setSelectProducts);
    try {
      await Promise.all(selectProducts.map((productId) => deleteCart(uid, productId)));
      //setProducts((prev) => prev.filter((product) => !selectProducts.includes(products.id)));
      const updateProducts = products.filter((product) => !selectProducts.includes(product.id));
      setProducts(updateProducts);
      setSelectProducts([]);
    } catch (err) {
      console.error("삭제 기능 에러 : ", err);
    }
  };

  //장바구니 아이템 선택 후 선택상품 주문 버튼 클릭 이벤트
  const handleSelectBuy = async () => {
    try {
      if (selectProducts.length < 1) {
        alert("주문하실 상품을 선택해주세요.");
        return;
      } else {
        // 선택한 상품들의 아이디를 이용하여 주문 처리
        await Promise.all(
          selectProducts.map((productId) =>
            uploadMyPage(
              uid,
              productId,
              products.find((product) => product.id === productId)
            )
          )
        );
        alert("상품을 주문해주셔서 감사합니다. 총알배송으로 찾아가겠습니다.");
        // 주문한 상품들을 장바구니에서 삭제
        await Promise.all(selectProducts.map((productId) => deleteCart(uid, productId)));
        // 주문 후에 상품 목록을 업데이트
        const updateProducts = products.filter((product) => !selectProducts.includes(product.id));
        setProducts(updateProducts);
        setSelectProducts([]);
        navigate("/mypage");
      }
    } catch (err) {
      console.error("장바구니 구매 기능 에러 : ", err);
    }
  };

  const checkedAllEvent = () => {
    //선택된 체크박스의 갯수와 상품 아이템의 갯수가 같을때 속성을 바꿔준다.
    if (selectProducts.length === products.length) {
      setSelectProducts([]);
    } else {
      setSelectProducts(products.map((product) => product.id));
    }
  };

  //상품 갯수 추가 * 빼기
  const clickPlusEvent = (productId, productQuantity, productSelected) => {
    console.log("버튼이 동작되나?");

    if (productSelected > productQuantity - 1) {
      alert("등록된 아이템의 수량을 초과하였습니다.");
    } else {
      setProducts((prevProducts) => prevProducts.map((product) => (product.id === productId ? { ...product, selected: product.selected + 1 } : product)));
    }
    // products.map((product) => {
    //   console.log("click plus : ", product);
    //   if (product.id === productId) setProducts((prev) => prev + 1);
    // });
  };

  const clickMinusEvent = (productId) => {
    setProducts((prevProducts) => prevProducts.map((product) => (product.id === productId ? { ...product, selected: product.selected - 1 } : product)));
  };

  return (
    <CartPageContainer>
      <h1>장바구니</h1>
      <div>
        <form>
          {/* 전체 체크박스 및 선택삭제 버튼*/}
          <div className="all-check-wrap">
            <div className="all-check">
              <input type="checkbox" id="all" onChange={checkedAllEvent} checked={selectProducts.length === products.length} />
              <label htmlFor="all">전체 선택</label>
            </div>
            <div className="btn-wrap">
              <button type="button" onClick={handleSelectBuy}>
                선택상품 주문
              </button>
              <button type="button" onClick={handleSelectDelete}>
                선택삭제
              </button>
            </div>
          </div>

          {/* 장바구니 아이템 콘테이너 */}
          <div className="cart-wrap">
            {/* 슈퍼닭 분류 로고 */}
            <div className="logo-wrap">
              <div className="all-check">
                <input type="checkbox" id="all" onChange={checkedAllEvent} checked={selectProducts.length === products.length} />
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
                        <input type="checkbox" checked={selectProducts.includes(product.id)} onChange={() => handleSelectCheck(product.id)} />
                      </div>
                      <div className="cart-img-wrap">
                        <img src={product.image} alt={product.title} />
                      </div>
                      <div className="cart-item-content-wrap">
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                        <p>
                          <span>{(product.price * product.selected).toLocaleString()}</span>원
                        </p>
                      </div>
                      <div className="cart-item-count-wrap">
                        <button type="button" onClick={() => clickMinusEvent(product.id)} disabled={product.selected <= 1}>
                          -
                        </button>
                        <div>{product.selected}</div>
                        <button type="button" onClick={() => clickPlusEvent(product.id, product.quantity, product.selected)}>
                          +
                        </button>
                      </div>
                      <div className="cart-item-price-wrap">
                        <p>
                          <span>{(product.price * product.selected).toLocaleString()}</span>원
                        </p>
                      </div>
                      <div className="delete-btn-wrap">
                        <button type="button" onClick={() => clickDeleteBtn(product.id)}>
                          x
                        </button>
                      </div>
                    </div>

                    {/* 카트 상품 가격 표시 콘테이너 */}
                    <div className="cart-item-price-wrap">
                      <p>
                        상품<span>{(product.price * product.selected).toLocaleString()}</span>원 총 가격 :{" "}
                        <span className="price">{(product.price * product.selected).toLocaleString()}</span>원
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
