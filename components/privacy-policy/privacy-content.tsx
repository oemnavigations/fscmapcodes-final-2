'use client';

import { motion } from 'framer-motion';
import { Shield, Database, Lock, Mail } from 'lucide-react';

export function PrivacyContent() {
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
        Privacy Policy
      </h1>
      <p className="text-gray-400 text-center mb-12">
        Your privacy is important to us. Learn how we protect and manage your personal information.
      </p>

      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-8">
          <div className="flex items-start gap-6">
            <IconWrapper>
              <Shield className="w-6 h-6 text-[#ff3e3e]" />
            </IconWrapper>
            <div className="flex-1 text-gray-300">
              <h2 className="text-xl font-semibold text-white mb-4">Welcome to FSC MAP CODES</h2>
              <p className="mb-4">
                This Privacy Policy explains how we collect, use, and protect your information when you visit our website or purchase our digital products. By using our site, you agree to the terms of this Privacy Policy. If you do not agree, please do not use FSC MAP CODES.
              </p>
            </div>
          </div>
        </div>

        {/* Information Collection Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-8">
          <div className="flex items-start gap-6">
            <IconWrapper>
              <Database className="w-6 h-6 text-[#ff3e3e]" />
            </IconWrapper>
            <div className="flex-1 text-gray-300">
              <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  <strong className="text-white">Automatically Collected Information:</strong> When you visit our website, we automatically gather certain details about your device, such as your web browser, IP address, time zone, and some cookies installed on your device.
                </li>
                <li>
                  <strong className="text-white">Order Information:</strong> When you make a purchase or attempt to do so, we collect personal details such as your name, billing address, email address, and payment information.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Usage & Security Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-8">
          <div className="flex items-start gap-6">
            <IconWrapper>
              <Lock className="w-6 h-6 text-[#ff3e3e]" />
            </IconWrapper>
            <div className="flex-1 text-gray-300">
              <h2 className="text-xl font-semibold text-white mb-4">How We Use & Protect Your Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">How We Use Your Information</h3>
                  <p>We use Order Information to process and fulfill your orders, including payment processing, product delivery via email, and sending order confirmations.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">How We Share Your Information</h3>
                  <p>We do not sell, trade, or rent your personal information. We may share your data with third-party vendors to process orders, payments, and provide technical support.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Security</h3>
                  <p>We prioritize the security of your personal information and use appropriate measures to prevent unauthorized access.</p>
                </div>
              </div>
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
              <p>If you have any questions or feedback about our Privacy Policy, please reach out to us at info@fscmapcodes.com.</p>
              <p className="mt-4">Thank you for trusting FSC MAP CODES. We appreciate your business and commitment to privacy.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}