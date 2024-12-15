'use client';

import { useMounted } from '@/lib/hooks/use-mounted';
import { HERO_TEXT } from './hero-constants';

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
    return null;
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]"
      style={{ contain: 'layout paint' }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{ 
          minHeight: '100vh',
          contentVisibility: 'auto',
          containIntrinsicSize: '0 100vh'
        }}
      >
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="https://oemnavigations.imgix.net/s/files/1/0908/3535/3926/files/mobile_-_bmw_map_update.webp?auto=format&w=750&q=75"
          />
          <source
            media="(min-width: 768px)"
            srcSet="https://oemnavigations.imgix.net/s/files/1/0908/3535/3926/files/bmw_map_update_fscmapcodes.webp?auto=format&w=1920&q=75"
          />
          <img
            src="https://oemnavigations.imgix.net/s/files/1/0908/3535/3926/files/bmw_map_update_fscmapcodes.webp?auto=format&w=1920&q=75"
            alt="BMW Navigation System"
            className="object-cover w-full h-full"
            loading="eager"
            style={{ 
              minHeight: '100vh',
              contentVisibility: 'auto',
              containIntrinsicSize: '0 100vh'
            }}
          />
        </picture>
      </div>

      {/* Content */}
      <div 
        className="container mx-auto px-4 relative z-10"
        style={{ 
          minHeight: '564px',
          contentVisibility: 'auto',
          containIntrinsicSize: '0 564px'
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                style={{ 
                  contentVisibility: 'auto',
                  containIntrinsicSize: '0 128px',
                  textRendering: 'optimizeLegibility',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              >
                <span className="inline-block">{HERO_TEXT.title}</span>
                <span className="block text-[#ff3e3e] mt-2">
                  {HERO_TEXT.subtitle}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                {HERO_TEXT.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Static Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <svg 
          className="w-8 h-8 text-[#ff3e3e]" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </div>
    </section>
  );
}