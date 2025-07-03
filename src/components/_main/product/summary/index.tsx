"use client";

import React, { useState } from 'react';
import { Box, Button, Rating, Stack, Typography, Chip, TextField, IconButton } from '@mui/material';
import { Icon } from '@iconify/react';
import roundAdd from '@iconify/icons-ic/round-add';
import roundRemove from '@iconify/icons-ic/round-remove';
import roundAddShoppingCart from '@iconify/icons-ic/round-add-shopping-cart';
import heartFill from '@iconify/icons-eva/heart-fill';
import shareOutline from '@iconify/icons-eva/share-outline';

interface Props {
  id: string;
  product: any;
  brand: any;
  category: any;
  totalRating: number;
  totalReviews: number;
}

export default function ProductDetailsSumary({
  id,
  product,
  brand,
  category,
  totalRating,
  totalReviews
}: Props) {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    if (quantity < product.available) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" className="text-2xl md:text-3xl font-bold mb-4">
        {product.name}
      </Typography>

      <Stack direction="row" alignItems="center" spacing={1} className="mb-4">
        <Rating value={totalRating} precision={0.1} readOnly />
        <Typography variant="body2" className="text-gray-600">
          ({totalReviews} reviews)
        </Typography>
      </Stack>

      <Stack spacing={2} className="mb-6">
        <Box className="flex items-center gap-4">
          <Typography variant="subtitle2" className="text-gray-600">
            Brand:
          </Typography>
          <Typography>{brand?.name}</Typography>
        </Box>

        <Box className="flex items-center gap-4">
          <Typography variant="subtitle2" className="text-gray-600">
            Category:
          </Typography>
          <Typography>{category?.name}</Typography>
        </Box>

        <Box className="flex items-center gap-4">
          <Typography variant="subtitle2" className="text-gray-600">
            Status:
          </Typography>
          <Chip
            label={product.available > 0 ? 'In Stock' : 'Out of Stock'}
            color={product.available > 0 ? 'success' : 'error'}
            size="small"
          />
        </Box>
      </Stack>

      <Box className="mb-6">
        <Typography variant="h5" className="text-2xl font-bold mb-2">
          ₹{product.priceSale || product.price}
          {product.priceSale && (
            <Typography
              component="span"
              className="ml-2 text-lg line-through text-gray-500"
            >
              ₹{product.price}
            </Typography>
          )}
        </Typography>
      </Box>

      {product.colors && product.colors.length > 0 && (
        <Box className="mb-6">
          <Typography variant="subtitle2" className="mb-2">
            Color
          </Typography>
          <Stack direction="row" spacing={1}>
            {product.colors.map((color: string) => (
              <Button
                key={color}
                className={`min-w-0 p-2 rounded-full border-2 ${
                  selectedColor === color
                    ? 'border-primary'
                    : 'border-transparent hover:border-gray-300'
                }`}
                onClick={() => setSelectedColor(color)}
              >
                <Box
                  className="w-6 h-6 rounded-full"
                  sx={{ backgroundColor: color.toLowerCase() }}
                />
              </Button>
            ))}
          </Stack>
        </Box>
      )}

      {product.sizes && product.sizes.length > 0 && (
        <Box className="mb-6">
          <Typography variant="subtitle2" className="mb-2">
            Size
          </Typography>
          <Stack direction="row" spacing={1}>
            {product.sizes.map((size: string) => (
              <Button
                key={size}
                variant={selectedSize === size ? 'contained' : 'outlined'}
                className={selectedSize === size ? 'bg-primary' : ''}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </Stack>
        </Box>
      )}

      <Stack direction="row" spacing={2} className="mb-6">
        <Box className="flex items-center border rounded-md">
          <IconButton onClick={decrementQuantity}>
            <Icon icon={roundRemove} />
          </IconButton>
          <TextField
            value={quantity}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              if (!isNaN(val) && val >= 1 && val <= product.available) {
                setQuantity(val);
              }
            }}
            inputProps={{ min: 1, max: product.available }}
            className="w-16 text-center"
          />
          <IconButton onClick={incrementQuantity}>
            <Icon icon={roundAdd} />
          </IconButton>
        </Box>

        <Button
          variant="contained"
          size="large"
          className="bg-primary hover:bg-primary-dark"
          startIcon={<Icon icon={roundAddShoppingCart} />}
          disabled={product.available === 0}
        >
          Add to Cart
        </Button>

        <IconButton className="border hover:bg-gray-100">
          <Icon icon={heartFill} className="text-gray-600" />
        </IconButton>

        <IconButton className="border hover:bg-gray-100">
          <Icon icon={shareOutline} className="text-gray-600" />
        </IconButton>
      </Stack>

      {product.description && (
        <Box className="prose max-w-none">
          <Typography variant="subtitle2" className="mb-2">
            Description
          </Typography>
          <Typography variant="body2" className="text-gray-600">
            {product.description}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
