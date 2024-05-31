import { useContext } from "react";
import { CategoryLogoListContainer } from "./CategoryLogoListStyle";
import { categoryContext } from "../context/categoryContext";

export default function CategoryLogoList({ categoryRefs }) {
  const { categoryList } = useContext(categoryContext);

  const handleLogoClick = (category) => {
    if (categoryRefs[category]) {
      categoryRefs[category].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <CategoryLogoListContainer>
      <ul className="catagory-logo-wrap">
        {categoryList.map((el, idx) => {
          return (
            <div className="logo-cont" key={idx} onClick={() => handleLogoClick(el)}>
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
