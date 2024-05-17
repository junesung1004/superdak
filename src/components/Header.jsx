import { Link} from "react-router-dom"
import {Nav} from './HeaderStyle'
import LoginInfo from "./LoginInfo"





export default function Header() {

  

  
  return (
    <Nav>
      <ul className="header-container">
        <li>
          <Link to={'/'} className="logo-cont">
            <img src={'logo.png'} alt="닭 브랜드 로고" />
            <span>SUPERDAK</span>
          </Link>
        </li>

        {/* 검색 서치바 */}
        <div><li><input type="text" /></li></div>
        
        {/* 로그인 인포 */}
        <LoginInfo />
      </ul>
    </Nav>
  )
}

