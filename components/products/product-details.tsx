'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProductDetails as ProductDetailsType, ProductVariant } from '@/lib/shopify/types';
import { ProductImage } from './product-image';
import { ProductPrice } from './product-price';
import { ProductDescription } from './product-description';
import { ProductVariants } from './product-variants';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/hooks/use-cart';

interface ProductDetailsProps {
  product: ProductDetailsType;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const mainImage = product.images.nodes[0];
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [vinNumber, setVinNumber] = useState<string | undefined>();
  const [clearSelections, setClearSelections] = useState(false);
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
      setClearSelections(true);
      setTimeout(() => setClearSelections(false), 100);
    }
  };

  const isButtonDisabled = () => {
    if (product.variants.nodes.length > 1 && !selectedVariant) return true;
    if (!vinNumber) return true;
    return false;
  };

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* Left Column - Image */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800">
            <ProductImage
              src={mainImage.url}
              alt={mainImage.altText || product.title}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
          
          {/* Additional Images */}
          <div className="grid grid-cols-4 gap-4">
            {product.images.nodes.slice(1, 5).map((image, index) => (
              <div 
                key={image.url}
                className="aspect-square rounded-lg overflow-hidden border border-gray-800 cursor-pointer hover:border-red-500 transition-colors"
              >
                <ProductImage
                  src={image.url}
                  alt={image.altText || `${product.title} view ${index + 2}`}
                  sizes="(max-width: 768px) 25vw, 15vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
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

          {/* Variants */}
          <ProductVariants
            variants={product.variants.nodes}
            onVariantSelect={handleVariantSelect}
            clearSelections={clearSelections}
          />

          {/* Action Button */}
          <Button 
            size="lg" 
            className="w-full bg-red-500 hover:bg-red-600"
            disabled={isButtonDisabled()}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </motion.div>
    </div>
  );
}