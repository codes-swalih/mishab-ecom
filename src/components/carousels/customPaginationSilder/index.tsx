"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Box, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import arrowIosBackFill from '@iconify/icons-eva/arrow-ios-back-fill';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import roundZoomIn from '@iconify/icons-ic/round-zoom-in';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

interface ImageType {
  url: string;
}

interface ProductType {
  images?: ImageType[];
}

interface Props {
  product: ProductType;
  data: ProductType;
  slug: string;
}

export default function ProductDetailsCarousel({ product, data }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = product?.images || data?.images || [];

  return (
    <Box className="relative">
      {/* Main Slider */}
      <Box className="relative mb-3">
        <Swiper
          spaceBetween={10}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs]}
          className="product-images-slider"
        >
          {images.map((image: ImageType, index: number) => (
            <SwiperSlide key={index}>
              <Box className="relative pt-[100%] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={image.url}
                  alt={`product-${index}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
                <IconButton
                  className="absolute top-4 right-4 bg-white hover:bg-gray-100"
                  onClick={() => {
                    // Implement zoom functionality
                  }}
                >
                  <Icon icon={roundZoomIn} className="w-6 h-6" />
                </IconButton>
              </Box>
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

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product-images-slider-thumbs"
      >
        {images.map((image: ImageType, index: number) => (
          <SwiperSlide key={index}>
            <Box
              className={`relative pt-[100%] rounded-lg overflow-hidden cursor-pointer ${
                currentIndex === index ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={image.url}
                alt={`thumb-${index}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 10vw"
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
