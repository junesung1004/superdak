import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCategoryProduct } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function MainCategoryList({ category }) {
  const [products, setProducts] = useState([]);
  console.log("메인 카테고리 products : ", products);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productItem = await getCategoryProduct(category);
        setProducts(productItem);
      } catch (err) {
        console.error("카테고리별 아이템 가져오는 기능 에러 : ", err);
      }
    };
    fetchProducts();
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
            🔥<span>HOT!</span> 맛있고 가성비 좋은 슈퍼닭 모든 아이템 !⭐
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

const MainCategoryListContainer = styled.div``;
