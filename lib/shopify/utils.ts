import { SHOPIFY_STOREFRONT_TOKEN, SHOPIFY_STOREFRONT_URL } from './constants';
import { CartItem } from './types';

interface ShopifyResponse<T = any> {
  data: T;
  errors?: Array<{ message: string }>;
}

interface CheckoutCreateResponse {
  checkoutCreate: {
    checkout: {
      webUrl: string;
    };
    checkoutUserErrors: Array<{
      message: string;
      field: string[];
    }>;
  };
}

export const shopifyFetch = async <T>({
  query,
  variables,
  cache = 'force-cache',
}: {
  query: string;
  variables?: any;
  cache?: RequestCache;
}): Promise<{ status: number; body: ShopifyResponse<T> }> => {
  try {
    const result = await fetch(SHOPIFY_STOREFRONT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      cache,
      next: { revalidate: 900 }, // Revalidate every 15 minutes
    });

    const body = await result.json();

    if (body.errors) {
      throw new Error(body.errors[0].message);
    }

    return {
      status: result.status,
      body,
    };
  } catch (e) {
    console.error('Error fetching from Shopify:', e);
    throw new Error(e instanceof Error ? e.message : 'Failed to fetch from Shopify');
  }
};

export const createCheckout = async (items: CartItem[]) => {
  const query = `
    mutation createCheckout($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout {
          webUrl
        }
        checkoutUserErrors {
          message
          field
        }
      }
    }
  `;

  const lineItems = items.map(item => ({
    variantId: item.variantId,
    quantity: item.quantity,
    customAttributes: item.vinNumber ? [
      {
        key: "VIN Number",
        value: item.vinNumber
      }
    ] : []
  }));

  const variables = {
    input: {
      lineItems,
      customAttributes: [
        {
          key: "Source",
          value: "Website"
        }
      ]
    }
  };

  try {
    const response = await shopifyFetch<CheckoutCreateResponse>({
      query,
      variables,
      cache: 'no-store'
    });

    if (!response.body.data?.checkoutCreate?.checkout?.webUrl) {
      throw new Error('Invalid checkout response');
    }

    return response.body.data.checkoutCreate.checkout.webUrl;
  } catch (error) {
    console.error('Error creating checkout:', error);
    throw error;
  }
};