import Link from "next/link";
import React from "react";

function CategoryCard({ image, title }) {
  return (
    <Link href={"/shop/breadcrumb-img"}>
      <div className=" flex flex-col gap-2 items-center ">
        <div className=" w-full h-28  md:w-48 md:h-52 rounded-md md:rounded-xl bg-white flex items-center justify-center relative shadow-md ">
          <img
            src={image}
            alt=""
            className=" md:w-32 md:h-32 w-1/2 h-1/2 object-cover rounded-md md:rounded-xl "
          />
          <div className=" absolute w-full h-full flex items-end  bottom-2 left-0  justify-center">
            <h1 className=" font-bold  text-[13px]  md:text-sm ">{title}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
