// In thumbnail-left/page.tsx
import React from 'react'
import { useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import Default from '@/components/Product/Detail/Default';
import Footer from '@/components/Footer/Footer'
import productData from '@/data/Product.json'

const ProductThumbnailLeft = () => {
    const searchParams = useSearchParams()
    let productId = searchParams.get('id')

    if (productId === null) {
        productId = '1'
    }
    
    // Transform the data to include _id
    const transformedData = productData.map(product => ({
        ...product,
        _id: product.id // Ensure _id is available
    }));

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-white" />
                <BreadcrumbProduct data={transformedData} productPage='default' productId={productId} />
            </div>
            <Default data={transformedData} productId={productId} />
            <Footer />
        </>
    )
}

export default ProductThumbnailLeft