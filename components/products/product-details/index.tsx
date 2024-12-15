'use client';

import { ProductDetails as ProductDetailsType } from '@/lib/shopify/types';
import { ProductGallery } from './product-gallery';
import { ProductInfo } from './product-info';

interface ProductDetailsProps {
  product: ProductDetailsType;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div 
      className="max-w-7xl mx-auto"
      style={{ 
        contentVisibility: 'auto',
        containIntrinsicSize: '0 800px'
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProductGallery images={product.images.nodes} title={product.title} />
        <ProductInfo product={product} />
      </div>
    </div>
  );
}