import { SHOPIFY_STOREFRONT_TOKEN, SHOPIFY_STOREFRONT_URL } from './constants';
import { Product, MenuItem, Collection, ProductDetails, CollectionItem } from './types';
import { shopifyFetch } from './utils';
import { 
  MENU_QUERY, 
  PRODUCTS_QUERY, 
  COLLECTION_QUERY, 
  PRODUCT_QUERY, 
  COLLECTIONS_QUERY 
} from './queries';

interface ProductsResponse {
  products: {
    nodes: Product[];
  };
}

interface CollectionsResponse {
  collections: {
    nodes: CollectionItem[];
  };
}

interface MenuResponse {
  menu?: {
    items: MenuItem[];
  };
}

interface CollectionResponse {
  collection: Collection;
}

interface ProductResponse {
  product: ProductDetails;
}

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await shopifyFetch<ProductsResponse>({
      query: PRODUCTS_QUERY,
      cache: 'no-store'
    });

    return res.body.data?.products.nodes || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getCollections(): Promise<CollectionItem[]> {
  try {
    const res = await shopifyFetch<CollectionsResponse>({
      query: COLLECTIONS_QUERY,
      cache: 'no-store'
    });

    return res.body.data?.collections.nodes || [];
  } catch (error) {
    console.error('Error fetching collections:', error);
    return [];
  }
}

export async function getMenu(handle: string): Promise<MenuItem[]> {
  try {
    const res = await shopifyFetch<MenuResponse>({
      query: MENU_QUERY,
      variables: {
        handle,
      },
      cache: 'no-store'
    });

    return res.body.data?.menu?.items || [];
  } catch (error) {
    console.error('Error fetching menu:', error);
    return [];
  }
}

export async function getCollection(handle: string): Promise<Collection | null> {
  try {
    const res = await shopifyFetch<CollectionResponse>({
      query: COLLECTION_QUERY,
      variables: {
        handle,
      },
      cache: 'no-store'
    });

    return res.body.data?.collection || null;
  } catch (error) {
    console.error('Error fetching collection:', error);
    return null;
  }
}

export async function getProduct(handle: string): Promise<ProductDetails | null> {
  try {
    const res = await shopifyFetch<ProductResponse>({
      query: PRODUCT_QUERY,
      variables: {
        handle,
      },
      cache: 'no-store'
    });

    return res.body.data?.product || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}