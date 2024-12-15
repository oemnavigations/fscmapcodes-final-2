import { Suspense } from 'react';
import { ProductDetails } from '@/components/products/product-details';
import { ProductLoading } from '@/components/products/product-loading';
import { notFound } from 'next/navigation';
import { getProduct, getProducts, getCollections, getCollection } from '@/lib/shopify';

interface ProductPageProps {
  params: {
    handle: string;
  };
}

export async function generateStaticParams() {
  try {
    // Get products from main product list
    const products = await getProducts();
    const productHandles = products.map(product => ({
      handle: product.handle
    }));

    // Get products from collections
    const collections = await getCollections();
    const collectionProducts = await Promise.all(
      collections.map(async (collection) => {
        const collectionData = await getCollection(collection.handle);
        return collectionData?.products.nodes || [];
      })
    );

    // Combine all product handles and remove duplicates
    const collectionProductHandles = collectionProducts
      .flat()
      .map(product => ({
        handle: product.handle
      }));

    const allHandles = [...productHandles, ...collectionProductHandles];
    const uniqueHandles = Array.from(
      new Set(allHandles.map(item => item.handle))
    ).map(handle => ({ handle }));

    return uniqueHandles;
  } catch (error) {
    console.error('Error generating product paths:', error);
    return [];
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  try {
    const product = await getProduct(params.handle);

    if (!product) {
      notFound();
    }

    return (
      <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <Suspense fallback={<ProductLoading />}>
            <ProductDetails product={product} />
          </Suspense>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error rendering product page:', error);
    notFound();
  }
}