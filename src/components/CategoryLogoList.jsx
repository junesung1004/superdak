import styled from "styled-components";

export default function CategoryLogoList() {
  return (
    <CategoryLogoListContainer>
      <ul className="catagory-logo-wrap">
        <div className="logo-cont">
          <li>
            <img src="/new.png" alt="카테고리 이미지" />
          </li>
          <p>NEW</p>
        </div>

        <div className="logo-cont">
          <li>
            <img src="/best.png" alt="카테고리 이미지" />
          </li>
          <p>BEST</p>
        </div>

        <div className="logo-cont">
          <li>
            <img src="/dak-logo.png" alt="카테고리 이미지" />
          </li>
          <p>닭가슴살</p>
        </div>

        <div className="logo-cont">
          <li>
            <img src="/rice-logo.png" alt="카테고리 이미지" />
          </li>
          <p>도시락, 볶음밥</p>
        </div>

        <div className="logo-cont">
          <li>
            <img src="/snak.png" alt="카테고리 이미지" />
          </li>
          <p>간편 분식</p>
        </div>
      </ul>
    </CategoryLogoListContainer>
  );
}

const CategoryLogoListContainer = styled.div`
  .catagory-logo-wrap {
    padding: 60px;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    .logo-cont {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      li {
        cursor: pointer;
        background-color: #f7f7f7;
        padding: 20px;
        border-radius: 30px;
      }
    }
  }
`;
