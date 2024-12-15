export function constructImgixUrl(url: string): string {
  try {
    // Check if already an Imgix URL
    if (url.includes('oemnavigations.imgix.net')) {
      return url;
    }

    // For Shopify URLs, extract the path
    if (url.includes('cdn.shopify.com')) {
      const path = url.split('/files/')[1];
      if (!path) return url;
      return `https://oemnavigations.imgix.net/s/files/1/0908/3535/3926/files/${path}`;
    }

    return url;
  } catch (error) {
    console.error('Error constructing Imgix URL:', error);
    return url;
  }
}