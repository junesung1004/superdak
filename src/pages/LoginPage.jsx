import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { LoginContainer, ContentWrap, JoinWrap, GoogleLoginButton } from "./LoginPageStyle";
import { googleLogin, loginEmail } from "../api/api";
import { useUserState } from "../recoil/authLoginAtom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [notAllow, setNotAllow] = useState(true);

  //리코일 로그인 전역상태 관리 코드
  const [user, setUser] = useUserState();
  console.log("user : ", user);

  // 이메일 입력창
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    //console.log("email : ", e.target.value)

    //이메일 정규 표현식 (유효성 검사 코드 = validation)
    const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  // 비밀번호 입력창
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    //console.log("password : ", e.target.value)

    //비밀번호 정규 표현식 (유효성 검사 코드 = validation)
    const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  // 이메일, 비밀번호 입력 후 로그인 로직
  const handleLoginEvent = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginEmail(email, password);
      console.log("userData :", userData);
      if (userData) {
        alert("로그인에 성공했습니다.");
        //sessionStorage.setItem("userData", userData);
        setUser(userData);
        console.log("로그인 유저 : ", userData);
        navigate("/");
      } else {
        alert("아이디 또는 비밀번호가 잘못되었습니다.");
      }
    } catch (err) {
      // Firebase가 반환하는 에러코드를 확인하여 이미 가입된 이메일인지 확인할 수 있습니다.
      if (err.code === "auth/user-not-found") {
        alert("가입되지 않은 이메일입니다.");
      } else {
        console.error("로그인 에러 : ", err);
      }
    }
  };

  // 구글 로그인
  const googleLoginEvent = async () => {
    try {
      const userData = await googleLogin();
      if (userData) {
        alert("구글 로그인에 성공했습니다.");
        setUser(userData);
        console.log("로그인 유저 : ", userData);
        //sessionStorage.setItem("userData", userData);
        navigate("/");
      }
    } catch (err) {
      console.error("구글 로그인 에러 : ", err);
    }
  };

  //emailvalid 와 passwordvalid가 마운트될때 버튼 활성화
  useEffect(() => {
    if (emailValid && passwordValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, passwordValid]);

  return (
    <LoginContainer>
      <div className="title-wrap">회원 로그인</div>

      <ContentWrap>
        {/* 이메일 입력창 */}
        <div className="input-title">
          <label htmlFor="email">이메일 주소</label>
          <div className="input-wrap">
            <FaUser />
            <input id={"email"} type="text" name="email" placeholder="test@gmail.com" value={email} onChange={handleEmailChange} />
          </div>
        </div>
        <div className="error-message-wrap">{!emailValid && email.length > 0 && <div>올바른 이메일을 입력해주세요.</div>}</div>

        {/* 비밀번호 입력창 */}
        <div className="input-title">
          <label htmlFor="password">비밀번호</label>
          <div className="input-wrap">
            <RiLockPasswordLine />
            <input id={"password"} type="password" name="password" placeholder="영문, 숫자, 특수문자 포함 8자 이상" value={password} onChange={handlePasswordChange} />
          </div>
        </div>
        <div className="error-message-wrap">{!passwordValid && password.length > 0 && <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>}</div>

        {/* 이메일, 비밀번호 입력 후 활성화 되는 버튼 */}
        <div>
          <button type="button" disabled={notAllow} onClick={handleLoginEvent} className="button">
            로그인
          </button>
        </div>
      </ContentWrap>
      <GoogleLoginButton>
        <img src="google.png" alt="구글 로그인 버튼" onClick={googleLoginEvent} />
      </GoogleLoginButton>
      <JoinWrap>
        <span>계정이 없으신가요?</span>
        <Link to={"/join"}>
          <span className="join">회원가입</span>
        </Link>
      </JoinWrap>
    </LoginContainer>
  );
}
