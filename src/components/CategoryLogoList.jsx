import { useContext } from "react";
import { CategoryLogoListContainer } from "./CategoryLogoListStyle";
import { categoryContext } from "../context/categoryContext";

export default function CategoryLogoList() {
  const { categoryList } = useContext(categoryContext);

  return (
    <CategoryLogoListContainer>
      <ul className="catagory-logo-wrap">
        {categoryList.map((el, idx) => {
          return (
            <div className="logo-cont" key={idx}>
              <li>
                <img src={`/${el}.png`} alt={el} />
              </li>
              <p>{el}</p>
            </div>
          );
        })}
      </ul>
    </CategoryLogoListContainer>
  );
}
