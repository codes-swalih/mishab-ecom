'use client';

import React from 'react';
import TopNavOne from '@/components/Header/TopNav/TopNavOne';
import MenuOne from '@/components/Header/Menu/MenuOne';
import Footer from "@/components/Footer";
import CategoriesList from '@/components/Shop/CategoriesList';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

export default function CategoriesPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
        <div id="header" className='relative w-full'>
          <MenuOne props="bg-transparent" />
        </div>
        
        {/* Page title */}
        <div className="breadcrumb-header bg-surface py-16 relative overflow-hidden">
          <div className="container">
            <div className="breadcrumb-main text-center relative z-10">
              <h1 className="heading-section text-4xl md:text-5xl font-semibold mb-4">
                Shop by Categories
              </h1>
              <p className="text-secondary text-base md:text-lg max-w-3xl mx-auto">
                Explore our wide range of products organized by categories to find exactly what you're looking for.
              </p>
            </div>
          </div>
        </div>
        
        {/* Categories grid */}
        <CategoriesList />
        
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
