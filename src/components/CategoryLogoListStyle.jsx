import styled from "styled-components";

export const CategoryLogoListContainer = styled.div`
  .catagory-logo-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    margin: 80px auto;
    width: 100%;
    max-width: 1300px;
    .logo-cont {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      li {
        background-color: #f7f7f7;
        padding: 20px;
        border-radius: 30px;
      }
    }
  }

  @media (max-width: 1050px) {
    .catagory-logo-wrap {
      padding: 30px 0;
      gap: 40px;
      margin: auto;
      .logo-cont {
        transform: scale(0.8);
      }
    }
  }

  @media (max-width: 830px) {
    .catagory-logo-wrap {
      gap: 20px;
      .logo-cont {
        transform: scale(0.6);
      }
    }
  }

  @media (max-width: 830px) {
    display: none;
  }
`;
