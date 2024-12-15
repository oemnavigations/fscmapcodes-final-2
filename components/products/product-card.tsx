'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Product } from '@/lib/shopify/types';
import Link from 'next/link';
import { ProductImage } from './product-image';
import { ProductPrice } from './product-price';
import { ProductDescription } from './product-description';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { featuredImage, title, descriptionHtml, priceRange, handle } = product;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="h-full"
    >
      <Link href={`/products/${handle}`} className="block h-full">
        <Card className="h-full overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-red-900/20">
          <div className="relative">
            <ProductImage
              src={featuredImage.url}
              alt={featuredImage.altText || `Product image of ${title}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <ProductDescription
              html={descriptionHtml}
              className="text-sm text-gray-400 mb-4 line-clamp-2 prose prose-invert"
            />
            <ProductPrice
              amount={priceRange.minVariantPrice.amount}
              className="text-red-500 font-semibold"
            />
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}