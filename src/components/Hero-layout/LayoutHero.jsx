import CategoriesHero from "./CategoriesHero";
import HeroSlide from "./HeroSlide";

function LayoutHero() {
  return (
    <div className="px-[10px] lg:px-[100px] flex justify-between items-center">
      <CategoriesHero />
      <HeroSlide />
    </div>
  );
}

export default LayoutHero;
