"use client";

import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import * as api from '@/services';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  id: string;
  category: string;
}

export default function RelatedProductsCarousel({ id, category }: Props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await api.getRelatedProducts(id);
        setProducts(response.data || []);
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    fetchRelatedProducts();
  }, [id]);

  if (products.length === 0) return null;

  return (
    <Box className="py-8">
      <Container maxWidth="xl">
        <Typography variant="h5" className="mb-6 font-bold">
          Related Products
        </Typography>

        <Box className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="related-products-slider"
          >
            {products.map((product: any) => (
              <SwiperSlide key={product._id}>
                <Link href={`/product/${product.slug}`}>
                  <Box className="group">
                    <Box className="relative pt-[100%] rounded-lg overflow-hidden mb-3">
                      <Image
                        src={product.images?.[0]?.url || '/images/product/1000x1000.png'}
                        alt={product.name || 'Product Image'}
                        fill
                        className="object-cover transition-transform group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                      {product.priceSale && (
                        <Box className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                          Sale
                        </Box>
                      )}
                    </Box>

                    <Typography className="font-medium mb-1 line-clamp-1">
                      {product.name}
                    </Typography>

                    <Box className="flex items-center gap-2">
                      <Typography className="text-primary font-semibold">
                        ₹{product.priceSale || product.price}
                      </Typography>
                      {product.priceSale && (
                        <Typography className="text-gray-500 line-through text-sm">
                          ₹{product.price}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <IconButton className="swiper-button-prev !w-10 !h-10 !bg-white/80 hover:!bg-white !shadow-md">
            <Icon icon={arrowIosBackFill} className="w-6 h-6" />
          </IconButton>
          <IconButton className="swiper-button-next !w-10 !h-10 !bg-white/80 hover:!bg-white !shadow-md">
            <Icon icon={arrowIosForwardFill} className="w-6 h-6" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
