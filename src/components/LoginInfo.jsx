import { BiCart } from "react-icons/bi";
import { Nav } from "./HeaderStyle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { logOut, onUserLoginState } from "../api/api";
import { FaUserCircle } from "react-icons/fa";
import { UserInfoContainer } from './LoginInfoStyle'


export default function LoginInfo() {

  const [user, setUser] = useState(null)
  
  useEffect(()=> {
    onUserLoginState((user)=>{
      setUser(user)
    })
  })

  const clickLogoutEvent = async() => {
    alert('로그아웃 되었습니다.')
    await logOut()
    setUser(null)
  }

  return (
    <>
      <UserInfoContainer>
            <li className="user-logo">
                <FaUserCircle />
              <ul className="sub-menu" >
                  {user && user.isAdmin && 
                  <div>관리자 업로드</div>
                  }
                  
                  {
                    user ? (
                      <>
                        <div>
                          <li onClick={clickLogoutEvent}>로그아웃</li>
                        </div>
                        <div>
                          <Link to={'/join'}><li>마이페이지</li></Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <Link to={'/login'}><li>로그인</li></Link>
                        </div>
                        <div>
                          <Link to={'/join'}><li>회원가입</li></Link>
                        </div>
                      </>
                    )
                  }
              </ul>
            </li>
          
            <li className="user-logo">
              <Nav>
                <BiCart />
              </Nav>
            </li>
        </UserInfoContainer>
    </>
  )
}
