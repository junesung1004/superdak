import React, { useEffect, useState } from "react";
import { getCategoryProduct } from "../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { MainCategoryListContainer } from "./MainCategoryListStyle";

export default function MainCategoryList({ category: propsCategory }) {
  const [products, setProducts] = useState([]);

  const { category: paramsCategory } = useParams();
  const category = propsCategory || paramsCategory;
  // console.log("메인 카테고리 products : ", products);
  // console.log("category : ", category);

  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      console.log(category);
      const fetchProducts = async () => {
        try {
          const productItem = await getCategoryProduct(category);
          // const discountProduct = productItem.map((el)=> {
          //   return (
          //     ...el,
          //     discountPrice : el.price * 0.9
          //   )
          // })

          const discountProducts = productItem.map((el) => {
            if (category === "BEST") {
              return {
                ...el,
                discountPrice: el.price * 0.9,
              };
            }
            return el;
          });
          setProducts(productItem);
          // setProducts(discountProducts);
        } catch (err) {
          console.error("카테고리별 아이템 가져오는 기능 에러:", err);
        }
      };

      fetchProducts();
    }
  }, [category]);

  const goToEvent = (product) => {
    navigate(`/productlist/${product.id}`);
  };

  return (
    <MainCategoryListContainer>
      {/* 야이템 틀*/}
      {products.length === 0 ? (
        <p>현재 상품이 없습니다. 상품을 추가해주세요.</p>
      ) : (
        <>
          <h1 className="category-title">
            🔥핫하다~! 슈퍼닭에서만 주어지는 상품은 바로! <span>{category}</span> ⭐
          </h1>
          <div className="item-container">
            {products.map((product, idx) => {
              return (
                <div key={idx} onClick={() => goToEvent(product)}>
                  <div className="product-item-wrap">
                    <div className="img-wrap">
                      <img src={product.image} alt="아이템 상품" />
                    </div>
                    <div className="item-content">
                      <p>{product.title}</p>
                      <p>{product.description}</p>
                      <p>
                        <span>{product.discountPrice ? product.discountPrice.toLocaleString() : product.price.toLocaleString()}</span>원
                        {/* <span>{product.discountPrice.toLocaleString()}</span>원 */}
                        {product.discountPrice && <span>{product.price.toLocaleString()}원</span>}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </MainCategoryListContainer>
  );
}
