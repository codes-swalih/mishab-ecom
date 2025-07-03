import React from "react";

export default function ProductDetailsSummary({ product, totalRating, totalReviews, brand, category, isLoading, id }) {
  if (!product) return null;
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-yellow-500">★ {totalRating || 0}</span>
        <span className="text-gray-500">({totalReviews || 0} reviews)</span>
      </div>
      <div className="text-lg font-semibold text-green-600 mb-2">${product.price}</div>
      <div className="text-sm text-gray-500 mb-2">Brand: {brand?.name || "-"}</div>
      <div className="text-sm text-gray-500 mb-2">Category: {category?.name || "-"}</div>
      <div className="mt-4">
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">Add to Cart</button>
      </div>
      {/* Add more product summary details, actions, etc. */}
    </div>
  );
}
