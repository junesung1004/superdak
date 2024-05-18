import styled from "styled-components";

export const Nav = styled.nav`
  border-bottom: 1px solid #dedede;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  button {
    border: none;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-weight: bold;
  }
  .header-container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    .logo-cont {
      display: flex;
      align-items: center;
      img {
        width: 120px;
        height: 120px;
      }
      span {
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 980px) {
    padding: 2rem 2rem;
    .header-container {
      .logo-cont {
        span {
          display: none;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .header-container {
      .logo-cont {
        display: flex;
        align-items: center;
        img {
          width: 60px;
          height: 60px;
        }
        span {
          display: none;
        }
      }
    }
  }
`;
