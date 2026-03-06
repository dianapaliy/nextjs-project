import { getPostsData } from "@/src/lib/posts";

export default async function DataCachePage() {
  // Указываем ревалидацию 10 секунд. В течение 10сек новых запросов не будет.
  const posts = await getPostsData("Data cache", 10);

  return (
    <div>
      <h1>Post 1: {posts.length}</h1>

      <p>Time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}
