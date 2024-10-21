import { Rating } from "@mui/material";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { MdCurrencyRupee } from "react-icons/md";
import CommonProductCard from "../../CommonProductCard";
function LatestPoroducts() {
  const latestPro = [
    {
      title: "Charge & Alarm Machine",
      rating: 4,
      reviews: 1,
      price: 2700.0,
      cutOffPrice: 79.2,

      image: "https://suha-nextjs.vercel.app/assets/img/product/9.png",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates dolorem tempore quam assumenda quaerat numquam.Sequi, ab enim nobis perspiciatis",
    },
    {
      title: "Charge & Alarm Machine",
      rating: 4,
      reviews: 1,
      price: 27.0,
      cutOffPrice: 79.2,

      image: "https://suha-nextjs.vercel.app/assets/img/product/1.png",
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates dolorem tempore quam assumenda quaerat numquam.Sequi, ab enim nobis perspiciatis",
    },
    {
      title: "Charge & Alarm Machine",
      rating: 4,
      reviews: 1,
      price: 27.0,
      cutOffPrice: 79.2,

      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates dolorem tempore quam assumenda quaerat numquam.Sequi, ab enim nobis perspiciatis",

      image: "https://suha-nextjs.vercel.app/assets/img/product/5.png",
    },
    {
      title: "Charge & Alarm Machine",
      rating: 4,
      reviews: 1,
      price: 27.0,
      cutOffPrice: 79.2,

      image: "https://suha-nextjs.vercel.app/assets/img/product/4.png",
    },
    {
      title: "Charge & Alarm Machine",
      rating: 4,
      reviews: 1,
      price: 27.0,
      cutOffPrice: 79.2,

      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates dolorem tempore quam assumenda quaerat numquam.Sequi, ab enim nobis perspiciatis",

      image: "https://suha-nextjs.vercel.app/assets/img/product/9.png",
    },
    {
      title: "Charge & Alarm Machine",
      rating: 4,
      reviews: 1,
      price: 27.0,
      cutOffPrice: 79.2,

      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates dolorem tempore quam assumenda quaerat numquam.Sequi, ab enim nobis perspiciatis",

      image: "https://suha-nextjs.vercel.app/assets/img/product/15.png",
    },
    {
      title: "Charge & Alarm Machine",
      rating: 4,
      reviews: 1,
      price: 27.0,
      cutOffPrice: 79.2,

      image: "https://suha-nextjs.vercel.app/assets/img/product/21.png",
    },
    {
      title: "Charge & Alarm Machine",
      rating: 4,
      reviews: 1,
      price: 27.0,
      cutOffPrice: 79.2,

      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates dolorem tempore quam assumenda quaerat numquam.Sequi, ab enim nobis perspiciatis",

      image: "https://suha-nextjs.vercel.app/assets/img/product/20.png",
    },
    {
      title: "Charge & Alarm Machine",
      rating: 4,
      reviews: 1,
      desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Voluptates dolorem tempore quam assumenda quaerat numquam.Sequi, ab enim nobis perspiciatis",
      cutOffPrice: 79.2,
      price: 27.0,
      image: "https://suha-nextjs.vercel.app/assets/img/product/14.png",
    },
  ];
  return (
    <div className=" w-full flex flex-col gap-5">
      <div className=" w-full flex justify-between items-center">
        <h1 className=" md:text-2xl font-bold text-black">Latest products</h1>
        <h1 className=" flex items-center gap-3 text-xs md:text-base text-black">
          View all{" "}
          <span>
            <GoArrowRight />
          </span>
        </h1>
      </div>
      <div className=" grid grid-cols-3 md:grid-cols-5 w-full gap-2 md:gap-10 gap-y-4 md:gap-y-14">
        {latestPro.map((items, index) => {
          return (
            <CommonProductCard
              key={index}
              image={items.image}
              price={items.price}
              cutOffPrice={items.cutOffPrice}
              rating={items.rating}
              reviews={items.reviews}
              title={items.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LatestPoroducts;
