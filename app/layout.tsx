import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CartProvider } from '@/lib/hooks/use-cart';
import { getMenu } from '@/lib/shopify';

// Optimize font loading
const inter = Inter({ 
  subsets: ['latin'],
  display: 'optional', // Change from 'swap' to 'optional'
  preload: true,
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'FSCMAPCODE - BMW & MINI Navigation Updates',
  description: 'Premium Navigation Updates & Activations for BMW & MINI',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = await getMenu('main-menu');

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/_next/static/media/26a46d62cd723877-s.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Critical CSS for text rendering */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root { --font-inter: '__Inter_e66fe9', '__Inter_Fallback_e66fe9'; }
            h1, h2, h3 {
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              font-display: optional;
            }
          `
        }} />
      </head>
      <body className={inter.className}>
        <CartProvider>
          <Header menu={menu} />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}