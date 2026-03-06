import { getPostsData } from "@/src/lib/posts";

// запрашиваем данные первый раз
export default async function Posts1() {
  const res = await getPostsData('Memoization');

  return (
    <div>
      <h1>{res.length}</h1>
    </div>
  );
}
