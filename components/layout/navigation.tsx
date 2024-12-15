'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from '@/lib/shopify/types';
import { cn, getNavigationUrl } from '@/lib/utils';

interface NavigationProps {
  items: MenuItem[];
}

export function Navigation({ items }: NavigationProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center space-x-8">
        {items.map((item) => (
          <li key={item.id} className="relative">
            {item.items?.length > 0 ? (
              <button
                className="flex items-center space-x-1 text-white hover:text-red-400 transition-colors"
                onMouseEnter={() => setActiveMenu(item.id)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <span>{item.title}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href={getNavigationUrl(item.url)}
                className="text-white hover:text-red-400 transition-colors"
              >
                {item.title}
              </Link>
            )}

            <AnimatePresence>
              {activeMenu === item.id && item.items?.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 py-2 bg-black/90 backdrop-blur-md rounded-lg shadow-xl"
                  onMouseEnter={() => setActiveMenu(item.id)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={getNavigationUrl(subItem.url)}
                      className="block px-4 py-2 text-sm text-white hover:bg-red-500/20 hover:text-red-400 transition-colors"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
        <li>
          <Link
            href="/contact"
            className="text-white hover:text-red-400 transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}