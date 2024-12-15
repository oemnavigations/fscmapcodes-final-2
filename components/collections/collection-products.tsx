'use client';

import { motion } from 'framer-motion';
import { Product } from '@/lib/shopify/types';
import { ProductCard } from '@/components/products/product-card';

interface CollectionProductsProps {
  products: Product[];
}

export function CollectionProducts({ products }: CollectionProductsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
}