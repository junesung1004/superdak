import styled from "styled-components";

export const Nav = styled.nav`
  border-bottom: 1px solid #dedede;
  .header-container {
  position: relative;
  width:100%;
  display:flex;
  justify-content:center;
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
    padding: 2rem 2rem;
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
  }
}
`