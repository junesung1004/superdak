import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { ContentWrap, ButtonWrap, JoinContainer } from "./JoinPageStyle";
import { database, joinEmail } from "../api/api";
import { get, ref as databaseRef } from "firebase/database";

export default function JoinPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [name, setName] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPwValid, setConfirmPwValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);

  const [notAllow, setNotAllow] = useState(true);
  const [notCheckAllow, setCheckNotAllow] = useState(true);

  // 이메일 인풋창 이벤트
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    //console.log("email : ", e.target.value)

    //이메일 정규 표현식 (유효성 검사 코드 = validation)
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  // 비밀번호 인풋창 이벤트
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    //console.log("password : ", e.target.value)

    //비밀번호 정규 표현식 (유효성 검사 코드 = validation)
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  // 비밀번호 재입력 확인 인풋창 이벤트
  const handleConfirmPassword = (e) => {
    const confirmPwValue = e.target.value;
    // console.log('confirmPwValue : ', confirmPwValue)
    setConfirmPw(confirmPwValue);
    //비밀번호 재입력 validation (유효성 검사 코드)
    if (password === confirmPwValue) {
      setConfirmPwValid(true);
    } else {
      setConfirmPwValid(false);
    }
  };

  // 이름 인풋창 이벤트
  const handleNameChange = (e) => {
    setName(e.target.value);
    //console.log("email : ", e.target.value)

    //이름 정규 표현식 (유효성 검사 코드 = validation)
    const regex = /^[가-힣]+$/;
    if (regex.test(name)) {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

  const handleJoinEvent = async (e) => {
    e.preventDefault();
    try {
      const userData = await joinEmail(email, password, name);
      console.log("userData 로그인페이지: ", userData);
      alert("회원가입에 성공하였습니다.");
      navigate("/login");
    } catch (err) {
      console.error("회원가입 에러 : ", err);
      if (err.code === "auth/email-already-in-use") {
        alert("이미 사용 중인 이메일입니다. 다른 이메일을 사용해주세요.");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    }
  };

  // const clickCheckEmail = async () => {
  //   try {
  //     const snapshot = await get();
  //   } catch (err) {
  //     console.error("이메일 중복 체크 기능 에러 : ", err);
  //   }
  // };

  // //중복된 이메일 체크버튼 disabled 활성화 조건
  // useEffect(() => {
  //   if (emailValid) {
  //     setCheckNotAllow(false);
  //     return;
  //   }
  //   setCheckNotAllow(true);
  // }, [emailValid]);

  //emailvalid 와 passwordvalid가 마운트될때 버튼 활성화
  useEffect(() => {
    if (passwordValid && confirmPwValid && nameValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [passwordValid, confirmPwValid, nameValid]);

  return (
    <JoinContainer>
      <div className="title-wrap">
        <h1>회원가입</h1>
        <p>회원이 되어 다양한 혜택을 경험해 보세요!</p>
      </div>

      <ContentWrap>
        {/* 이메일 입력창 */}
        <div className="input-title">
          <label htmlFor="email">이메일 주소</label>
          <div className="input-wrap">
            <FaUser />
            <input
              id={"email"}
              type="text"
              name="email"
              placeholder="test@gmail.com"
              value={email}
              onChange={handleEmailChange}
            />
            {/* <button
              className="check-btn"
              type="button"
              disabled={notCheckAllow}
              onClick={clickCheckEmail}
            >
              중복확인
            </button> */}
          </div>
        </div>
        <div className="error-message-wrap">
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>

        {/* 비밀번호 입력창 */}
        <div className="input-title">
          <label htmlFor="password">비밀번호</label>
          <div className="input-wrap">
            <RiLockPasswordLine />
            <input
              id={"password"}
              type="password"
              name="password"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="error-message-wrap">
          {!passwordValid && password.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </div>

        {/* 비밀번호 재입력 확인창 */}
        <div className="input-title">
          <label htmlFor="confirmPw">비밀번호 확인</label>
          <div className="input-wrap">
            <RiLockPasswordLine />
            <input
              id={"confirmPw"}
              type="password"
              name="confirmPw"
              placeholder="비밀번호를 한번더 입력해주세요."
              value={confirmPw}
              onChange={handleConfirmPassword}
            />
          </div>
        </div>
        <div className="error-message-wrap">
          {!confirmPwValid && confirmPw.length > 0 && (
            <div>비밀번호가 일치하지 않습니다.</div>
          )}
        </div>

        {/* 이름 입력창 */}
        <div className="input-title">
          <label htmlFor="name">이름</label>
          <div className="input-wrap">
            <FaUser />
            <input
              id={"name"}
              type="text"
              name="name"
              placeholder="이름을 입력해주세요."
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
        <div className="error-message-wrap">
          {!nameValid && name.length > 0 && <div>이름을 입력해주세요.</div>}
        </div>

        {/* 이메일, 비밀번호, 닉네임 입력 후 활성화 되는 버튼 */}
        <ButtonWrap>
          <button
            type="button"
            disabled={notAllow}
            className="join-button"
            onClick={handleJoinEvent}
          >
            가입하기
          </button>

          <button type="button" className="cancle-button">
            <Link to={"/"}>취소하기</Link>
          </button>
        </ButtonWrap>
      </ContentWrap>
    </JoinContainer>
  );
}
