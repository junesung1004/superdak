import React, { useEffect, useState } from "react";
import { getCategoryProduct } from "../api/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MainCategoryListContainer } from "./MainCategoryListStyle";
import { MdOutlineStarPurple500 } from "react-icons/md";

export default function MainCategoryList({ category: propsCategory }) {
  const [products, setProducts] = useState([]);

  const { category: paramsCategory } = useParams();
  const category = propsCategory || paramsCategory;
  // console.log("메인 카테고리 products : ", products);
  // console.log("category : ", category);

  // const navigate = useNavigate();

  const categoryContent = [
    "[NEW]신상특가🌟",
    "[판매급증]💓인기상품 📈",
    "[특등 1등급] 세일!! 이벤트!! 닭가슴살~!🔥",
    "[음료보다 맛있다]보충제!!💸",
    "[콜라보]💓슈퍼닭에서 하림과 콜라보 합작품!!?   도시락!🐣",
    "[무조건]두말안한다... 캡숑 맛있는!!  간편분식💪",
  ];

  // 카테고리에 따라 해당하는 카테고리 콘텐츠를 가져오기
  const currentCategoryContent =
    categoryContent[
      category === "NEW" ? 0 : category === "BEST" ? 1 : category === "닭가슴살" ? 2 : category === "보충제" ? 3 : category === "도시락" ? 4 : category === "간편분식" ? 5 : 0
    ];

  useEffect(() => {
    if (category) {
      //console.log(category);
      const fetchProducts = async () => {
        try {
          const productItems = await getCategoryProduct(category);

          const discountProducts = productItems.map((el) => {
            if (category === "닭가슴살") {
              return {
                ...el,
                discountPrice: el.price * 0.9,
              };
            }
            return el;
          });
          // setProducts(productItem);
          setProducts(discountProducts);
        } catch (err) {
          console.error("카테고리별 아이템 가져오는 기능 에러:", err);
        }
      };

      fetchProducts();
    }
  }, [category]);

  return (
    <MainCategoryListContainer>
      {/* 야이템 틀*/}
      {products.length === 0 ? (
        <p>현재 상품이 없습니다. 상품을 추가해주세요.</p>
      ) : (
        <>
          <h1 className="category-title">{currentCategoryContent}</h1>
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
                      <h1>[슈퍼닭] {product.title}</h1>
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
    </MainCategoryListContainer>
  );
}
