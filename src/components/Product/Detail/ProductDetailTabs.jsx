import React, { useState } from "react";

export default function ProductDetailTabs({ product, totalRating, totalReviews }) {
  const [tab, setTab] = useState("description");
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex gap-4 border-b mb-4">
        <button className={`pb-2 px-4 ${tab === "description" ? "border-b-2 border-black font-semibold" : "text-gray-500"}`} onClick={() => setTab("description")}>Description</button>
        <button className={`pb-2 px-4 ${tab === "reviews" ? "border-b-2 border-black font-semibold" : "text-gray-500"}`} onClick={() => setTab("reviews")}>Reviews</button>
      </div>
      {tab === "description" && (
        <div>
          <h3 className="font-semibold mb-2">Product Description</h3>
          <p className="text-gray-700">{product?.description || "No description available."}</p>
        </div>
      )}
      {tab === "reviews" && (
        <div>
          <h3 className="font-semibold mb-2">Customer Reviews</h3>
          <p className="text-gray-700">Total Rating: {totalRating || 0} ({totalReviews || 0} reviews)</p>
          {/* Add review list or form here */}
        </div>
      )}
    </div>
  );
}
