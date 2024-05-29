import Banner from "../components/Banner";
import Banner1 from "../components/Banner1";
import Banner2 from "../components/Banner2";
import CategoryLogoList from "../components/CategoryLogoList";
import ImageSlider from "../components/ImageSlider";
import MainCategoryList from "../components/MainCategoryList";
import Banner3 from "../components/Banner3";
import ProductList from "../pages/ProductListPage";

export default function HomePage() {
  return (
    <>
      <ImageSlider />
      <CategoryLogoList />
      {/* <ProductList /> */}
      <Banner />
      <MainCategoryList category={"NEW"} categoryTitle={"신상품"} />
      <Banner3 />
      <MainCategoryList category={"닭가슴살"} categoryTitle={"닭가슴살"} />
      <Banner1 />
      <MainCategoryList category={"BEST"} categoryTitle={"베스트상품"} />
      <MainCategoryList category={"보충제"} categoryTitle={"보충제"} />
      <Banner2 />
      <MainCategoryList category={"도시락"} categoryTitle={"도시락"} />
      <MainCategoryList category={"간편분식"} categoryTitle={"간편분식"} />
    </>
  );
}
