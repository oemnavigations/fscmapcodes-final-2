'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Navigation } from './navigation';
import { MobileNavigation } from './mobile-navigation';
import { CartSheet } from '@/components/cart/cart-sheet';
import { MenuItem } from '@/lib/shopify/types';
import { Logo } from './logo';

interface HeaderProps {
  menu: MenuItem[];
}

export function Header({ menu }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            'rounded-xl backdrop-blur-md transition-all duration-300',
            scrolled
              ? 'bg-[#111111]/90 shadow-lg'
              : 'bg-gradient-to-r from-[#111111]/90 to-[#111111]/70'
          )}
        >
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <Logo />
              <div className="flex items-center space-x-4">
                <Navigation items={menu} />
                <CartSheet />
                <MobileNavigation items={menu} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}