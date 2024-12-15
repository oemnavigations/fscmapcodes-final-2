import { Suspense } from 'react';
import { Hero } from '@/components/sections/hero';
import { WhyChoose } from '@/components/sections/why-choose';
import { ProductGrid } from '@/components/products/product-grid';
import { FAQ } from '@/components/sections/faq';
import { getProducts } from '@/lib/shopify';

export default async function Home() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 3); // Only show first 3 products

  return (
    <main className="min-h-screen">
      <Hero />
      <WhyChoose />
      
      {/* Featured Products Section */}
      <section className="py-20 bg-[#111111]" id="products">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Featured Products
            </h2>
            <div className="prose prose-lg prose-invert max-w-2xl mx-auto">
              <p className="text-gray-400">
                Enhance your driving experience with our premium BMW and MINI navigation updates. 
                We provide official map updates and FSC codes for all navigation systems, including 
                Next, Route, Motion, Premium, and Live maps. Our solutions ensure you always have 
                access to the latest roads, POIs, and routing improvements.
              </p>
            </div>
          </div>

          <Suspense fallback={<div className="text-white">Loading products...</div>}>
            <ProductGrid products={featuredProducts} />
          </Suspense>
        </div>
      </section>

      <FAQ />
    </main>
  );
}