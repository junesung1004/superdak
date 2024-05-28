import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import ProductListPage from "./pages/ProductListPage";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import MyPage from "./pages/MyPage.jsx";
import UploadPage from "./pages/UploadPage.jsx";
import { RecoilRoot } from "recoil";
import { categoryContext } from "./context/categoryContext.js";
import MainCategoryList from "./components/MainCategoryList.jsx";
import { useContext } from "react";

const CategoryRoute = () => {
  const { categoryList } = useContext(categoryContext);
  return categoryList.map((el, idx) => <Route key={idx} path={`category:${el}`} element={<MainCategoryList />} />);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <categoryContext.Provider value={{ categoryList: ["NEW", "BEST", "닭가슴살", "보충제", "도시락", "간편분식"] }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="productlist">
              <Route index element={<ProductListPage />} />
              <Route path=":id" element={<ProductDetailPage />} />
              <CategoryRoute />
            </Route>
            <Route path="join" element={<JoinPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="upload" element={<UploadPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </categoryContext.Provider>
  </RecoilRoot>
);
