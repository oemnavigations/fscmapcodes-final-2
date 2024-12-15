'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export function ProductImage({
  src,
  alt,
  width,
  height,
  fill = false,
  sizes,
  priority = false,
  className,
}: ProductImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative aspect-square w-full ${isLoading ? 'animate-pulse bg-gray-800' : ''}`}>
      <Image
        src={src}
        alt={alt}
        fill={true}
        sizes={sizes}
        priority={priority}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}