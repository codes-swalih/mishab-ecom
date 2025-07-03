'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import ShopBreadCrumbImg from '@/components/Shop/ShopBreadCrumbImg';
import CategoriesList from '@/components/Shop/CategoriesList';
import Footer from "@/components/Footer";
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { getAllCategories, getProductsByCategory, getProducts } from '@/services';
import { ProductType } from '@/type/ProductType';
import productData from '@/data/Product.json';
import * as Icon from "@phosphor-icons/react/dist/ssr";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

export default function BreadcrumbImg() {
  return (
    <QueryClientProvider client={queryClient}>
      <BreadcrumbImgContent />
    </QueryClientProvider>
  );
}

function BreadcrumbImgContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = searchParams.get('type');
  const categorySlug = searchParams.get('category');
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Array<ProductType>>([]); 

  // Query for products if category is selected, otherwise show all categories
  const { data: productsData, isLoading: isLoadingProducts } = useQuery(
    ['products', categorySlug], 
    async () => {
      if (categorySlug) {
        console.log(`Fetching products for category: ${categorySlug}`);
        try {
          const result = await getProductsByCategory('', categorySlug, 1);
          console.log('API response data:', result);
          return result;
        } catch (error) {
          console.error('Error fetching products by category:', error);
          return null;
        }
      }
      return null;
    },
    { enabled: !!categorySlug }
  );

  // Get category name for title
  const { data: categoryData } = useQuery(
    ['category', categorySlug],
    () => categorySlug ? getAllCategories() : null,
    { enabled: !!categorySlug }
  );
  
  useEffect(() => {
    // Set products from API if available, otherwise use static data
    if (productsData) {
      console.log('API Response:', productsData);
      
      // Handle different API response structures
      let productItems: any[] = [];
      
      // Check if data is in top level or inside data property
      if (Array.isArray(productsData)) {
        productItems = productsData;
      } else if (productsData.data) {
        // Check if data is direct array or inside a data property
        if (Array.isArray(productsData.data)) {
          productItems = productsData.data;
        } else if (productsData.data.data && Array.isArray(productsData.data.data)) {
          // Sometimes API returns nested data.data structure
          productItems = productsData.data.data;
        }
      }
      
      console.log('Extracted product items:', productItems);
      
      if (Array.isArray(productItems) && productItems.length > 0) {
        // Transform product data to match expected structure
        const transformedProducts = productItems.map((product: any) => ({
          ...product,
          id: product._id || product.id,
          category: product.category?.name || (typeof product.category === 'string' ? product.category : 'Unknown'),
          type: product.type || 'Unknown',
          sale: product.discount > 0 || product.sale,
          name: product.name || product.title,
          price: product.price || 0,
          // Ensure other required fields are present
          rating: product.rating || product.averageRating || 0,
          quantity: product.quantity || 1,
          // Add other fields needed by ShopBreadCrumbImg component
        }));
        
        console.log('Transformed products:', transformedProducts);
        setProducts(transformedProducts);
      } else {
        console.error('No products found in API response or unexpected format');
        // Fallback to static data filtered by category
        const filteredProducts = productData.filter(p => {
          if (type) return p.type === type;
          if (categorySlug) return p.category.toLowerCase().includes(categorySlug.toLowerCase());
          return true;
        });
        console.log('Using filtered static products:', filteredProducts);
        setProducts(filteredProducts);
      }
      setIsLoading(false);
    } else if (categorySlug) {
      // Fallback to static data filtered by category
      const filteredProducts = productData.filter(p => {
        if (type) return p.type === type;
        if (categorySlug) return p.category.toLowerCase().includes(categorySlug.toLowerCase());
        return true;
      });
      console.log('Using static products for category:', categorySlug, filteredProducts);
      setProducts(filteredProducts);
      setIsLoading(false);
    }
  }, [productsData, categorySlug, type]);

  // Get the current category name from the category data
  const getCategoryName = () => {
    if (!categorySlug) return '';
    
    if (categoryData?.data) {
      const category = categoryData.data.find((cat: any) => cat.slug === categorySlug);
      return category?.name || categorySlug;
    }
    return categorySlug;
  };

  console.log('Final products being sent to ShopBreadCrumbImg:', products);
  
  return (
    <>
      {/* <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" /> */}
      
        <MenuOne props="bg-transparent" />
      
      
      {!categorySlug ? (
        // Show category listing when no category is selected
        <CategoriesList />
      ) : (
        // Show products when category is selected
        <>
          <div className="breadcrumb-header bg-surface py-16 relative overflow-hidden">
            <div className="container">
              <div className="breadcrumb-main text-center relative z-10">
                <h4 className="heading-section text-3xl md:text-5xl font-semibold">
                  {getCategoryName()}
                </h4>
                <div className="breadcrumb-nav flex items-center justify-center gap-2 text-button-uppercase mt-4">
                  <div className="item flex items-center gap-1 cursor-pointer" onClick={() => router.push('/shop/breadcrumb-img')}>
                    <span className="text-secondary">Home</span>
                    <Icon.CaretRight size={14} />
                  </div>
                  <div className="item flex items-center gap-1">
                    <span>{getCategoryName()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ShopBreadCrumbImg 
            data={products} 
            productPerPage={12} 
            dataType={type} 
          />
        </>
      )}
      <Footer />
    </>
  )
}
