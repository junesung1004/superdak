import Banner from "../components/Banner";
import Banner1 from "../components/Banner1";
import Banner2 from "../components/Banner2";
import CategoryLogoList from "../components/CategoryLogoList";
import ImageSlider from "../components/ImageSlider";
import MainCategoryList from "../components/MainCategoryList";
import Banner3 from "../components/Banner3";
import ProductList from "../pages/ProductListPage";
import { useRef } from "react";
import TopDownButton from "../components/TopDownButton";

export default function HomePage() {
  const newRef = useRef(null);
  const chickenRef = useRef(null);
  const bestRef = useRef(null);
  const supplementRef = useRef(null);
  const lunchBoxRef = useRef(null);
  const snackRef = useRef(null);

  const categoryRefs = {
    NEW: newRef,
    닭가슴살: chickenRef,
    BEST: bestRef,
    보충제: supplementRef,
    도시락: lunchBoxRef,
    간편분식: snackRef,
  };

  return (
    <>
      {/* <TopDownButton /> */}
      <ImageSlider />
      <CategoryLogoList categoryRefs={categoryRefs} />
      <Banner />
      <div ref={newRef}>
        <MainCategoryList category={"NEW"} categoryTitle={"신상품"} />
      </div>

      <Banner3 />
      <div ref={chickenRef}>
        <MainCategoryList category={"닭가슴살"} categoryTitle={"닭가슴살"} />
      </div>
      <Banner1 />
      <div ref={bestRef}>
        <MainCategoryList category={"BEST"} categoryTitle={"베스트상품"} />
      </div>
      <div ref={supplementRef}>
        <MainCategoryList category={"보충제"} categoryTitle={"보충제"} />
      </div>
      <Banner2 />
      <div ref={lunchBoxRef}>
        <MainCategoryList category={"도시락"} categoryTitle={"도시락"} />
      </div>
      <div ref={snackRef}>
        <MainCategoryList category={"간편분식"} categoryTitle={"간편분식"} />
      </div>
      <ProductList />
    </>
  );
}
