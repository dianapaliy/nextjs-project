"use client";

import Link from "next/link";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-2">Фильм не найден</h1>
      {error && <p className="text-sm text-gray-500">{error.message}</p>}
      <Link
        href="/movies"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
