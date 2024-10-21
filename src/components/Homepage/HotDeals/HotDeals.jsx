import { Rating } from "@mui/material";
import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import CommonProductCard from "../../CommonProductCard";
import { TbTruckDelivery } from "react-icons/tb";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { LuWalletCards } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import HotDealsCard from "./HotDealsCard";

function HotDeals() {
  const hotdeals = [
    {
      title: "Charge & Alarm Machine",
      rating: 4,
      reviews: 1,
      price: 2700.0,
      cutOffPrice: 79.2,

      image:
        "https://portotheme.com/html/wolmart/assets/images/demos/demo5/products/2-1.jpg",
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
    <div className=" w-full flex flex-col md:gap-5">
      <h1 className=" md:text-2xl font-bold text-black">Featured products</h1>
      <div className=" md:flex w-full gap-10">
        <div className=" md:w-2/5 hidden md:flex flex-col md:gap-10">
          <div className="  md:flex w-full h-96 md:h-[600px] bg-stone-100 rounded-xl relative">
            <img
              src={hotdeals[0].image}
              alt=""
              className=" w-full h-72 md:h-[500px] object-cover rounded-xl"
            />
            <div className=" absolute w-full h-full flex items-end justify-center top-4 left-0 ">
              <div className=" w-full h-32 bg-stone-100 items-center justify-center flex flex-col rounded-b-xl md:rounded-b-none gap-1">
                <h1 className=" text-2xl font-bold">{hotdeals[0].title}</h1>
                <div className=" flex items-center gap-2">
                  <Rating defaultValue={hotdeals[0].rating} readOnly />
                  <h1 className=" text-gray-400">
                    ({hotdeals[0].reviews} Reviews)
                  </h1>
                </div>
                <h1 className=" flex items-center gap-0 text-2xl font-bold">
                  <MdCurrencyRupee />
                  {hotdeals[0].price}
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full h-auto md:flex flex-col gap-4  rounded-xl hidden md:block  md:px-5 py-5 text-sm md:text-base">
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
          </div>
        </div>
        <div className="   md:w-3/5 w-full flex items-center no-scrollbar  overflow-scroll md:grid md:grid-cols-3 gap-2 gap-y-10 md:gap-y-0 md:gap-10 mt-3  md:mt-0">
          {hotdeals.map((items, index) => {
            if (index > 0 && index <= 6)
              return (
                <HotDealsCard
                  image={items.image}
                  price={items.price}
                  cutOffPrice={items.cutOffPrice}
                  rating={items.rating}
                  reviews={items.reviews}
                  title={items.title}
                  key={index}
                />
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default HotDeals;
