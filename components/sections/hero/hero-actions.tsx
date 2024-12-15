'use client';

import { motion } from 'framer-motion';

interface HeroActionsProps {
  onSectionClick: (e: React.MouseEvent<HTMLAnchorElement>, section: string) => void;
}

export function HeroActions({ onSectionClick }: HeroActionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
    >
      <a 
        href="#products"
        onClick={(e) => onSectionClick(e, 'products')}
        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#ff3e3e] rounded-xl hover:bg-[#ff2525] transition-colors duration-300"
      >
        View Products
      </a>
      <a 
        href="#faq"
        onClick={(e) => onSectionClick(e, 'faq')}
        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#1E1E1E] rounded-xl hover:bg-[#2a2a2a] transition-colors duration-300 border border-[#333333]"
      >
        Learn More
      </a>
    </motion.div>
  );
}