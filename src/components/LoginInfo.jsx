import { BiCart } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logOut, onUserLoginState } from "../api/api";
import { FaUserCircle } from "react-icons/fa";
import { UserInfoContainer } from "./LoginInfoStyle";
import { useUserState } from "../recoil/authLoginAtom";

export default function LoginInfo() {
  const [user, setUser] = useUserState();
  console.log("user : ", user);

  const [showSubMenu, setShowSubMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //로그인 상태 확인 및 유저 정보 설정
    onUserLoginState((user) => {
      //console.log("User state updated:", user)
      setUser(user);
    });
  }, []);

  //관리자 계정으로 접속했을때 콘솔 찍어보는 코드
  useEffect(() => {
    if (user && user.isAdmin) {
      const timer = setTimeout(() => {
        console.log("Admin user : ", user);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [user]); // user가 변경될 때마다 실행

  //로그아웃 로직
  const clickLogoutEvent = async () => {
    try {
      setUser(null);
      await logOut();
      alert("로그아웃 되었습니다.");
      navigate("/");
    } catch (err) {
      console.error("로그아웃 기능 에러 : ", err);
    }
  };

  //모바일에서 손으로 조작을 할시 호버는 안되니 클릭 이벤트 추가!
  // const clickShowEvent = () => {
  //   setShowSubMenu((prev) => !prev);
  // };

  //로그인 상태 유무에 따라서 서로 다른 기능을 구현하는 로직
  const goToCartPage = () => {
    if (user) {
      navigate("/cart");
    } else {
      alert("로그인 유저를 위한 기능입니다.");
      navigate("/login");
    }
  };

  return (
    <>
      <UserInfoContainer>
        <li className="user-logo">
          <FaUserCircle />
          {user ? <p>{user.displayName}님</p> : <p>로그인</p>}
          <ul className={`sub-menu ${showSubMenu ? "visible" : ""}`}>
            {user && user.isAdmin && (
              <>
                <Link to={"/upload"}>
                  <div>관리자 업로드</div>
                </Link>
              </>
            )}

            {user ? (
              <>
                <div>
                  <li onClick={clickLogoutEvent}>로그아웃</li>
                </div>
                <div>
                  <Link to={"/mypage"}>
                    <li>마이페이지</li>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Link to={"/login"}>
                    <li>로그인</li>
                  </Link>
                </div>
                <div>
                  <Link to={"/join"}>
                    <li>회원가입</li>
                  </Link>
                </div>
              </>
            )}
          </ul>
        </li>

        <li className="user-logo">
          <div>
            <button onClick={goToCartPage}>
              <BiCart />
              <p>장바구니</p>
            </button>
          </div>
        </li>
      </UserInfoContainer>
    </>
  );
}
