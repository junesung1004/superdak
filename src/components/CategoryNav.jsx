import { FaBars } from "react-icons/fa";
import { CategoryNavContainer } from "./CategoryNavStyle";

export default function CategoryNav() {
  return (
    <CategoryNavContainer>
      <nav className="category-nav-wrap">
        <ul className="category-wrap">
          <li className="category-mainmenu">
            <FaBars />
            <p>카테고리</p>
            <ul className="category-submenu">
              <li>서브메뉴</li>
              <li>서브메뉴</li>
              <li>서브메뉴</li>
              <li>서브메뉴</li>
            </ul>
          </li>

          <li>NEW</li>
          <li>BEST</li>
          <li>닭가슴살</li>
          <li>보충제</li>
          <li>도시락, 볶음밥</li>
          <li>간편분식</li>
        </ul>
      </nav>
    </CategoryNavContainer>
  );
}
