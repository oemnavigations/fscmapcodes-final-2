export function LoadingProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-white/5 rounded-lg p-8 backdrop-blur-sm animate-pulse h-[400px]"
        />
      ))}
    </div>
  );
}