import moviesPosters, { MoviesPoster } from "../../data";

export default async function TrailerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // эмулируем задержку
  await new Promise((r) => setTimeout(r, 1000));

  const movie: MoviesPoster | undefined = moviesPosters.find(
    (movie) => movie.id === id
  );

  if (!movie) return;

  return (
    <div className="pl-10 pr-10 mt-10">
      <h2 className="text-2xl font-bold mb-2">Трейлер фильма {id}</h2>
      <p className="text-sm text-gray-500">тут допустим видео</p>
    </div>
  );
}
