
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'

import JoinPage from './pages/JoinPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import ProductListPage from './pages/ProductListPage'
import NotFoundPage from './pages/NotFoundPage.jsx'
import MyPage from './pages/MyPage.jsx'
import UploadPage from './pages/UploadPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} /> 
          <Route path='productlist'>
            <Route index element={<ProductListPage />} />
            <Route path='product' element={<ProductPage />} />
          </Route>
          <Route path='join' element={<JoinPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='mypage' element={<MyPage />} />
          <Route path='upload' element={<UploadPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
  </BrowserRouter>
)
