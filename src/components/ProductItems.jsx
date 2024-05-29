import { Link, useNavigate } from "react-router-dom";
import { ProductItemsContainer } from "./ProductItemStyle";
import { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function ProductItems() {
  const [products, setProducts] = useState([]);
  console.log("productsitem : ", products);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productItem = await getProducts();
        //console.log("fire base에 등록된 아이템을 get 하는 아이템 : ", productItem);
        setProducts(productItem);
      } catch (err) {
        console.error("상품 받아오는 작업 에러 : ", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <ProductItemsContainer>
        {/* 야이템 틀*/}
        {products.length === 0 ? (
          <p>현재 상품이 없습니다. 상품을 추가해주세요.</p>
        ) : (
          <>
            <h1 className="category-title">
              🔥<span>HOT!</span> 맛있고 가성비 좋은 슈퍼닭 모든 아이템 !⭐
            </h1>
            <section className="search-item-container">
              {products.map((product, idx) => {
                return (
                  <article className="search-item-wrap" key={idx}>
                    {/* 이미지 틀 */}
                    <Link to={`/productlist/${product.id}`}>
                      <div className="img-wrap">
                        <img src={product.image} alt="상품이미지" />
                      </div>

                      {/* 상품 정보 */}
                      <div className="item-info">
                        <h1>[슈퍼닭] 에어치킨</h1>
                        <p>소스KIT 추가증정!</p>
                        <div className="item-price">
                          <p>{product.discountPrice ? "10%" : "0%"}</p>
                          <p>
                            <span>{product.discountPrice ? product.discountPrice : product.price}</span>원
                          </p>
                          <p>{product.price}원</p>
                        </div>
                        <p>1팩당 : 10% 추가할인!</p>
                        <div className="item-review">
                          <MdOutlineStarPurple500 />
                          <p>4.9(1,523)</p>
                        </div>
                        <img src="/1.svg" alt="배송이미지" />
                      </div>
                    </Link>
                  </article>
                );
              })}
            </section>
          </>
        )}
      </ProductItemsContainer>
    </>
  );
}
