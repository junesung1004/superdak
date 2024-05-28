import { FaBars } from "react-icons/fa";
import { CategoryNavContainer } from "./CategoryNavStyle";
import { useContext } from "react";
import { categoryContext } from "../context/categoryContext";
import { Link } from "react-router-dom";

export default function CategoryNav() {
  //catagoryContext 파일에서 useContext로 context를 가져온다.
  const { categoryList } = useContext(categoryContext);
  console.log("categoryList : ", categoryList);
  return (
    <CategoryNavContainer>
      <nav className="category-nav-wrap">
        <ul className="category-wrap">
          <li className="category-mainmenu">
            <FaBars />
            <p>카테고리</p>
            <ul className="category-submenu">
              {categoryList.map((el, idx) => {
                return <li key={idx}>{el}</li>;
              })}
            </ul>
          </li>
          {categoryList.map((el, idx) => {
            return (
              <li key={idx}>
                <Link to={`catagory/${el}`}>{el}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </CategoryNavContainer>
  );
}
