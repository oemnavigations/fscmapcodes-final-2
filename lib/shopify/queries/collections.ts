export const COLLECTIONS_QUERY = `#graphql
  query GetCollections {
    collections(first: 20) {
      nodes {
        id
        handle
        title
      }
    }
  }
`;

export const COLLECTION_QUERY = `#graphql
  query GetCollection($handle: String!) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(first: 20) {
        nodes {
          id
          handle
          title
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          featuredImage {
            url
            altText
            width
            height
          }
        }
      }
    }
  }
`;