'use client';

import { useMounted } from '@/lib/hooks/use-mounted';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

// Preload critical hero text
const HERO_TEXT = {
  title: "Navigation Updates for",
  subtitle: "BMW & MINI",
  description: "Get the latest map updates and FSC codes for your vehicle"
} as const;

// Direct Imgix URL
const HERO_IMAGE_URL = 'https://oemnavigations.imgix.net/s/files/1/0908/3535/3926/files/bmw_map_update_fscmapcodes.webp';

export function Hero() {
  const mounted = useMounted();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!mounted) {
    return (
      <section className="min-h-screen bg-[#111111] pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-12 bg-white/10 rounded animate-pulse mb-6" />
            <div className="h-6 bg-white/10 rounded animate-pulse w-3/4 mx-auto" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src={HERO_IMAGE_URL}
          alt="BMW Navigation System"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {HERO_TEXT.title}
                <span className="block text-[#ff3e3e] mt-2">
                  {HERO_TEXT.subtitle}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                {HERO_TEXT.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <a 
                href="#products"
                onClick={(e) => scrollToSection(e, 'products')}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#ff3e3e] rounded-xl hover:bg-[#ff2525] transition-colors duration-300"
              >
                View Products
              </a>
              <a 
                href="#faq"
                onClick={(e) => scrollToSection(e, 'faq')}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#1E1E1E] rounded-xl hover:bg-[#2a2a2a] transition-colors duration-300 border border-[#333333]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown className="w-8 h-8 text-[#ff3e3e]" />
      </div>
    </section>
  );
}