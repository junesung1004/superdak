import { Link, NavLink } from "react-router-dom"
import { FaUserCircle } from "react-icons/fa";
import { BiCart  } from "react-icons/bi";
import {Nav} from './HeaderStyle'




export default function Header() {

  const getLinkStyle = ({isActive}) => {
    return {
      borderBottom : isActive ? '3px solid pink' : 'none',
    }
  }
  
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
        
        <div className="header-user-logo">
            <li className="user-logo">
                <FaUserCircle />
              <ul className="sub-menu" >
                <div>
                <Link to={'/login'}><li>로그인</li></Link>
                </div>
                <div>
                <Link to={'/join'}><li>회원가입</li></Link>
                </div>
              </ul>
            </li>
          
            <li className="user-logo">
              <NavLink to={'/cart'} style={getLinkStyle}>
                <BiCart />
              </NavLink>
            </li>
        </div>
      </ul>
    </Nav>
  )
}

