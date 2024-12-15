'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@/lib/constants/images';
import { useMounted } from '@/lib/hooks/use-mounted';
import { constructImgixUrl } from '@/lib/utils/imgix';

export function Logo() {
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-40 h-8 bg-gray-800 animate-pulse rounded" />
      </div>
    );
  }

  const logoUrl = constructImgixUrl(IMAGES.LOGO.url);

  return (
    <Link 
      href="/" 
      className="flex items-center space-x-2 text-white hover:opacity-90 transition-opacity"
      aria-label="FSC MAP CODES - Home"
    >
      <div className="relative w-40 h-8">
        <Image
          src={logoUrl}
          alt={IMAGES.LOGO.alt}
          width={IMAGES.LOGO.width}
          height={IMAGES.LOGO.height}
          className="object-contain"
          priority
          quality={90}
        />
      </div>
    </Link>
  );
}