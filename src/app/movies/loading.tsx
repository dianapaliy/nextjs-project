export default function Loading() {
  return (
    <main className="container mx-auto">
      <h1 className="text-6xl font-bold text-center mt-10">Фильмы</h1>

      <div className="grid grid-cols-3 gap-4 mt-10 max-w-4xl mx-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="w-full h-[300px] bg-gray-300 rounded-md" />
            <div className="h-4 mt-2 bg-gray-200 rounded w-3/4 mx-auto"></div>
            <div className="h-3 mt-1 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        ))}
      </div>
    </main>
  );
}
