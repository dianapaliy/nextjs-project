import moviesPosters, { MoviesPoster } from "../data";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function MoviesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie: MoviesPoster | undefined = moviesPosters.find(
    (movie: MoviesPoster) => movie.id === id
  );

  if (!movie) notFound();

  return (
    <main className="container pl-10 pr-10 mt-10">
      <div className="flex gap-4">
        <Image
          src={movie.src}
          alt={movie.title}
          width={300}
          height={450}
          className="object-cover"
        />
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-4">
            {movie.title}
          </h1>
          <p className="text-sm mt-2 text-gray-500">Год выпуска: {movie.year}</p>
          <p className="text-sm mt-2 text-gray-500">Рейтинг: {movie.rating}/10</p>
          <p className="text-sm mt-2 text-500">{movie.description}</p>
        </div>
      </div>
    </main>
  );
}
