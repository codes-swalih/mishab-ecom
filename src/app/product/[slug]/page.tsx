"use client";

import TopNavOne from '@/components/Header/TopNav/TopNavOne';
import MenuOne from '@/components/Header/Menu/MenuOne';
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct';
import Default from '@/components/Product/Detail/Default';
import Footer from "@/components/Footer";
import * as api from '@/services';
import { useEffect, useState } from 'react';

export default function ProductDetails({ params }: { params: { slug: string } }) {
  const [productData, setProductData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.getProductBySlug(params.slug);
        setProductData(response);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [params.slug]);

  if (isLoading) {
    return <div>Loading...</div>; // Add your loading spinner here
  }

  if (!productData?.data) {
    return <div>Product not found</div>; // Add your error state UI here
  }

  return (
    <>
      {/* <TopNavOne
        props="style-one bg-black"
        slogan="New customers save 10% with the code GET10"
      /> */}
      <div id="header" className="relative w-full">
        <MenuOne props="bg-white" />
      </div>
      <div className="mt-10">
        <Default data={[productData.data]} productId={productData.data._id} />
        <Footer />
      </div>
    </>
  );
}
