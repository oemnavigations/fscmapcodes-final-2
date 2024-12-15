'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function HeroScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
    >
      <ChevronDown className="w-8 h-8 text-[#ff3e3e]" />
    </motion.div>
  );
}