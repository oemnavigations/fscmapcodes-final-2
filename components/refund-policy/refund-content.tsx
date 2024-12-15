'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, AlertCircle, HelpCircle, Mail } from 'lucide-react';

export function RefundContent() {
  const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-red-500/10">
      {children}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
        Refund and Returns Policy
      </h1>
      <p className="text-gray-400 text-center mb-12">
        Our commitment to transparency and customer satisfaction
      </p>

      <div className="space-y-8">
        {/* Digital Products Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-8">
          <div className="flex items-start gap-6">
            <IconWrapper>
              <ShieldCheck className="w-6 h-6 text-[#ff3e3e]" />
            </IconWrapper>
            <div className="flex-1 text-gray-300">
              <h2 className="text-xl font-semibold text-white mb-4">Digital Products</h2>
              <p>Due to the nature of our digital products (FSC codes and map updates), we generally do not offer refunds once the product has been delivered. This is because our products are digital activation codes that cannot be returned or reused once provided.</p>
            </div>
          </div>
        </div>

        {/* Before Purchase Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-8">
          <div className="flex items-start gap-6">
            <IconWrapper>
              <AlertCircle className="w-6 h-6 text-[#ff3e3e]" />
            </IconWrapper>
            <div className="flex-1 text-gray-300">
              <h2 className="text-xl font-semibold text-white mb-4">Before Making a Purchase</h2>
              <p className="mb-4">We strongly recommend that you:</p>
              <ul className="list-disc pl-4 space-y-2">
                <li>Carefully read the product description and compatibility requirements</li>
                <li>Verify your vehicle&apos;s specifications and requirements</li>
                <li>Contact us if you have any questions about compatibility</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Exceptions Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-8">
          <div className="flex items-start gap-6">
            <IconWrapper>
              <HelpCircle className="w-6 h-6 text-[#ff3e3e]" />
            </IconWrapper>
            <div className="flex-1 text-gray-300">
              <h2 className="text-xl font-semibold text-white mb-4">Exceptions</h2>
              <p className="mb-4">Refunds may be considered in exceptional circumstances:</p>
              <ul className="list-disc pl-4 space-y-2">
                <li>If the product was not delivered</li>
                <li>If the product is proven to be incompatible with your vehicle (subject to verification)</li>
                <li>If there are technical issues that we cannot resolve</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-8">
          <div className="flex items-start gap-6">
            <IconWrapper>
              <Mail className="w-6 h-6 text-[#ff3e3e]" />
            </IconWrapper>
            <div className="flex-1 text-gray-300">
              <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
              <p>If you have any questions about our refund policy or need to discuss a specific situation, please contact us at info@fscmapcodes.com.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}