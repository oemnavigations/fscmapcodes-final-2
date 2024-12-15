'use client';

import { HERO_TEXT } from './hero-constants';

export function HeroTitle() {
  return (
    <div className="space-y-4 text-center">
      <div className="inline-block">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          {HERO_TEXT.title}
          <span className="block text-[#ff3e3e] mt-2">
            {HERO_TEXT.subtitle}
          </span>
        </h1>
      </div>
      <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
        {HERO_TEXT.description}
      </p>
    </div>
  );
}