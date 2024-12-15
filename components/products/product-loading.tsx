export function ProductLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="aspect-square rounded-lg bg-white/5 animate-pulse" />
      <div className="space-y-4">
        <div className="h-10 bg-white/5 rounded animate-pulse" />
        <div className="h-8 w-24 bg-white/5 rounded animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 bg-white/5 rounded animate-pulse" />
          <div className="h-4 bg-white/5 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-white/5 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}