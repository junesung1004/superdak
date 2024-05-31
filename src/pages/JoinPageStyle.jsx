import styled from "styled-components";

export const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
  padding: 10px;
  .title-wrap {
    margin-top: 50px;
    color: #262626;
    h1 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 10px;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

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
      .check-btn {
        cursor: pointer;
        width: 150px;
        border: none;
        padding: 8px;
        background-color: rgb(108, 175, 234);
        color: white;
        font-weight: bold;
        border-radius: 8px;
        &:disabled {
          background-color: #dadada;
          color: white;
        }
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
`;

export const ButtonWrap = styled.div`
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
  .join-button:disabled {
    background-color: #dadada;
    color: white;
  }
`;
