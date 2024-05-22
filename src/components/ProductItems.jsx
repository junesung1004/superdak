import { Link, useNavigate } from "react-router-dom";
import { ProductItemsContainer } from "./ProductItemStyle";
import { useEffect, useState } from "react";
import { getProducts } from "../api/api";

export default function ProductItems() {
  const [products, setProducts] = useState([]);
  //console.log("products : ", products);

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

  // const data = {
  //   id: products.id,
  //   title: products.title,
  //   price: products.price,
  //   description: products.description,
  //   image: products.image,
  // };

  const goToEvent = () => {
    navigate(`/productlist/${products.id}`, {
      state: {
        id: products.id,
        title: products.title,
        price: products.price,
        description: products.description,
        image: products.image,
      },
    });
  };

  return (
    <>
      <ProductItemsContainer>
        <h1 className="category-title">
          🔥<span>HOT!</span> 맛있고 가성비 좋은 슈퍼닭 모든 아이템 !⭐
        </h1>
        {/* 야이템 틀*/}
        {products.length === 0 ? (
          <p>현재 상품이 없습니다. 상품을 추가해주세요.</p>
        ) : (
          <>
            <div className="item-container">
              {products.map((product, idx) => {
                return (
                  <div to={`/productlist/${product.id}`} key={idx} onClick={goToEvent}>
                    <div className="product-item-wrap">
                      <div className="img-wrap">
                        <img src={product.image} alt="아이템 상품" />
                      </div>
                      <div className="item-content">
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                        <p>
                          <span>{product.price}</span>원
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </ProductItemsContainer>
    </>
  );
}
