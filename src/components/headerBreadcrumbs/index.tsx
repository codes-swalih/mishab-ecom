"use client";

import React from 'react';
import Link from 'next/link';
import { Box, Breadcrumbs, Container, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';

interface LinkType {
  name: string;
  href?: string;
}

interface Props {
  links: LinkType[];
  heading?: string;
}

export default function HeaderBreadcrumbs({ links, heading }: Props) {
  return (
    <Box className="py-8">
      <Container maxWidth="xl">
        <Box className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {heading && (
            <Typography variant="h4" component="h1" className="text-2xl md:text-3xl font-bold">
              {heading}
            </Typography>
          )}

          <Breadcrumbs
            separator={
              <Icon
                icon={arrowIosForwardFill}
                className="w-4 h-4 text-gray-400"
              />
            }
            className="text-sm"
          >
            {links.map((link, index) => {
              const isLast = index === links.length - 1;

              return isLast ? (
                <Typography
                  key={link.name}
                  className="text-gray-600 font-medium"
                >
                  {link.name}
                </Typography>
              ) : (
                <Link
                  key={link.name}
                  href={link.href || '#'}
                  className="text-primary hover:underline"
                >
                  {link.name}
                </Link>
              );
            })}
          </Breadcrumbs>
        </Box>
      </Container>
    </Box>
  );
}
