"use client";

import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { Icon } from '@iconify/react';
import shieldFill from '@iconify/icons-eva/shield-fill';
import carFill from '@iconify/icons-eva/car-fill';
import creditCardFill from '@iconify/icons-eva/credit-card-fill';
import headphonesFill from '@iconify/icons-eva/headphones-fill';

interface Props {
  description?: string;
}

const features = [
  {
    icon: shieldFill,
    title: 'Genuine Product',
    description: '100% Original products directly from brand'
  },
  {
    icon: carFill,
    title: 'Free Shipping',
    description: 'Free shipping on orders above ₹499'
  },
  {
    icon: creditCardFill,
    title: 'Secure Payments',
    description: 'Multiple payment options available'
  },
  {
    icon: headphonesFill,
    title: '24/7 Support',
    description: 'Dedicated support team available'
  }
];

export default function ProductAdditionalInfo({ description }: Props) {
  return (
    <Box className="py-8 bg-gray-50">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper className="p-4 h-full transition-all hover:shadow-md">
                <Box className="flex flex-col items-center text-center">
                  <Icon icon={feature.icon} className="w-10 h-10 text-primary mb-3" />
                  <Typography variant="h6" className="mb-2 font-semibold">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {feature.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
