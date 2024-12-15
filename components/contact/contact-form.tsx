'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Send } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Let Netlify handle the form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-8"
    >
      {submitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
          <p className="text-gray-400 mb-6">
            Your message has been sent. We&apos;ll get back to you soon.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            className="bg-red-500 hover:bg-red-600"
          >
            Send Another Message
          </Button>
        </motion.div>
      ) : (
        <form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          data-netlify="true"
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
        >
          {/* Netlify Form Requirements */}
          <input type="hidden" name="form-name" value="contact" />
          <div className="hidden">
            <input name="bot-field" />
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <Input
              id="name"
              name="name"
              required
              className="bg-gray-900 border-gray-700 text-white"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-gray-900 border-gray-700 text-white"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-white">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              className="bg-gray-900 border-gray-700 text-white min-h-[150px]"
              placeholder="Your message..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-500 hover:bg-red-600"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      )}
    </motion.div>
  );
}