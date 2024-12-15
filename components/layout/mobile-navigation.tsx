'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { MenuItem } from '@/lib/shopify/types';
import { Button } from '@/components/ui/button';
import { cn, getNavigationUrl } from '@/lib/utils';

interface MobileNavigationProps {
  items: MenuItem[];
}

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md mt-2 py-4 z-50"
            >
              <ul className="space-y-2 px-4">
                {items.map((item) => (
                  <li key={item.id}>
                    {item.items?.length > 0 ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full py-2 text-white"
                          onClick={() => setActiveSubmenu(activeSubmenu === item.id ? null : item.id)}
                        >
                          <span>{item.title}</span>
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform",
                            activeSubmenu === item.id && "rotate-180"
                          )} />
                        </button>
                        <AnimatePresence>
                          {activeSubmenu === item.id && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden"
                            >
                              <ul className="pl-4 space-y-2 py-2">
                                {item.items.map((subItem) => (
                                  <li key={subItem.id}>
                                    <Link
                                      href={getNavigationUrl(subItem.url)}
                                      className="block py-2 text-gray-300 hover:text-red-400"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {subItem.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={getNavigationUrl(item.url)}
                        className="block py-2 text-white hover:text-red-400"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="block py-2 text-white hover:text-red-400"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}