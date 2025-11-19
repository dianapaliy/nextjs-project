import moviesPosters, { MoviesPoster } from "../../data";

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // эмулируем задержку
  await new Promise((r) => setTimeout(r, 1500));

  const movie: MoviesPoster | undefined = moviesPosters.find(
    (movie) => movie.id === id
  );

  if (!movie) return;

  if (!movie.reviews) {
    return <div>Пока нет отзывов</div>;
  }

  return (
    <div className="mt-10 max-w-2xl pl-10 pr-10">
      <h2 className="text-2xl font-bold mb-4">Отзывы</h2>

      <ul>
        {movie.reviews.map((review) => (
          <li key={review.id} className="mb-4 border-b pb-4">
            <h3 className="text-lg font-bold mb-2">
              Пользователь: {review.name}
            </h3>
            <p className="text-sm text-gray-500">Отзыв: {review.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
