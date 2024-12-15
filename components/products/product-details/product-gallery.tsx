'use client';

import { Image as ImageType } from '@/lib/shopify/types';
import { constructImgixUrl } from '@/lib/utils/imgix';
import Image from 'next/image';

interface ProductGalleryProps {
  images: ImageType[];
  title: string;
}

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const mainImage = images[0];
  const mainImageUrl = constructImgixUrl(mainImage.url);

  return (
    <div className="space-y-4">
      <div 
        className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800"
        style={{ 
          contentVisibility: 'auto',
          containIntrinsicSize: '0 500px'
        }}
      >
        <div className="relative aspect-square">
          <Image
            src={mainImageUrl}
            alt={mainImage.altText || title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            quality={90}
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {images.slice(1, 5).map((image, index) => (
          <div 
            key={image.url}
            className="aspect-square rounded-lg overflow-hidden border border-gray-800 cursor-pointer hover:border-red-500 transition-colors"
          >
            <Image
              src={constructImgixUrl(image.url)}
              alt={image.altText || `${title} view ${index + 2}`}
              width={200}
              height={200}
              sizes="(max-width: 768px) 25vw, 15vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}