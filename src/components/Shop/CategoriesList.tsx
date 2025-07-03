'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { getAllCategories } from '@/services';
import { useQuery } from 'react-query';

interface CategoryType {
  _id: string;
  name: string;
  slug: string;
  image: {
    url: string;
  };
  subcategories?: Array<{
    _id: string;
    name: string;
    slug: string;
  }>;
}

const CategoriesList: React.FC = () => {
  const router = useRouter();
  
  // Fetch all categories
  const { data: categoriesData, isLoading, error } = useQuery('allCategories', getAllCategories);
  
  const handleCategoryClick = (slug: string) => {
    router.push(`/shop/breadcrumb-img?category=${slug}`);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex justify-center">
          <div className="animate-spin">
            <Icon.CircleNotch size={32} />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-10">
        <div className="text-center text-red-500">
          Failed to load categories. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-semibold mb-6 text-center">Shop by Category</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoriesData?.data?.map((category: CategoryType) => (
          <div 
            key={category._id}
            className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            onClick={() => handleCategoryClick(category.slug)}
          >
            <div className="relative aspect-square overflow-hidden">
              {category.image?.url ? (
                <Image 
                  src={category.image.url} 
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <Icon.ShoppingBag size={40} />
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-center">{category.name}</h3>
              {category.subcategories && category.subcategories.length > 0 && (
                <p className="text-gray-500 text-sm mt-1 text-center">
                  {category.subcategories.length} subcategories
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
