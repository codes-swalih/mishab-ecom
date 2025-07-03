import React, { useEffect, useState } from "react";
import * as api from "@/services/index";

export default function RelatedProductsCarousel({ id, category }) {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRelated() {
      setLoading(true);
      const res = await api.getRelatedProducts(id, category);
      setRelated(res?.data || []);
      setLoading(false);
    }
    fetchRelated();
  }, [id, category]);

  if (loading) return <div>Loading related products...</div>;
  if (!related.length) return <div>No related products found.</div>;

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map((item) => (
          <div key={item._id} className="border rounded p-2">
            <img src={item.images?.[0]} alt={item.name} className="w-full h-32 object-contain mb-2" />
            <div className="font-semibold text-sm">{item.name}</div>
            <div className="text-green-600 font-bold">${item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
