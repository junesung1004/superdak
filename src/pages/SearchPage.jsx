import React, { useEffect, useState } from "react";
import { SearchPageContainer } from "./SearchPageStyle";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useLocation } from "react-router-dom";

export default function SearchPage() {
  const [searchItems, SetSearchItems] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fatchSearchResult = async () => {
      const queryParams = new URLSearchParams(location.search);
      console.log("queryParams : ", queryParams);
      //local../search?query="닭가슴살" = location.search 는 "닭가슴살" 을 가져온다.
      const searchItem = queryParams.get("query");
      console.log("searchItem : ", searchItem);

      if (searchItem) {
      }
    };
  });

  return (
    <SearchPageContainer>
      {/* 검색결과 이름 헤더 */}
      <header className="header-container">
        {/* 검색결과 정보 */}
        <div className="search-title-wrap">
          <div className="title-wrap">
            <h1>
              <span>닭가슴살</span> 검색결과
            </h1>
          </div>
          <div className="search-item-info">
            <p>
              전체 <span>50</span>
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
        <article className="search-item-wrap">
          {/* 이미지 틀 */}
          <div className="img-wrap">
            <img src="/cub-1.jpg" alt="상품이미지" />
          </div>

          {/* 상품 정보 */}
          <div className="item-info">
            <h1>[슈퍼닭] 에어치킨</h1>
            <p>소스KIT 추가증정!</p>
            <div className="item-price">
              <p>10%</p>
              <p>
                <span>11250</span>원
              </p>
              <p>12500원</p>
            </div>
            <p>1팩당 : 10% 추가할인!</p>
            <div className="item-review">
              <MdOutlineStarPurple500 />
              <p>4.9(1,523)</p>
            </div>
            <img src="/1.svg" alt="배송이미지" />
          </div>
        </article>
      </section>
    </SearchPageContainer>
  );
}
