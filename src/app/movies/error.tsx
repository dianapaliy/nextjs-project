"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error("Ошибка в компоненте:", error);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Ошибка</h1>
      {error && <p className="text-sm text-gray-500">{error.message}</p>}
      <button
        onClick={reset}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Попробовать снова
      </button>
    </div>
  );
}
