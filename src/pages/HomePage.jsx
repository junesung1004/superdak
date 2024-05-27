import CategoryLogoList from "../components/CategoryLogoList";
import ImageSlider from "../components/ImageSlider";
import MainCategoryList from "../components/MainCategoryList";

export default function HomePage() {
  return (
    <>
      <ImageSlider />
      <CategoryLogoList />
      <MainCategoryList category={"닭가슴살"} />
    </>
  );
}
