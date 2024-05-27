import styled from "styled-components";

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 1300px;
  margin: 50px auto;
  h1 {
    color: black;
    font-size: 2rem;
    font-weight: bold;
  }
  .all-check-wrap {
    margin: 0 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    .btn-wrap {
      display: flex;
      button {
        background-color: white;
        color: #837a7a;
        border: 1px solid #ccc;
        border-radius: 6px;
        padding: 10px 20px;
        cursor: pointer;
      }
    }

    .all-check {
      display: flex;
      align-items: center;
      gap: 10px;

      input {
        width: 20px;
        height: 20px;
      }
    }
  }

  .cart-wrap {
    display: flex;
    flex-direction: column;
    .logo-wrap {
      margin-top: 30px;
      display: flex;
      align-items: center;
      gap: 10px;
      border: 1px solid #ccc;
      border-top: 1px solid #000;
      padding: 20px 40px;
      .all-check {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: bold;
        color: #4e4646;
        input {
          width: 20px;
          height: 20px;
        }
      }
    }

    .cart-item-wrap {
      display: flex;
      align-items: center;
      gap: 30px;
      border: 1px solid #ccc;
      border-top: none;
      padding: 40px 60px;
      .checkbox-wrap {
        input {
          width: 20px;
          height: 20px;
        }
      }

      .cart-img-wrap {
        width: 150px;
        height: 150px;
        overflow: hidden;
        display: flex;
        align-items: center;
        img {
          width: 100%;
          object-fit: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
      }

      .cart-item-content-wrap {
        display: flex;
        flex-direction: column;
        gap: 15px;
        font-size: 1.2rem;
        width: 500px;

        p:nth-child(1) {
        }
        p:nth-child(2) {
          color: #ccc;
          font-size: 1rem;
        }
        p:nth-child(3) {
          span {
            color: tomato;
            font-size: 1.5rem;
            font-weight: bold;
          }
        }
      }

      .cart-item-count-wrap {
        display: flex;
        gap: 25px;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px 20px;
        /* margin-right: 60px; */
        button {
          cursor: pointer;
          background-color: white;
          border: none;
          outline: none;
        }
      }

      .delete-btn-wrap {
        margin-left: 40px;
        button {
          background-color: white;
          border: none;
          outline: none;
          cursor: pointer;
        }
      }
    }

    .cart-item-price-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 40px;
      background-color: #f8f8f8;
      color: #807b7b;
      .price {
        font-weight: bold;
        font-size: 1.2rem;
        color: black;
      }
    }
  }

  @media (max-width: 830px) {
    .all-check-wrap {
      .btn-wrap {
        button {
          transform: scale(0.8);
        }
      }
    }
    .cart-item-wrap {
      flex-direction: column;
      align-items: center;
      text-align: center;
      .cart-item-count-wrap {
        margin-right: 0;
      }
    }
  }
`;
