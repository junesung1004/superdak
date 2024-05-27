import { CategoryLogoListContainer } from "./CategoryLogoListStyle";

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
            <img src="/protein-logo.png" alt="카테고리 이미지" />
          </li>
          <p>보충제</p>
        </div>

        <div className="logo-cont">
          <li>
            <img src="/rice-logo.png" alt="카테고리 이미지" />
          </li>
          <p>도시락</p>
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
