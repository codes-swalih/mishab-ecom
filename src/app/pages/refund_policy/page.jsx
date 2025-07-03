// pages/refund-return-policy.js

import React from 'react';

// mui
import { Container, Box, Typography } from '@mui/material';

// components
import HeaderBreadcrumbs from 'src/components/headerBreadcrumbs';
import MenuOne from '@/components/Header/Menu/MenuOne';
import Footer from '@/components/Footer';

const RefundReturnPolicy = () => {
  const htmlFile = `
    <div class="prose max-w-none prose-p:leading-relaxed prose-headings:scroll-mt-28 prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-neutral-900 dark:prose-headings:text-white prose-a:font-semibold prose-a:no-underline hover:prose-a:underline dark:prose-a:text-sky-400 mt-8">
      <h1>Refund and Return Policy</h1>
      <p>Thank you for shopping at shoppinglala. If you are not entirely satisfied with your purchase, we're here to help.</p>

      <h2>Returns</h2>
      <p>You have 7 calendar days to return an item from the date you received it. To be eligible for a return, your
      item must be unused and in the same condition that you received it. Your item must be in the original packaging
      and you need to have the receipt or proof of purchase.</p>

      <h2>Refunds</h2>
      <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will
      immediately notify you on the status of your refund after inspecting the item.</p>
      <p>If your return is approved, we will initiate a refund to your credit card (or original method of payment). You
      will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>

      <h2>Shipping</h2>
      <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are
      non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions on how to return your item to us, contact us at support@shoppinglala.in.</p>
    </div>
  `;

  return (
    <>
      <MenuOne props="bg-white"/>
      <Container maxWidth="xl" sx={{ mt: 6, mb: 6 }}>
        <HeaderBreadcrumbs
          heading="Refund and Return Policy"
          links={[
            {
              name: 'Home',
              href: '/'
            },
            {
              name: 'Refund and Return Policy'
            }
          ]}
        />
        <Box
          sx={{
            mt: 4,
            px: { xs: 0, md: 4 },
            '& h1': {
              fontSize: '2.25rem',
              fontWeight: 700,
              mb: 2
            },
            '& h2': {
              fontSize: '1.5rem',
              fontWeight: 600,
              mt: 4,
              mb: 2
            },
            '& p': {
              fontSize: '1rem',
              mb: 2,
              color: '#444'
            },
            '& ul': {
              pl: 3,
              mb: 2
            },
            '& li': {
              fontSize: '1rem',
              mb: 1
            },
            '& a': {
              color: '#1976d2',
              textDecoration: 'none'
            }
          }}
          dangerouslySetInnerHTML={{ __html: htmlFile }}
        ></Box>
      </Container>
      <Footer />
    </>
  );
};

export default RefundReturnPolicy;
