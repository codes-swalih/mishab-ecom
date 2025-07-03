"use client"
import { Rating } from "@mui/material";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { MdCurrencyRupee } from "react-icons/md";
import CommonProductCard from "../../CommonProductCard";
import { useQuery } from "react-query";
import * as api from "@/services/index";

function LatestPoroducts() {
  // Fetch latest products from API
  const { data, isLoading } = useQuery(["latest-products"], () =>
    api.getFeaturedProducts()
  );

  const latestPro = isLoading ? Array.from(new Array(9)) : data?.data || [];

  return (
    <div className=" w-full flex flex-col gap-5 md:px-10">
      <div className=" w-full flex justify-between items-center">
        <h1 className=" md:text-2xl font-bold text-black">Latest products</h1>
        <h1 className=" flex items-center gap-3 text-xs md:text-base text-black">
          View all{" "}
          <span>
            <GoArrowRight />
          </span>
        </h1>
      </div>
      <div className=" grid grid-cols-3 md:grid-cols-5 w-full gap-2 md:gap-5 gap-y-4 md:gap-y-14">
        {latestPro.map((item, index) => (
          <CommonProductCard
            key={item?._id || index}
            image={item?.image}
            price={item?.priceSale || item?.price}
            cutOffPrice={item?.price}
            rating={item?.averageRating}
            reviews={item?.reviews}
            title={item?.name}
            slug={item?.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestPoroducts;
