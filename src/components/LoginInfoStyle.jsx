import styled from "styled-components";

export const UserInfoContainer = styled.div`
  display: flex;
  gap: 60px;
  .user-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    p {
      font-weight: 600;
      font-size: 16px;
    }
    cursor: pointer;
    position: relative;
    &:hover {
      .sub-menu {
        visibility: visible;
        li {
          cursor: pointer;
        }
      }
    }
    .sub-menu {
      visibility: hidden;
      display: flex;
      gap: 20px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 180px;
      height: 200px;
      border: 1px solid black;
      border-radius: 8px;
      font-weight: bold;
      position: absolute;
      left: -65px;
      top: 65px;
      background-color: white;
      z-index: 10;
      div {
        border: 1px solid #dedede;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 16px;
      }
    }
    .sub-menu.visible {
      visibility: visible;
    }
    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (max-width: 768px) {
    gap: 30px;
    transform: scale(0.8);
    .user-logo {
      p {
        display: none;
      }
      .sub-menu {
        transform: scale(0.8);
        top: 50px;
        /* z-index: 9999;  속성이 안먹히고 있네.. */
      }
    }
  }
`;
