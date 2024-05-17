import styled from "styled-components";


export const SearchBarContainer = styled.div`
  form {
    display : flex;
    gap: 10px;
    align-items: center;
    input {
      display: flex;
      flex-basis: 1;
      width: 500px;
      padding: 15px 20px;
      border: 1px solid #dedede;
      border-radius: 120px;
    }
    label {
      font-weight: bold;
    }
  }

  @media (max-width:1260px) {
    form {
      input {
        width: 250px;
      }
    }
  }

  @media (max-width:768px) {
    form {
      label {
        display: none;
      }
    }
  }
  
`