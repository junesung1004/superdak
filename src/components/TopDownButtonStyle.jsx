import styled from "styled-components";

export const TopDownButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  border: 1px solid #9e9c9c;
  border-radius: 10px;
  width: 100px;
  color: #5f5d5d;
  position: fixed;
  background-color: transparent;
  z-index: 33;
  top: 400px;
  right: 12px;

  .logo-wrap {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
`;
