import React from "react";
import Banner from "../components/Homepage/Banner";
import Categories from "../components/Homepage/CategoriesSection/Categories";
import LatestPoroducts from "../components/Homepage/LatestProduct/LatestPoroducts";
import FeaturedSection from "../components/Homepage/FeaturedSection/FeaturedSection";
import HotDeals from "../components/Homepage/HotDeals/HotDeals";
import Ads from "../components/Homepage/Ads";
import FirstBanner from "../components/Homepage/FirstBanner";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" w-full flex justify-center  ">
      <div className=" w-full flex flex-col  md:gap-16 ">
        <TopNavOne
          props="style-one bg-black"
          slogan="New customers save 10% with the code GET10"
        />
        <div id="header" className="relative w-full">
          <MenuOne props="bg-white" />
        </div>
        <div className=" w-full flex flex-col gap-4 md:gap-16 px-3 md:px-0 mt-20  md:mt-0">
          <Banner />
          <Categories />
          <HotDeals />
          <FirstBanner />
          <FeaturedSection />
          <LatestPoroducts />
          <Ads />
          <Footer />
        </div>
      </div>
    </div>
  );
}
