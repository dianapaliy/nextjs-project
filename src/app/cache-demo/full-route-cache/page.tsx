import { getPostsData } from "@/src/lib/posts";

async function getRandomData() {
  return Math.random();
}

// Число будет одинаковое, если обновлять страницу в течение 60 сек

export default async function FullRouteCachePage() {
  const posts = await getPostsData("Full route cache", 60);
  const randomNumber = await getRandomData();

  return (
    <div>
      <h1>Посты: {posts.length}</h1>
      <p>Число: {randomNumber}</p>
    </div>
  );
}
