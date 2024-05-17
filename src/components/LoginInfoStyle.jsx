import styled from "styled-components";

export const UserInfoContainer = styled.div`
  
    display: flex;
    gap:60px;
    .user-logo {
      cursor: pointer;
      position: relative;
      &:hover {
        .sub-menu{
          visibility: visible;
          li {
          cursor: pointer;
        }
        }
        }
      .sub-menu {
        visibility: hidden;
        display:flex;
        gap:20px;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        text-align:center;
        width:150px;
        height:160px;
        border: 1px solid black;
        border-radius: 8px;
        font-weight:bold;
        position:absolute;
        left:-60px;
        background-color:white;
        div {
          border:1px solid #dedede;
          padding:12px 24px;
          border-radius: 8px;
        }
      }
      svg {
        width:2rem;
        height:2rem
      }
    }
`