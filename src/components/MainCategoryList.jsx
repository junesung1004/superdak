import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCategoryProduct } from "../api/api";
import { useNavigate } from "react-router-dom";
import { MainCategoryListContainer } from "./MainCategoryListStyle";

export default function MainCategoryList({ category }) {
  const [products, setProducts] = useState([]);
  console.log("메인 카테고리 products : ", products);
  console.log("category : ", category);

  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      const fetchProducts = async () => {
        try {
          const productItem = await getCategoryProduct(category);
          setProducts(productItem);
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
                        <span>{product.price.toLocaleString()}</span>원
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
