import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AuthHeader from "./components/AuthHeader";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  // 로그인 페이지 및 회원가입 페이지 경로
  const authPagePaths = ["/login", "/join"]; // 각 페이지에 대한 경로를 여기에 추가

  // 현재 경로가 로그인 페이지 또는 회원가입 페이지인지 확인
  const isAuthPage = authPagePaths.includes(location.pathname);

  // Footer를 로그인 및 회원가입 페이지에서 숨김
  const showFooter = !isAuthPage;
  return (
    <>
      {isAuthPage ? <AuthHeader /> : <Header />}
      <Outlet />
      {showFooter && <Footer />}
    </>
  );
}

export default App;
