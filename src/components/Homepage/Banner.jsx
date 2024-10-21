import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <Link href={"/shop/breadcrumb-img"}>
      <div className=" w-full md:h-[500px] rounded-xl flex flex-col gap-5 relative">
        <img
          src={
            "https://i.pinimg.com/originals/22/46/59/224659f4343404b05a435ab3b7697fb4.png"
          }
          className=" w-full h-full object-cover rounded-xl"
        />
        <div className=" hidden absolute w-full h-full top-44 left-10 md:flex items-center justify-center">
          <div className=" border-2 border-black hover:bg-white cursor-pointer  text-black w-44 h-14 flex items-center justify-center">
            <h1 className=" uppercase">shop now</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Banner;
