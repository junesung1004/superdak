import { Link } from "react-router-dom";
import { HeaderContainer } from "./HeaderStyle";
import LoginInfo from "./LoginInfo";
import SearchBar from "./SearchBar";
import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <HeaderContainer>
      {/* logo nav wrap */}
      <nav className="logo-nav-wrap">
        <ul className="header-container">
          <li>
            <Link to={"/"} className="logo-cont">
              <img src={"/logo.png"} alt="닭 브랜드 로고" />
              <span>SUPERDAK</span>
            </Link>
          </li>

          {/* 검색 서치바 */}
          <SearchBar />

          {/* 로그인 인포 */}
          <LoginInfo />
        </ul>
      </nav>

      {/* category nav wrap */}
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
          <li>HOT</li>
          <li>닭가슴살</li>
          <li>보충제</li>
          <li>도시락, 볶음밥</li>
          <li>간편분식</li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
