import { Rating } from "@mui/material";
import Link from "next/link";
import React from "react";
import { BsCart } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";

function CommonProductCard({
  image,
  title,
  price,
  cutOffPrice,
  rating,
  reviews,
  slug,
}) {
  // Support image as object (with .url) or string
  const imageUrl = image?.url || image;
  return (
    <Link href={`/product/${slug || ''}`} prefetch={false}>
      <div className=" flex flex-col flex-shrink-0 bg-white py-2 px-2  md:bg-transparent gap-4 rounded-xl border border-gray-200 hover:border-gray-400 ">
        <div className=" w-full h-24 flex items-center justify-center md:h-72 bg-white rounded-xl ">
          <img
            src={imageUrl}
            className=" w-full h-24 md:h-full object-cover rounded-xl"
            alt={title || "Product image"}
          />
        </div>
        <div className=" flex flex-col gap-3 md:gap-5 px-2 md:px-0 pb-2 md:py-0   ">
          <div className=" md:flex items-end justify-between">
            <div className=" flex flex-col gap-1 ">
              <h1 className=" font-semibold line-clamp-2 text-xs md:text-base">{title}</h1>
              <div className=" flex items-center gap-2 font-semibold">
                <h1 className=" flex items-center gap-0 text-gray-600 text-md md:text-base">
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
          <div className=" text-black rounded-md  w-full h-8 md:h-10 border  bg-green-500   flex items-center justify-center shadow-md">
            <h1 className=" text-xs md:text-base font-semibold">Buy now</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CommonProductCard;
