/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    domains: ['cdn.shopify.com', 'images.unsplash.com', 'oemnavigations.imgix.net'],
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    NEXT_PUBLIC_SHOPIFY_STOREFRONT_URL: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_URL,
    NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  trailingSlash: true,
};

module.exports = nextConfig;