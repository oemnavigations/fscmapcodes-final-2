'use client';

import { ProductDetails, ProductVariant } from '@/lib/shopify/types';
import { ProductPrice } from '../product-price';
import { ProductDescription } from '../product-description';
import { ProductVariants } from '../product-variants';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/hooks/use-cart';
import { useState } from 'react';

interface ProductInfoProps {
  product: ProductDetails;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [vinNumber, setVinNumber] = useState<string | undefined>();
  const { addToCart } = useCart();

  const handleVariantSelect = (variant: ProductVariant, vin?: string) => {
    setSelectedVariant(variant);
    setVinNumber(vin);
  };

  const handleAddToCart = () => {
    if (selectedVariant && vinNumber) {
      addToCart(product, selectedVariant, vinNumber);
      setSelectedVariant(null);
      setVinNumber(undefined);
    }
  };

  return (
    <div 
      className="space-y-8"
      style={{ 
        contentVisibility: 'auto',
        containIntrinsicSize: '0 600px'
      }}
    >
      <div>
        <h1 
          className="text-3xl lg:text-4xl font-bold text-white mb-4"
          style={{
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}
        >
          {product.title}
        </h1>
        <ProductPrice
          amount={selectedVariant?.price.amount || product.priceRange.minVariantPrice.amount}
          className="text-3xl font-bold text-red-500"
        />
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        <ProductDescription html={product.descriptionHtml} />
      </div>

      <ProductVariants
        variants={product.variants.nodes}
        onVariantSelect={handleVariantSelect}
      />

      <Button 
        size="lg" 
        className="w-full bg-red-500 hover:bg-red-600"
        disabled={!selectedVariant || !vinNumber}
        onClick={handleAddToCart}
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        Add to Cart
      </Button>
    </div>
  );
}