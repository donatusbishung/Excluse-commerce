import BestSellingLayout from "../components/BestSelling";
import Catergories from "../components/Catergories";
import ExploreProducts from "../components/ExploreProducts";
import Footer from "../components/Footer";
import GeneralHeader from "../components/GeneralHeader";
import TopHeader from "../components/TopHeader";
import Service from "../components/Service";
import LayoutHero from "../components/Hero-layout/LayoutHero";
function Home() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <TopHeader />
        <GeneralHeader />
      </div>
      <LayoutHero />
      <Catergories />
      <BestSellingLayout />
      <ExploreProducts />
      <Service />
      <Footer />
    </div>
  );
}

export default Home;
