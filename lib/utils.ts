import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number,
  options: {
    currency?: 'GBP' | 'EUR' | 'USD';
    notation?: Intl.NumberFormatOptions['notation'];
  } = {}
) {
  const { currency = 'GBP', notation = 'standard' } = options;

  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency,
    notation,
  }).format(price);
}

export function getNavigationUrl(shopifyUrl: string): string {
  try {
    // Handle relative URLs
    if (shopifyUrl.startsWith('/')) {
      const path = shopifyUrl.toLowerCase();
      
      // Handle collections and products
      if (path.startsWith('/collections/')) {
        return `/collections/${path.split('/collections/')[1]}`;
      }
      if (path.startsWith('/products/')) {
        return `/products/${path.split('/products/')[1]}`;
      }
      
      // Handle home page
      if (path === '/') {
        return '/';
      }
      
      // Handle other pages
      return path;
    }

    // Handle full URLs
    const url = new URL(shopifyUrl);
    return getNavigationUrl(url.pathname);
  } catch {
    // If URL parsing fails, return home
    return '/';
  }
}