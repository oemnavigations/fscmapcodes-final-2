import { IMGIX_DOMAIN } from './constants/imgix';

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export default function imageLoader({ src, width, quality = 75 }: ImageLoaderProps): string {
  // Handle Shopify CDN images
  if (src.includes('cdn.shopify.com') || src.includes(IMGIX_DOMAIN)) {
    // Extract the path from URL
    const path = src.split('/files/')[1];
    if (!path) return src;

    // Construct Imgix URL with optimizations
    const params = new URLSearchParams({
      w: width.toString(),
      q: quality.toString(),
      auto: 'format,compress',
      fit: 'max',
    });

    return `https://${IMGIX_DOMAIN}/s/files/1/0908/3535/3926/files/${path}${src.includes('?') ? '&' : '?'}${params.toString()}`;
  }
  
  // Handle other images (fallback)
  return src;
}