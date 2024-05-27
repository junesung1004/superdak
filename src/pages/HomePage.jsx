import CategoryLogoList from "../components/CategoryLogoList";
import ImageSlider from "../components/ImageSlider";
import ProductListPage from "./ProductListPage";

export default function HomePage() {
  return (
    <>
      <ImageSlider />
      <CategoryLogoList />
      <ProductListPage />
    </>
  );
}
