import styled from "styled-components";

export const CategoryNavContainer = styled.nav`
  .category-nav-wrap {
    padding: 0 200px;
    width: 100%;
    margin: 0 auto;
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    /* height: 5rem; */
    z-index: 999;
    background-color: #fff;
    &.fixed {
      position: fixed;
      top: 0;
    }
    .category-wrap {
      /* margin-top: 30px; */
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 400;
      font-size: 1.1rem;

      .category-mainmenu {
        position: relative;
        display: flex;
        align-items: center;
        gap: 5px;
        height: 80px;
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
          top: 80px;
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

  @media (max-width: 1000px) {
    .category-nav-wrap {
      padding: 0 5px;
      .category-wrap {
        font-size: 0.85rem;
      }
    }
  }
`;
