import { Rating } from "@mui/material";
import Link from "next/link";
import React from "react";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";

function HotDealsCard({ image, title, price, cutOffPrice, rating, reviews }) {
  return (
    <div>
      <Link href={"/product/default"}>
        <div className=" flex flex-col flex-shrink-0 gap-4 bg-white rounded-xl">
          <div className=" w-32 md:w-full h-28 flex items-center justify-center md:h-72 bg-white rounded-xl ">
            <img
              src={image}
              className=" w-4/5 h-4/5 md:w-full md:h-full object-cover rounded-xl"
              alt=""
            />
          </div>
          <div className=" flex flex-col gap-3 md:gap-5 px-2 md:px-0 py-2 md:py-0">
            <div className=" md:flex items-end justify-between">
              <div className=" flex flex-col gap-1 ">
                <h1 className=" font-semibold text-xs md:text-base">{title}</h1>
                <div className=" flex items-center gap-2 font-semibold">
                  <h1 className=" flex items-center gap-0 text-lg md:text-base">
                    <MdCurrencyRupee />
                    {price}
                  </h1>
                  <h1 className=" flex items-center gap-0 text-gray-400 text-xs md:text-base line-through">
                    <MdCurrencyRupee />
                    {cutOffPrice}
                  </h1>
                </div>
                <div className=" md:flex items-center gap-2 hidden ">
                  <Rating
                    defaultValue={rating}
                    readOnly
                    size="small"
                    className=" "
                  />
                  <h1 className=" hidden text-xs md:block md:text-base">
                    ({reviews} reviews)
                  </h1>
                </div>
              </div>
              <div className=" md:flex items-center gap-2 mt-1 md:mt-0 hidden   ">
                <FaRegHeart className=" text-xs md:text-base" />
                <BsCart className=" text-xs md:text-base" />
              </div>
            </div>
            <div className=" text-black rounded-md hidden border   w-full h-8 md:h-10 bg-stone-100 md:flex items-center justify-center">
              <h1 className=" text-xs md:text-base font-semibold">Buy now</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HotDealsCard;
