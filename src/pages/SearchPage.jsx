import { useEffect, useState } from "react";
import { SearchPageContainer } from "./SearchPageStyle";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { getSearchProducts } from "../api/api";

export default function SearchPage() {
  const [searchItems, SetSearchItems] = useState([]);
  console.log("searchItems : ", searchItems);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  console.log("queryParams : ", queryParams);
  const searchItem = queryParams.get("query");
  console.log("searchItem : ", searchItem);

  useEffect(() => {
    const fatchSearchResult = async () => {
      try {
        if (searchItem) {
          const searchProducts = await getSearchProducts(searchItem);

          //왜 안될까..
          const discountProducts = searchProducts.map((el) => {
            if (el.category === "닭가슴살") {
              return {
                ...el,
                discountPrice: el.price * 0.9,
              };
            }
            return el;
          });

          SetSearchItems(discountProducts);
        }
      } catch (err) {
        console.error("검색데이터 기반 정보 가져오는 기능 에러 : ", err);
      }
    };
    fatchSearchResult();
  }, [location.search]);

  return (
    <SearchPageContainer>
      {/* 검색결과 이름 헤더 */}
      <header className="header-container">
        {/* 검색결과 정보 */}
        <div className="search-title-wrap">
          <div className="title-wrap">
            <h1>
              <span>{searchItem}</span> 검색결과
            </h1>
          </div>
          <div className="search-item-info">
            <p>
              전체 <span>{searchItems.length}</span>
            </p>
          </div>
        </div>

        {/* 연관검색어 텍스트 */}
        <div className="text-wrap">
          <ul className="text-list-wrap">
            <li>연관검색어</li>
            <li>꼬기닭</li>
            <li>특가</li>
            <li>맛있는 닭가슴살 스테이크</li>
            <li> 햇살닭</li>
            <li>허닭 그릴드 한입 닭다리 구이</li>
            <li>푸라닭</li>
            <li>인생 닭다리살</li>
          </ul>
        </div>

        <div className="item-delivery-wrap">
          <div className="text-wrap">
            <p>배송종류</p>
            <IoIosArrowDown />
          </div>
          <div className="text-wrap">
            <p>카테고리</p>
            <IoIosArrowDown />
          </div>
          <div className="text-wrap">
            <p>중량</p>
            <IoIosArrowDown />
          </div>
          <div className="text-wrap">
            <p>혜택</p>
            <IoIosArrowDown />
          </div>
          <div className="text-wrap">
            <p>브랜드</p>
            <IoIosArrowDown />
          </div>
        </div>
      </header>

      {/* 검색 결과 아이템 */}
      <section className="search-item-container">
        {searchItems.map((product, idx) => {
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
                      <span>
                        {product.discountPrice
                          ? product.discountPrice
                          : product.price}
                      </span>
                      원
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
    </SearchPageContainer>
  );
}
