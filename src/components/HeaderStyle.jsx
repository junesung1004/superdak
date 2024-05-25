import styled from "styled-components";

export const HeaderContainer = styled.nav`
  border-bottom: 1px solid #dedede;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  .logo-nav-wrap {
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
  } //로고 네브바 틀

  .category-nav-wrap {
    border-top: 1px solid #dedede;
    height: 5rem;
    .category-wrap {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 400;
      font-size: 1.1rem;

      .category-mainmenu {
        position: relative;
        display: flex;
        gap: 5px;
        &:hover {
          .category-submenu {
            visibility: visible;
          }
        }
        .category-submenu {
          visibility: hidden;
          width: 150px;
          display: flex;
          flex-direction: column;
          gap: 35px;
          position: absolute;
          margin: 49px 0;
          padding: 20px;
          border: 1px solid #dedede;
          z-index: 99;
          background-color: white;
        }
      }

      li {
        cursor: pointer;
        color: #7c6b6b;

        &:hover {
          text-decoration: underline;
          color: black;
        }
      }
    }
  } // 카테고리 네브바 틀

  @media (max-width: 980px) {
    padding: 0 2rem;
    .logo-nav-wrap {
      .header-container {
        .logo-cont {
          span {
            display: none;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .logo-nav-wrap {
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
  }
`;
