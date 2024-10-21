import { Rating } from "@mui/material";
import Link from "next/link";
import React from "react";
import { MdCurrencyRupee } from "react-icons/md";

function FeaturedCard({ image, title, price, cutOffPrice, rating, reviews }) {
  return (
    <Link href={"/product/default"}>
      <div className="  md:w-1/3 h-72 md:h-96 rounded-xl bg-white  flex flex-shrink-0 relative  ">
        <img
          src={image}
          alt=""
          className=" w-full h-[140px] md:w-full rounded-t-md md:rounded-xl md:h-full object-cover"
        />
        <div className=" absolute w-full h-full top-0 left-0 flex items-end justify-center">
          <div className=" w-full h-auto py-2 bg-black rounded-b-md md:rounded-b-xl text-white  bg-opacity-50 flex flex-col gap-1 md:gap-0    md:flex md:items-center justify-between md:px-3 px-1 ">
            <div className=" flex flex-col gap-1 md:gap-0">
              <h1 className=" text-sm md:text-lg font-bold">{title}</h1>
              <div className=" flex items-center gap-0 font-semibold ">
                <h1 className=" text-sm md:text-lg flex items-center gap-0 text-gray-300 line-through">
                  <MdCurrencyRupee />
                  {cutOffPrice}
                </h1>
                <h1 className=" flex items-center justify-center  gap-0 text-sm md:text-lg">
                  <MdCurrencyRupee />
                  {price}
                </h1>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <Rating
                defaultValue={rating}
                readOnly
                size="small"
                className="scale-75 -ml-2"
              />
              <div className="w-full h-8 md:w-32 md:h-10 flex items-center bg-white  justify-center rounded-md font-semibold text-black bg-gray-100">
                <h1 className=" text-xs md:text-base">Buy now</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FeaturedCard;
