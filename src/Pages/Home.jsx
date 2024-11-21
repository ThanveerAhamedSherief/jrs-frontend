import React from "react";
import HomeCarousel from "../components/HomeCarousel";
import HomeCarosuseSection from "../components/HomeCarosuseSection";
import { mens_kurta } from "../data/mens_kurta";
import Footer from "../components/Footer";
import ProductCarousel from "../components/ProductsCarousel";
import GridBanner from "../components/Home/GridBanner";
import HomeBrandInfo from "../components/Home/HomeBrandInfo";
import GridBottom from "../components/Home/GridBottom";

const HomePage = () => {
  return (
    <div>
      <div>
        <HomeCarousel />
      </div>

      <div className="container mx-auto px-4 mt-4">
        <GridBanner/>
      </div>
      <div className="flex flex-col items-center justify-center space-y-10  px-5 pt-10 lg:px-10 h-[400px]">
        <h2 className="text-2xl text-bold italic">New Arrivals</h2>
        <ProductCarousel />
      </div>
      {/* <div className="space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10 h-[600px]">
        <HomeCarosuseSection data={mens_kurta} sectionName={"mesnkurta"} />
      </div> */}
      <div className="container mx-auto px-12 py-10">
        <HomeBrandInfo/>
      </div>
      <div className="flex flex-col items-center justify-center space-y-10  px-5 pt-10 lg:px-10 h-[400px]">
        <h2 className="text-2xl text-bold italic">Best Selling Products</h2>
        <ProductCarousel />
      </div>
      <div className="container mx-auto px-12 mt-11">
        <GridBottom/>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
