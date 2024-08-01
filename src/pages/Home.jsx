import BestSellingLayout from "../components/BestSelling";
import Catergories from "../components/Catergories";
import ExploreProducts from "../components/ExploreProducts";
import Footer from "../components/Footer";
import GeneralHeader from "../components/GeneralHeader";
import Service from "../components/Service";
import LayoutHero from "../components/Hero-layout/LayoutHero";
import FlashSale from "../components/FlashSale";
import HomeCategories from "../components/HomeCategories";
function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <GeneralHeader />
      </div>
      <LayoutHero />
      <FlashSale />
      <Catergories />
      <BestSellingLayout />
      <HomeCategories />
      <ExploreProducts />
      <Service />
      <Footer />
    </div>
  );
}

export default Home;
