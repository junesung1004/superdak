import styled from "styled-components";

export const CategoryNavContainer = styled.div`
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
`;
