import React from "react";
import FeaturedCard from "./FeaturedCard";

function FeaturedSection() {
  const featuredProducts = [
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
    <div className=" w-full flex flex-col gap-3">
      <h1 className=" md:text-2xl font-bold text-black">Hot deals</h1>
      <div className=" w-full grid grid-cols-2 gap-2 md:gap-10 md:flex items-center overflow-scroll no-scrollbar">
        {featuredProducts.map((items, index) => {
          if (index <= 3) {
            return (
              <FeaturedCard
                image={items.image}
                price={items.price}
                cutOffPrice={items.cutOffPrice}
                rating={items.rating}
                reviews={items.reviews}
                title={items.title}
                key={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FeaturedSection;
