import { Suspense } from 'react';
import { getCollection, getCollections } from '@/lib/shopify';
import { CollectionHeader } from '@/components/collections/collection-header';
import { CollectionProducts } from '@/components/collections/collection-products';
import { LoadingProducts } from '@/components/collections/loading-products';
import { notFound } from 'next/navigation';

interface CollectionPageProps {
  params: {
    handle: string;
  };
}

export async function generateStaticParams() {
  try {
    const collections = await getCollections();
    
    // Filter out null or undefined values and ensure unique handles
    const validCollections = collections
      .filter(collection => collection && collection.handle)
      .map(collection => ({
        handle: collection.handle
      }));

    // Add any additional static collection paths if needed
    const additionalPaths = [
      { handle: 'all' },
      { handle: 'featured' }
    ];

    return [...validCollections, ...additionalPaths];
  } catch (error) {
    console.error('Error generating collection paths:', error);
    // Return at least the basic paths to prevent build failure
    return [
      { handle: 'all' },
      { handle: 'featured' }
    ];
  }
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  try {
    const collection = await getCollection(params.handle);

    if (!collection) {
      notFound();
    }

    return (
      <main className="min-h-screen pt-32 pb-20 bg-[#111111]">
        <div className="container mx-auto px-4">
          <CollectionHeader 
            title={collection.title} 
            description={collection.description} 
          />
          <Suspense fallback={<LoadingProducts />}>
            <CollectionProducts products={collection.products.nodes} />
          </Suspense>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error rendering collection page:', error);
    notFound();
  }
}