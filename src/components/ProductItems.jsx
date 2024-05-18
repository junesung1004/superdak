import { ProductItemsContainer } from "./ProductItemStyle";

export default function ProductItems() {
  return (
    <>
      <ProductItemsContainer>
        <h1 className="category-title">
          🔥<span>HOT!</span> 맛있고 가성비 좋은 슈퍼닭 모든 아이템 !⭐
        </h1>
        {/* 야이템 틀*/}
        <div className="item-container">
          {/* 아이템 */}
          <div className="product-item-wrap">
            <div className="img-wrap">
              <img src="/protein-1.jpg" alt="아이템 상품" />
            </div>
            <div className="item-content">
              <p>팩당 1,650원! 단백질 35g 💪 맛있는 보충제</p>
              <p>슈퍼닭 소화잘되는 근육증가 보충제</p>
              <p>
                <span>25,500</span>원
              </p>
            </div>
          </div>

          {/* 아이템 */}
          <div className="product-item-wrap">
            <div className="img-wrap">
              <img src="/protein-1.jpg" alt="아이템 상품" />
            </div>
            <div className="item-content">
              <p>팩당 1,650원! 단백질 35g 💪 맛있는 보충제</p>
              <p>슈퍼닭 소화잘되는 근육증가 보충제</p>
              <p>
                <span>25,500원</span>
              </p>
            </div>
          </div>

          {/* 아이템 */}
          <div className="product-item-wrap">
            <div className="img-wrap">
              <img src="/protein-1.jpg" alt="아이템 상품" />
            </div>
            <div className="item-content">
              <p>팩당 1,650원! 단백질 35g 💪 맛있는 보충제</p>
              <p>슈퍼닭 소화잘되는 근육증가 보충제</p>
              <p>
                <span>25,500원</span>
              </p>
            </div>
          </div>

          {/* 아이템 */}
          <div className="product-item-wrap">
            <div className="img-wrap">
              <img src="/protein-1.jpg" alt="아이템 상품" />
            </div>
            <div className="item-content">
              <p>팩당 1,650원! 단백질 35g 💪 맛있는 보충제</p>
              <p>슈퍼닭 소화잘되는 근육증가 보충제</p>
              <p>
                <span>25,500</span>원
              </p>
            </div>
          </div>
        </div>
      </ProductItemsContainer>
    </>
  );
}
