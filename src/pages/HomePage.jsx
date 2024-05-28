import Banner from "../components/Banner";
import Banner1 from "../components/Banner1";
import Banner2 from "../components/Banner2";
import CategoryLogoList from "../components/CategoryLogoList";
import ImageSlider from "../components/ImageSlider";
import MainCategoryList from "../components/MainCategoryList";
import ProductList from "../pages/ProductListPage";

export default function HomePage() {
  return (
    <>
      <ImageSlider />
      <CategoryLogoList />
      {/* <ProductList /> */}
      <Banner />
      <MainCategoryList category={"NEW"} />
      <MainCategoryList category={"BEST"} />
      <Banner1 />
      <MainCategoryList category={"닭가슴살"} />
      <MainCategoryList category={"보충제"} />
      <Banner2 />
      <MainCategoryList category={"도시락"} />
      <MainCategoryList category={"간편분식"} />
    </>
  );
}
