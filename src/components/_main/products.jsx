import React from "react";
import CommonProductCard from "@/components/CommonProductCard";
import PaginationRounded from "@/components/pagination";

export default function ProductList({ products = [], pagination, onPageChange, category, subCategory }) {
  // If products are not passed as prop, show a loading skeleton or message
  if (!products || products.length === 0) {
    return <div className="w-full text-center py-10 text-gray-400">No products found.</div>;
  }

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {products.map((item, idx) => (
          <CommonProductCard
            key={item?._id || idx}
            image={item?.images?.[0] || item?.image}
            price={item?.priceSale || item?.price}
            cutOffPrice={item?.price}
            rating={item?.averageRating}
            reviews={item?.reviews?.length}
            title={item?.name}
          />
        ))}
      </div>
      {pagination && (
        <div className="flex justify-center mt-6">
          <PaginationRounded data={pagination} onChange={onPageChange} />
        </div>
      )}
    </div>
  );
}
