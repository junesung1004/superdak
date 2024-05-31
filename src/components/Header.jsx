import { Link } from "react-router-dom";
import { HeaderContainer } from "./HeaderStyle";
import LoginInfo from "./LoginInfo";
import SearchBar from "./SearchBar";
import CategoryNav from "./CategoryNav";

export default function Header() {
  return (
    <HeaderContainer>
      {/* logo nav wrap */}
      <div className="logo-nav-wrap">
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
      </div>

      {/* category nav wrap */}
      <CategoryNav />
    </HeaderContainer>
  );
}
