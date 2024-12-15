'use client';

import { motion } from 'framer-motion';
import { HeroTitle } from './hero-title';
import { HERO_TEXT } from './hero-constants';

export function HeroContent() {
  return (
    <div className="container mx-auto px-4 relative z-10 py-32">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <HeroTitle />
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            {HERO_TEXT.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}