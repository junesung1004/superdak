import { useState } from "react";
import styled from "styled-components";
import { addProducts, uploadImages } from "../api/api";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
    console.log("setFile(e.target.file) :", e.target.files[0]);
  };

  //console.log("setFile(e.target.file) :", setFile(e.target.file));
  const uploadSubmitEvent = async (e) => {
    e.preventDefault();

    try {
      const product = {
        title: title,
        price: price,
        quantity: quantity,
        description: description,
      };
      const url = await uploadImages(file);
      const item = await addProducts(product, url);
    } catch (err) {
      console.error("상품 업로드 에러 : ", err);
    }
  };

  return (
    <UploadContainer>
      <div className="upload-container">
        <h1 className="upload-title">상품 등록</h1>
        <form className="upload-wrap" onSubmit={uploadSubmitEvent}>
          {/* 상품 제목 */}
          <div className="upload-item-title">
            <label htmlFor="title">상품명</label>
            <input type="text" id="title" value={title} name="title" onChange={handleTitleChange} />
          </div>

          {/* 상품 가격 */}
          <div className="upload-item-price">
            <label htmlFor="price">상품 가격</label>
            <input type="text" id="price" value={price} name="price" onChange={handlePriceChange} />
          </div>

          {/* 상품 수량 */}
          <div className="upload-item-quantity">
            <label htmlFor="quantity">상품 수량</label>
            <input type="text" id="quantity" value={quantity} name="quantity" onChange={handleQuantityChange} />
          </div>

          {/* 상품 설명 */}
          <div className="upload-item-description">
            <label htmlFor="description">상품 설명</label>
            <input type="text" id="description" value={description} name="description" onChange={handleDescriptionChange} />
          </div>

          {/* 상품 이미지 */}
          <div className="upload-item-image">
            <label htmlFor="image">상품 이미지</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
          </div>

          {/* 상품 업로드 버튼 */}
          <div className="button-wrap">
            <button type="submit" className="upload-btn">
              상품 업로드
            </button>
          </div>
        </form>
      </div>
    </UploadContainer>
  );
}

const UploadContainer = styled.div`
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
