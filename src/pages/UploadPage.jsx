import { useContext, useState } from "react";
import { addProducts, uploadImages } from "../api/api";
import { useNavigate } from "react-router-dom";
import { UploadContainer } from "./UploadPageStyle";
import { categoryContext } from "../context/categoryContext";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const { categoryList } = useContext(categoryContext);

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

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
    //console.log("setFile(e.target.file) :", e.target.files);
  };

  const uploadSubmitEvent = async (e) => {
    e.preventDefault();
    try {
      const product = {
        title: title,
        price: Number(price),
        quantity: Number(quantity),
        description: description,
        category: category,
      };
      const url = await uploadImages(file);
      const item = await addProducts(product, url);
      if (!url && !item) {
        alert("제품 정보를 빠지지 말고 입력해주세요.");
      } else {
        alert("상품을 등록 했습니다.");
        navigate("/");
      }
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

          {/* 상품 종류 */}
          <div className="upload-item-category">
            <label htmlFor="category">상품 종류</label>
            <select name="" id="category" onChange={handleCategoryChange}>
              <option disabled value="">
                상품옵션선택
              </option>
              {categoryList.map((el, idx) => {
                return <option key={idx}>{el}</option>;
              })}
            </select>
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
