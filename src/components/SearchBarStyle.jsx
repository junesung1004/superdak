import styled from "styled-components";

export const SearchBarContainer = styled.div`
  form {
    .input-wrap {
      width: 500px;
      height: 40px;
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
      border: 1px solid #ededed;
      border-radius: 8px;
      padding: 30px 25px;
      &:focus-within {
        border: 1px solid blue;
      }
      .logo {
        cursor: pointer;
      }
      input {
        width: 100%;
        outline: none;
        border: none;
      }
    }
  }

  @media (max-width: 1260px) {
    form {
      .input-wrap {
        width: 450px;
      }
    }
  }

  @media (max-width: 1100px) {
    form {
      .input-wrap {
        width: 400px;
      }
    }
  }

  @media (max-width: 768px) {
    form {
      .input-wrap {
        width: 220px;
      }
    }
  }
`;
