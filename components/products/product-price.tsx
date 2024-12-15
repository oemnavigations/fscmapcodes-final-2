'use client';

import { formatPrice } from '@/lib/utils';
import { useMounted } from '@/lib/hooks/use-mounted';

interface ProductPriceProps {
  amount: string;
  className?: string;
}

export function ProductPrice({ amount, className }: ProductPriceProps) {
  const mounted = useMounted();
  const price = formatPrice(parseFloat(amount));
  
  if (!mounted) {
    return <span className={className}>Loading...</span>;
  }

  return (
    <p className={className}>
      {price}
    </p>
  );
}