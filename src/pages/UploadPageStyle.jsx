import styled from "styled-components";

export const UploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 520px;
  margin: 30px auto;
  .upload-container {
    display: flex;
    flex-direction: column;
    .upload-title {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }

    .upload-wrap {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .upload-item-title {
        display: flex;
        align-items: center;
        label {
          width: 140px;
        }
        input {
          padding: 10px 20px;
          width: 100%;
        }
      }

      .upload-item-price {
        display: flex;
        align-items: center;
        label {
          width: 140px;
        }
        input {
          padding: 10px 20px;
          width: 100%;
        }
      }

      .upload-item-quantity {
        display: flex;
        align-items: center;
        label {
          width: 140px;
        }
        input {
          padding: 10px 20px;
          width: 100%;
        }
      }

      .upload-item-description {
        display: flex;
        align-items: center;
        label {
          width: 140px;
        }
        input {
          padding: 10px 20px;
          width: 100%;
        }
      }

      .upload-item-category {
        display: flex;
        align-items: center;
        label {
          width: 140px;
        }
        select {
          padding: 10px 20px;
          width: 100%;
        }
      }

      .upload-item-image {
        label {
          margin-right: 30px;
        }
      }

      .button-wrap {
        .upload-btn {
          outline: none;
          border: none;
          background-color: tomato;
          padding: 20px 35px;
          width: 100%;
          border-radius: 12px;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  }
`;
