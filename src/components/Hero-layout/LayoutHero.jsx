import CategoriesHero from "./CategoriesHero";
import HeroSlide from "./HeroSlide";

function LayoutHero() {
  return (
    <div className="px-[10px] pt-[90px] lg:px-[100px] flex items-center gap-24 relative">
      <CategoriesHero />
      <div className="border-[0.5px] opacity-[600%] hidden lg:flex rotate-90 w-[384px] absolute top-[280px] left-[110px] bg-black"></div>
      <HeroSlide />
    </div>
  );
}

export default LayoutHero;
