"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import * as services from "@/services";
import { ProductType } from "@/type/ProductType";
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface RelatedProductsProps {
  productId: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ productId }) => {
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        setIsLoading(true);
        const response = await services.getRelatedProducts(productId);
        if (response && response.data) {
          console.log("Related products:", response.data);
          setRelatedProducts(response.data || []);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching related products:", error);
        setRelatedProducts([]);
        setIsLoading(false);
      }
    };

    if (productId) {
      fetchRelatedProducts();
    }
  }, [productId]);

  if (!isLoading && (!relatedProducts || relatedProducts.length === 0)) {
    return null;
  }

  return (
    <div className="related-product md:py-20 py-10">
      <div className="container">
        <div className="heading3 text-center">Related Products</div>
        <div className="list-product hide-product-sold grid lg:grid-cols-4 grid-cols-2 md:gap-[30px] gap-5 md:mt-10 mt-6">
          {!isLoading ? (
            relatedProducts.slice(0, 4).map((item, index) => (
              <div key={index} className="product-item grid-type">
                <div className="product-main cursor-pointer block">
                  <Link href={item.slug ? `/product/${item.slug}` : (item._id ? `/product/${item._id}` : '/product/default')}>
                    <div className="product-thumb bg-white relative overflow-hidden rounded-2xl">
                      <div className="product-img w-full h-full aspect-[3/4]">
                        <Image
                          src={item?.image?.url || "/images/product-placeholder.png"}
                          width={500}
                          height={500}
                          alt={item.name || "Product Image"}
                          priority={true}
                          className="w-full h-full object-cover duration-700"
                          placeholder={item?.image?.blurDataURL ? "blur" : "empty"}
                          blurDataURL={item?.image?.blurDataURL}
                        />
                      </div>
                    </div>
                    <div className="product-infor mt-4 lg:mb-7">
                      <div className="product-name text-title duration-300 line-clamp-1">
                        {item.name}
                      </div>
                      <div className="product-price-block flex items-center gap-2 flex-wrap mt-1 duration-300 relative z-[1]">
                        <div className="product-price text-title">${item.price}</div>
                        {item.priceSale && (
                          <div className="product-origin-price text-title text-secondary2 line-through">
                            ${item.priceSale}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            // Loading placeholders
            Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="product-card animate-pulse bg-surface p-4 rounded-lg"
                >
                  <div className="bg-gray-200 h-[250px] rounded-lg mb-4"></div>
                  <div className="bg-gray-200 h-4 rounded mb-2 w-3/4"></div>
                  <div className="bg-gray-200 h-4 rounded w-1/2"></div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
