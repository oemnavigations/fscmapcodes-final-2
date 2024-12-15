'use client';

import Image from 'next/image';

const HERO_IMAGE_URL = 'https://oemnavigations.imgix.net/s/files/1/0908/3535/3926/files/bmw_map_update_fscmapcodes.webp';

export function HeroImage() {
  return (
    <div className="absolute inset-0 z-0 opacity-10">
      <div className="relative w-full h-full">
        <Image
          src={HERO_IMAGE_URL}
          alt="BMW Navigation System"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </div>
  );
}