import styled from "styled-components"

export const LoginContainer = styled.div`
  display:flex;
  flex-direction:column;
  gap:30px;
  width:100%;
  max-width:400px;
  margin: auto;
  overflow: hidden;
  padding: 10px;
  .title-wrap {
  text-align: center;
  margin-top: 50px;
  font-size: 2rem;
  font-weight: 700;
  color: #262626;
}
`

export const ContentWrap = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .input-title {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    label {
      cursor: pointer;
      font-size: 1rem;
      font-weight: 400;
    }
    .input-wrap {
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
  .error-message-wrap {
    color: #ef0000;

  }
  .button {
    margin-top: 20px;
    cursor: pointer;
    width: 100%;
    height: 48px;
    border: none;
    font-weight: 700;
    background-color: rgba(104, 228, 226, 0.6);
    border-radius: 8px;
    color: black;
  }
  .button:disabled {
    background-color: #dadada;
    color: white;
  }
`

export const JoinWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  .join {
    cursor: pointer;
    font-weight: bold;
    color: rgb(108, 175, 234);
  }
`

export const GoogleLoginButton = styled.div`
  img {
    width: 100%;
    cursor: pointer;
  }
`