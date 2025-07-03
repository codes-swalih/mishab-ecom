"use client"
import { Rating } from "@mui/material";
import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import CommonProductCard from "../../CommonProductCard";
import { TbTruckDelivery } from "react-icons/tb";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { LuWalletCards } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import HotDealsCard from "./HotDealsCard";
import { useQuery } from "react-query";
import * as api from "@/services/index";
import Link from "next/link";

function HotDeals() {
  // Fetch best selling products from API
  const { data, isLoading } = useQuery(["get-best-products"], () =>
    api.getBestSellingProducts()
  );

  const hotdeals = isLoading ? Array.from(new Array(6)) : data?.data || [];

  return (
    <div className=" w-full flex flex-col md:gap-5 md:px-10">
      <h1 className=" md:text-2xl font-bold text-black">Featured products</h1>
      <div className=" md:flex w-full gap-10">
        {/* <div className=" md:w-2/5 hidden md:flex flex-col md:gap-10"> */}
          {/* <Link href={hotdeals[0]?.slug ? `/product/${hotdeals[0]?.slug}` : (hotdeals[0]?._id ? `/product/${hotdeals[0]?._id}` : '/product/default')}>
            <div className="w-full h-96 md:h-[600px] bg-stone-100 rounded-xl relative cursor-pointer">
              {hotdeals[0]?.image?.url && (
                <img
                  src={hotdeals[0].image.url}
                  alt={hotdeals[0].name}
                  className=" w-full h-72 md:h-[500px] object-cover rounded-xl"
                />
              )}
              <div className=" absolute w-full h-full flex items-end justify-center top-4 left-0 ">
                <div className=" w-full h-32 bg-stone-100 items-center justify-center flex flex-col rounded-b-xl md:rounded-b-none gap-1">
                  <h1 className=" text-2xl font-bold">
                    {hotdeals[0]?.name || ""}
                  </h1>
                  <div className=" flex items-center gap-2">
                    <Rating
                      defaultValue={hotdeals[0]?.averageRating || 0}
                      readOnly
                    />

                    <h1 className=" text-gray-400">({hotdeals[0]?.reviews} Reviews)</h1>
                  </div>
                  <h1 className=" flex items-center gap-0 text-2xl font-bold">
                    <MdCurrencyRupee />
                    {hotdeals[0]?.priceSale || hotdeals[0]?.price || ""}
                  </h1>
                </div>
              </div>
            </div>
          </Link> */}
          {/* <div className="w-full h-auto flex-col gap-4 rounded-xl hidden md:flex md:px-5 py-5 text-sm md:text-base">
            <div className=" flex items-center justify-between gap-5 md:gap-0">
              <div className=" flex flex-col gap-1">
                <h1 className=" font-bold text-gray-600">
                  Free Shipping & Returns Free Shipping & Returns
                </h1>
                <h1 className=" text-xs md:text-sm  text-gray-400">
                  For all orders over $99 For all orders over $99
                </h1>
              </div>
              <TbTruckDelivery className=" text-5xl" />
            </div>
            <hr />
            <div className=" flex items-center justify-between gap-5 md:gap-0">
              <div className=" flex flex-col gap-1">
                <h1 className=" font-bold text-gray-600">
                  Free Shipping & Returns Free Shipping & Returns
                </h1>
                <h1 className=" text-xs md:text-sm  text-gray-400">
                  For all orders over $99 For all orders over $99
                </h1>
              </div>
              <PiSuitcaseSimpleBold className=" text-5xl" />
            </div>
            <hr />
            <div className=" flex items-center justify-between gap-5 md:gap-0">
              <div className=" flex flex-col gap-1">
                <h1 className=" font-bold text-gray-600">
                  Free Shipping & Returns Free Shipping & Returns
                </h1>
                <h1 className=" text-xs md:text-sm  text-gray-400">
                  For all orders over $99 For all orders over $99
                </h1>
              </div>
              <LuWalletCards className=" text-5xl" />
            </div>
            <hr />
            <div className=" flex items-center justify-between gap-5 md:gap-0">
              <div className=" flex flex-col gap-1">
                <h1 className=" font-bold text-gray-600">
                  Free Shipping & Returns Free Shipping & Returns
                </h1>
                <h1 className=" text-xs md:text-sm  text-gray-400">
                  For all orders over $99 For all orders over $99
                </h1>
              </div>
              <BiSupport className=" text-5xl" />
            </div>
          </div> */}
        {/* </div> */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-10 w-5/5">
          {hotdeals.slice(0).map((item, index) => (
            <HotDealsCard
              key={index}
              image={item?.image}
              price={item?.priceSale || item?.price}
              cutOffPrice={item?.price}
              rating={item?.averageRating}
              title={item?.name}
              slug={item?.slug}
              id={item?._id}
              // reviews={item?.reviews}
              isLoading={isLoading}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotDeals;
