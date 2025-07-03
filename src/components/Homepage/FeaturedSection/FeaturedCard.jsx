import { Rating } from "@mui/material";
import Link from "next/link";
import React from "react";
import { MdCurrencyRupee } from "react-icons/md";

function FeaturedCard({ image, title, price, cutOffPrice, rating, reviews, slug, id }) {
  // image can be an object with url and blurDataURL
  const imageUrl = image?.url || image;
  
  // Use slug for navigation, fallback to id if slug is not available
  const productLink = slug ? `/product/${slug}` : (id ? `/product/${id}` : '/product/default');
  
  return (
    <Link href={productLink}>
      <div className="  md:w-72 h-[245px] md:h-96 rounded-xl bg-white  flex flex-shrink-0 relative  ">
        <img
          src={imageUrl}
          alt={title || "Product image"}
          className=" w-full h-[161px] md:h-[248px]  md:w-full rounded-t-md md:rounded-t-xl  object-cover"
        />
        <div className=" absolute w-full h-full top-0 left-0 flex items-end justify-center">
          <div className=" w-full h-auto py-2 bg-black rounded-b-md md:rounded-b-xl text-white  bg-opacity-50 flex flex-col gap-1 md:gap-6    md:flex md:items-center justify-between md:px-3 px-1 ">
            <div className=" flex flex-col gap-1 md:gap-0">
              <h1 className=" text-sm md:text-lg font-bold line-clamp-1">{title}</h1>
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
            <div className=" flex flex-col gap-2 w-full">
              {/* <Rating
                defaultValue={rating}
                readOnly
                size="small"
                className="scale-75 -ml-2"
              /> */}
              <div className="w-full h-8 md:w-full md:h-10 flex items-center bg-white  justify-center rounded-md font-semibold text-black bg-gray-100">
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
