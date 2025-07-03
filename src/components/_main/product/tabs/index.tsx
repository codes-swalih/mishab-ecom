"use client";

import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Rating,
  Stack,
  Avatar,
  Button,
  TextField,
  Paper
} from '@mui/material';
import { Icon } from '@iconify/react';
import messageSquareFill from '@iconify/icons-eva/message-square-fill';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}
    >
      {value === index && <Box className="py-4">{children}</Box>}
    </div>
  );
}

interface Props {
  product: {
    description: string;
    _id: string;
  };
  totalRating: number;
  totalReviews: number;
}

export default function ProductDetailTabs({ product, totalRating, totalReviews }: Props) {
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState<number | null>(5);
  const [review, setReview] = useState('');

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSubmitReview = () => {
    // Implement review submission
    console.log({ rating, review });
  };

  return (
    <Box>
      <Box className="border-b">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Description" />
          <Tab label={`Reviews (${totalReviews})`} />
          <Tab label="Shipping & Returns" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Typography variant="body1" className="text-gray-600 whitespace-pre-line">
          {product.description}
        </Typography>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Stack spacing={4}>
          <Box>
            <Typography variant="h6" className="mb-4">
              Product Reviews
            </Typography>
            
            <Stack direction="row" alignItems="center" spacing={1} className="mb-4">
              <Rating value={totalRating} precision={0.1} readOnly size="large" />
              <Typography variant="h5" component="span">
                {totalRating.toFixed(1)}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                ({totalReviews} reviews)
              </Typography>
            </Stack>

            {/* Review Form */}
            <Paper className="p-4 mb-6">
              <Typography variant="subtitle1" className="mb-3">
                Write a Review
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="body2" className="mb-1">
                    Rating
                  </Typography>
                  <Rating
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                  />
                </Box>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Write your review here..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />
                <Box>
                  <Button
                    variant="contained"
                    className="bg-primary hover:bg-primary-dark"
                    onClick={handleSubmitReview}
                    startIcon={<Icon icon={messageSquareFill} />}
                  >
                    Post Review
                  </Button>
                </Box>
              </Stack>
            </Paper>

            {/* Review List */}
            <Stack spacing={3}>
              {/* Sample review - Replace with actual reviews */}
              <Paper className="p-4">
                <Stack direction="row" spacing={2} className="mb-2">
                  <Avatar>J</Avatar>
                  <Box>
                    <Typography variant="subtitle2">John Doe</Typography>
                    <Typography variant="caption" className="text-gray-600">
                      2 days ago
                    </Typography>
                  </Box>
                </Stack>
                <Rating value={5} size="small" readOnly className="mb-2" />
                <Typography variant="body2">
                  Great product! Exactly as described and excellent quality.
                </Typography>
              </Paper>
            </Stack>
          </Box>
        </Stack>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h6" className="mb-2">
              Shipping Information
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              • Free shipping on orders above ₹499<br />
              • Standard delivery: 3-5 business days<br />
              • Express delivery available for select locations
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" className="mb-2">
              Return Policy
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              • Easy returns within 7 days of delivery<br />
              • Items must be unused and in original packaging<br />
              • Return shipping cost may apply
            </Typography>
          </Box>
        </Stack>
      </TabPanel>
    </Box>
  );
}
