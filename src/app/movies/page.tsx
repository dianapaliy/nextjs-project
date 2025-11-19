import Image from "next/image";
import Link from "next/link";
import { MoviesPoster } from "./data";

export default async function MoviesPage() {
  const movies = await fetch("http://localhost:3000/api/movies");
  const moviesPosters: MoviesPoster[] = await movies.json();

  return (
    <main className="container mx-auto">
      <h1 className="text-6xl font-bold text-center mt-10">Фильмы</h1>

      <div className="grid grid-cols-3 gap-4 mt-10 max-w-4xl mx-auto">
        {moviesPosters.map(({ id, src, title, year, rating }) => (
          <Link
            key={id}
            href={`/movies/${id}`}
            className="block hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src={src}
              alt={title}
              width={200}
              height={300}
              className="w-full object-cover"
            />
            <p className="text-center text-md mt-2 font-bold">
              {title}{" "}
              <span className="text-sm text-gray-500">({rating}/10)</span>
            </p>
            <p className="text-center text-sm mt-2 text-gray-500">{year}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
