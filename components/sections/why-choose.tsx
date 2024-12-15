'use client';

import { motion } from 'framer-motion';
import { Wrench, Map, CheckCircle, Timer } from 'lucide-react';

export function WhyChoose() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose FSC Map Codes?
          </h2>
          <p className="text-xl text-gray-400 mb-4">
            Seamless, secure navigation updates tailored to your BMW
          </p>
          <p className="text-lg text-gray-400">
            FSC Map Codes ensure seamless, secure navigation updates tailored to your BMW, providing the latest maps with ease and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800"
          >
            <Wrench className="w-12 h-12 text-[#ff3e3e] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">EASY INSTALLATION:</h3>
            <p className="text-gray-400">FSC Map Codes make the map update process quick and straightforward, saving you time and effort.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800"
          >
            <Map className="w-12 h-12 text-[#ff3e3e] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">LATEST MAP DATA:</h3>
            <p className="text-gray-400">Keep your navigation system current with the newest road data, ensuring you&apos;re always on the right path.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800"
          >
            <CheckCircle className="w-12 h-12 text-[#ff3e3e] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">GUARANTEED COMPATIBILITY:</h3>
            <p className="text-gray-400">FSC Map Codes are generated specifically for your VIN number, ensuring a reliable and error-free update process.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800"
          >
            <Timer className="w-12 h-12 text-[#ff3e3e] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">QUICK AVAILABILITY:</h3>
            <p className="text-gray-400">Receive your BMW Navigation Update fast, allowing you to update your navigation system without long waiting times.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}