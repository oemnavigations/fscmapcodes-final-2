export const dynamic = 'force-static';

import { ContactForm } from '@/components/contact/contact-form';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Contact Us
          </h1>
          <p className="text-gray-400 text-center mb-12">
            Have questions about our navigation updates or FSC codes? We&apos;re here to help.
          </p>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}