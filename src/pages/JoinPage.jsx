
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";



export default function JoinPage() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPw, setConfirmPw] = useState('')

  const [emailValid, setEmailValid] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)
  const [confirmPwValid, setConfirmPwValid] = useState(false)

  

  const [notAllow, setNotAllow] = useState(true)

  // 이메일 인풋창 이벤트
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    //console.log("email : ", e.target.value)

    //이메일 정규 표현식 (유효성 검사 코드 = validation)
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if(regex.test(email)) {
        setEmailValid(true)
      } else {
        setEmailValid(false)
      }
  }

  // 비밀번호 인풋창 이벤트
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    //console.log("password : ", e.target.value)

    //비밀번호 정규 표현식 (유효성 검사 코드 = validation)
    const regex =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }

  // 비밀번호 재입력 확인 인풋창 이벤트
  const handleConfirmPassword = (e) => {
    const confirmPwValue = e.target.value
    // console.log('confirmPwValue : ', confirmPwValue)
    setConfirmPw(confirmPwValue)
    //비밀번호 재입력 validation (유효성 검사 코드)
    if(password === confirmPwValue) {
      setConfirmPwValid(true)
    } else {
      setConfirmPwValid(false)
    }
  }

  
  const handleJoinEvent = (e) => {
    e.preventDefault();
    alert('회원가입에 성공했습니다.')
    navigate('/')
  }

  //emailvalid 와 passwordvalid가 마운트될때 버튼 활성화
  useEffect(()=> {
    if(emailValid && passwordValid && confirmPwValid) {
      setNotAllow(false)
      return
    }
    setNotAllow(true)
  },[emailValid, passwordValid, confirmPwValid])

  return (
    <LoginContainer>
      <div className="titleWrap">
        <h1>회원가입</h1>
        <p>회원이 되어 다양한 혜택을 경험해 보세요!</p>
      </div>

      <ContentWrap>
        {/* 이메일 입력창 */}
          <div className="inputTitle">
            <label htmlFor="email">이메일 주소</label>
            <div className='inputWrap'>
            <FaUser />
            <input id={'email'} 
            type="text" 
            name="email" 
            placeholder="test@gmail.com"
            value={email}
            onChange={handleEmailChange}
            />
            </div>
          </div>
        <div className="errorMessageWrap">
          {
            !emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )
          }
        </div>

        {/* 비밀번호 입력창 */}
        <div className="inputTitle">
        
          <label htmlFor="password">비밀번호</label>
          <div className='inputWrap'>
          <RiLockPasswordLine />
          <input id={'password'} 
          type="password" name="password" 
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          value={password}
          onChange={handlePasswordChange}
          />
          </div>
        </div>
        <div className="errorMessageWrap">
          {
            !passwordValid && password.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )
          }
        </div>

        {/* 비밀번호 재입력 확인창 */}
        <div className="inputTitle">
        
          <label htmlFor="confirmPw">비밀번호 확인</label>
          <div className='inputWrap'>
          <RiLockPasswordLine />
          <input id={'confirmPw'} 
          type="password" name="confirmPw" 
          placeholder="비밀번호를 한번더 입력해주세요."
          value={confirmPw}
          onChange={handleConfirmPassword}
          />
          </div>
        </div>
        <div className="errorMessageWrap">
          {
            !confirmPwValid && confirmPw.length > 0 && (
              <div>비밀번호가 일치하지 않습니다.</div>
            )
          }
        </div>
        
        {/* 이메일, 비밀번호 입력 후 활성화 되는 버튼 */}
        <ButtonWrap>
          <button type='button' 
          disabled={notAllow}
          className='joinButton'
          onClick={handleJoinEvent}
          >
            가입하기</button>

        <button type='button' 
          disabled={notAllow}
          className='cancleButton'
          >
            <Link to={'/login'}>
            취소하기
            </Link>
          </button>
        </ButtonWrap>
      </ContentWrap>
      
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  display:flex;
  flex-direction:column;
  gap:30px;
  width:100%;
  max-width:400px;
  margin: auto;
  overflow: hidden;
  padding: 10px;
  .titleWrap {
  margin-top: 50px;
  color: #262626;
  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom:10px;
  }
  p {
    font-size: 0.8rem
  }
}
`

const ContentWrap = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .inputTitle {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    label {
      cursor: pointer;
      font-size: 1rem;
      font-weight: 400;
    }
    .inputWrap {
      display: flex;
      align-items: center;
      gap: 15px;
      border-radius: 8px;
      padding: 10px;
      border: 1px solid #e2e0e0;
      height: 60px;
      padding-left: 30px;
      svg {
        width: 1.2rem;
        height: 1.2rem;
      }
      .checkBtn {
        cursor: pointer;
        width: 150px;
        border: none;
        padding: 8px;
        background-color:rgb(108, 175, 234);
        color: white;
        font-weight: bold;
        border-radius: 8px;
      }
      input {
        width: 100%;
        outline: none;
        border: none;
        height: 1rem;
        font-size: 0.9rem;
        font-weight: 400;
      &::placeholder {
        color: #dadada;
        }
      }
      &:focus-within {
        border: 1px solid #9e30f4;
      }
    }
  
  }
  .errorMessageWrap {
    color: #ef0000;

  }
  
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
button {
    cursor: pointer;
    width: 150px;
    height: 48px;
    border: none;
    font-weight: 700;
    background-color: rgba(104, 228, 226, 0.6);
    border-radius: 8px;
    color: black;
  }
  .joinButton:disabled {
    background-color: #dadada;
    color: white;
  }
`