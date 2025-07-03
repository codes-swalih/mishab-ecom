"use client"
import React from "react";
import CategoryCard from "./CategoryCard";
import { useQuery } from "react-query";
import * as api from "@/services/index";

function Categories() {
  const { data, isLoading } = useQuery(["get-home-categories"], () =>
    api.getHomeCategories()
  );

  // console.log("Categories data:", data);
  
  const categories = isLoading ? Array.from(new Array(8)) : data?.data || [];

  console.log(categories);
  

  return (
    <div className="flex flex-col md:px-10 gap-5">
      <h1 className="text-2xl font-bold hidden md:block">Categories</h1>
      <div className="w-full  grid grid-cols-4 md:flex overflow-scroll items-center gap-2 md:gap-y-5 md:gap-5 no-scrollbar">
        {categories.length > 0 ? (
          categories.map((item, index) => (
            <CategoryCard
              key={item?._id || index}
              category={item}
              isLoading={isLoading}
            />
          ))
        ) : !isLoading ? (
          <div className="col-span-4 text-center text-red-500 font-bold">
            Categories not found
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Categories;
