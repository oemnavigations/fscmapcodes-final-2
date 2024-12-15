'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#111111] to-black border-t border-gray-800/50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"
          >
            {/* WhatsApp */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400 hover:text-white transition-colors group whitespace-nowrap">
              <Phone className="w-4 h-4 text-[#ff3e3e] group-hover:scale-110 transition-transform shrink-0" />
              <span className="text-sm">WhatsApp: +44 7961 864 553</span>
            </div>

            {/* Email */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400 hover:text-white transition-colors group whitespace-nowrap">
              <Mail className="w-4 h-4 text-[#ff3e3e] group-hover:scale-110 transition-transform shrink-0" />
              <span className="text-sm">info@fscmapcodes.com</span>
            </div>

            {/* Address */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-400 group whitespace-nowrap">
              <MapPin className="w-4 h-4 text-[#ff3e3e] group-hover:scale-110 transition-transform shrink-0" />
              <span className="text-sm">64A Pasture Road, Goole, DN14 6HD</span>
            </div>
          </motion.div>

          {/* Links & Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-8 pt-8 border-t border-gray-800/50"
          >
            <div className="flex justify-center space-x-6 mb-4">
              <Link 
                href="/refund-policy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Refund Policy
              </Link>
              <Link 
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
              Copyright © 2024 FSC MAP CODES
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}