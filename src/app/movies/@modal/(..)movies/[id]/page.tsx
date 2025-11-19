import Image from "next/image";
import moviesPosters, { MoviesPoster } from "../../../data";
import Modal from "@/src/components/modal";

export default async function ModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie: MoviesPoster | undefined = moviesPosters.find(
    (movie: MoviesPoster) => movie.id === id
  );

  if (!movie) return;

  return (
    <Modal>
      <div className="bg-white p-3 flex gap-4">
        <Image
          src={movie.src}
          alt={movie.title}
          width={300}
          height={450}
          className="object-cover"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-2 text-black">
            {movie.title}{" "}
            <span className="text-sm text-gray-500">({movie.rating}/10)</span>
          </h2>
          <span className="text-sm text-gray-500">
            Год выпуска: {movie.year}
          </span>
          <p className="text-sm text-black mt-2">{movie.description}</p>
        </div>
      </div>
    </Modal>
  );
}
