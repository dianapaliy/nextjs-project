import { getPostsData } from "@/src/lib/posts";

// запрашиваем данные второй раз, но fetch будет только 1
export default async function Posts2() {
  const res = await getPostsData('Memoization');
  
  return (
    <div>
      <h1>{res.length}</h1>
    </div>
  );
}