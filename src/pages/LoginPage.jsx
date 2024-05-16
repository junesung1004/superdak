

import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import {LoginContainer, ContentWrap, JoinWrap} from './LoginPageStyle'

//더미데이터
const User = {
  email: 'test@gmail.com',
  password : 'qwer1234!!'
}


export default function LoginPage() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailValid, setEmailValid]= useState(false)
  const [passwordValid, setPasswordValid]= useState(false)

  const [notAllow, setNotAllow] = useState(true)

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

  const handleLoginEvent = (e) => {
    e.preventDefault();
    if(email === User.email && password === User.password) {
      alert('로그인에 성공했습니다.')
      navigate('/')
    } else {
      alert('등록되지 않은 회원입니다.')
    }
  }

  //emailvalid 와 passwordvalid가 마운트될때 버튼 활성화
  useEffect(()=> {
    if(emailValid && passwordValid) {
      setNotAllow(false)
      return
    }
    setNotAllow(true)
  },[emailValid, passwordValid])

  const go = () => {

  }

  return (
    <LoginContainer>
      <div className="title-wrap">
        회원 로그인
      </div>

      <ContentWrap onSubmit={go}>
        {/* 이메일 입력창 */}
          <div className="input-title">
            <label htmlFor="email">이메일 주소</label>
            <div className='input-wrap'>
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
        <div className="error-message-wrap">
          {
            !emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )
          }
        </div>

        {/* 비밀번호 입력창 */}
        <div className="input-title">
        
          <label htmlFor="password">비밀번호</label>
          <div className='input-wrap'>
          <RiLockPasswordLine />
          <input id={'password'} 
          type="password" name="password" 
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          value={password}
          onChange={handlePasswordChange}
          />
          </div>
        </div>
        <div className="error-message-wrap">
          {
            !passwordValid && password.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )
          }
        </div>
        
        {/* 이메일, 비밀번호 입력 후 활성화 되는 버튼 */}
        <div>
          <button type='button' 
          disabled={notAllow}
          onClick={handleLoginEvent}
          className='button'
          >
            로그인</button>
        </div>
      </ContentWrap>
      <JoinWrap>
        <span>계정이 없으신가요?</span>
        <Link to={'/join'}><span className='join'>회원가입</span></Link>
        
      </JoinWrap>
    </LoginContainer>
  )
}