export interface Money {
  amount: string;
  currencyCode: string;
}

export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  title: string;
  price: string;
  image: string;
  quantity: number;
  vinNumber?: string;
}

export interface Image {
  url: string;
  altText: string;
  width: number;
  height: number;
}

export interface SelectedOption {
  name: string;
  value: string;
}

export interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

export interface ProductVariant {
  id: string;
  title: string;
  price: Money;
  selectedOptions: SelectedOption[];
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  priceRange: {
    minVariantPrice: Money;
    maxVariantPrice: Money;
  };
  featuredImage: Image;
  variants: {
    nodes: ProductVariant[];
  };
}

export interface ProductDetails extends Product {
  images: {
    nodes: Image[];
  };
}

export interface Collection {
  id: string;
  handle: string;
  title: string;
  description: string;
  products: {
    nodes: Product[];
  };
}

export interface CollectionItem {
  id: string;
  handle: string;
  title: string;
}

export interface MenuItem {
  id: string;
  title: string;
  url: string;
  items: MenuItem[];
}