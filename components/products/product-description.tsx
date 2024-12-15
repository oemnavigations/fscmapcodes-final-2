'use client';

import { useMounted } from '@/lib/hooks/use-mounted';

interface ProductDescriptionProps {
  html: string;
  className?: string;
}

export function ProductDescription({ html, className }: ProductDescriptionProps) {
  const mounted = useMounted();

  if (!mounted) {
    return <div className={`${className} animate-pulse bg-gray-800 h-20 rounded`} />;
  }

  return (
    <div 
      className={`${className} text-white prose-invert max-w-none
        prose-p:text-white 
        prose-strong:text-white 
        prose-em:text-gray-200
        prose-headings:text-white 
        prose-li:text-white
        prose-ul:text-white
        prose-ol:text-white
        prose-blockquote:text-gray-200
        prose-blockquote:border-red-500
        prose-a:text-red-400 
        hover:prose-a:text-red-300
        prose-code:text-gray-200
        prose-pre:bg-gray-900
        prose-pre:text-gray-200
        prose-table:text-white
        prose-th:text-white
        prose-td:text-white`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}