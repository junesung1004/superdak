import styled from "styled-components";

export const Nav = styled.nav`
  display:flex;
  justify-content:center;
  border-bottom: 1px solid #dedede;
  .header-container {
  width:100%;
  max-width:1400px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 2rem 5rem;
  .logo-cont {
    display:flex;
    align-items:center;
    img {
    width:120px;
    height:120px;
  }
    span {
    font-size:2rem;
    font-weight:bold;
  }
  }
  
}

@media (max-width:768px) {
  .header-container {
    padding: 2rem 3rem;
    .logo-cont {
      display:flex;
      align-items:center;
      img {
      width:50px;
      height:50px;
      }
      span {
      display: none;
      }
    }
    .header-user-logo {
      display: flex;
      gap:20px;
      .user-logo {
        svg {
          width:1.5rem;
          height:1.5rem
        }
      }
    }
  }
}
`