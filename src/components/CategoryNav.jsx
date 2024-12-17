import { FaBars } from "react-icons/fa";
import { CategoryNavContainer } from "./CategoryNavStyle";
import { useContext, useEffect, useRef, useState } from "react";
import { categoryContext } from "../context/categoryContext";
import { Link } from "react-router-dom";

export default function CategoryNav() {
  //catagoryContext 파일에서 useContext로 context를 가져온다.
  const { categoryList } = useContext(categoryContext);
  //console.log("categoryList : ", categoryList);

  //네브 컴포넌트 포지션 이벤트 주기위한
  /*
    특정 요소의 위치값 참조 useRef()
  */
  const [isFixed, setIsFixed] = useState(false);
  const navRef = useRef(null);
  const [initTop, setInitTop] = useState(0); // 최초 nav의 위치값 반환

  useEffect(() => {
    if (navRef.current) {
      setInitTop(navRef.current.getBoundingClientRect().top);
    }
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= initTop) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // console.log(initTop);
  }, [initTop]);

  return (
    <CategoryNavContainer>
      <div ref={navRef} className={`category-nav-wrap ${isFixed ? "fixed" : ""}`}>
        <ul className="category-wrap">
          <li className="category-mainmenu">
            <FaBars />
            <p>카테고리</p>
            <ul className="category-submenu">
              {categoryList.map((el, idx) => {
                return (
                  <ul key={idx}>
                    <Link to={`productlist/category/${el}`}>{el}</Link>
                  </ul>
                );
              })}
            </ul>
          </li>
          {categoryList.map((el, idx) => {
            return (
              <li key={idx}>
                <Link to={`productlist/category/${el}`}>{el}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </CategoryNavContainer>
  );
}
