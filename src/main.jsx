import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import JoinPage from "./pages/JoinPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import ProductListPage from "./pages/ProductListPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import MyPage from "./pages/MyPage.jsx";
import UploadPage from "./pages/UploadPage.jsx";
import { RecoilRoot } from "recoil";
import { categoryContext } from "./context/categoryContext.js";
import MainCategoryList from "./components/CategoryLogoList.jsx";
import SearchPage from "./pages//SearchPage.jsx";

// const CategoryRoute = () => {
//   const { categoryList } = useContext(categoryContext);
//   console.log("categoryList : ", categoryList);
//   return categoryList.map((el, idx) => <Route key={idx} path={`/category/${el}`} element={<MainCategoryList />} />);
// };
// console.log("CategoryRoute : ", CategoryRoute);

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
              <Route path="category/:category" element={<MainCategoryList />} />
            </Route>
            <Route path="join" element={<JoinPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="upload" element={<UploadPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </categoryContext.Provider>
  </RecoilRoot>
);
