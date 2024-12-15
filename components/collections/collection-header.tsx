'use client';

interface CollectionHeaderProps {
  title: string;
  description: string;
}

export function CollectionHeader({ title, description }: CollectionHeaderProps) {
  return (
    <div 
      className="mb-12 text-center"
      style={{ 
        contentVisibility: 'auto',
        containIntrinsicSize: '0 200px'
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-4xl font-bold text-white mb-6"
          style={{
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}
        >
          {title}
        </h1>
        {description && (
          <p className="text-gray-300 mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}