"use client";
import React from "react";
import FeaturedCard from "./FeaturedCard";
import { useQuery } from "react-query";
import * as api from "@/services/index";

function FeaturedSection() {
  // Fetch top collection products from API
  const { data, isLoading } = useQuery([
    "get-top-products"
  ], () => api.getTopRatedProducts());

  const featuredProducts = isLoading ? Array.from(new Array(4)) : data?.data || [];

  return (
    <div className="w-full flex flex-col gap-3 md:px-10 ">
      <h1 className="md:text-2xl font-bold text-black">Top Collection</h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-10 md:flex items-center overflow-scroll no-scrollbar">
        {featuredProducts.slice(0, 4).map((item, index) => (
          <FeaturedCard
            key={item?._id || index}
            image={item?.image}
            price={item?.priceSale || item?.price}
            cutOffPrice={item?.price}
            rating={item?.averageRating}
            title={item?.name}
            slug={item?.slug}
            id={item?._id}
            // reviews={item?.reviews}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedSection;
