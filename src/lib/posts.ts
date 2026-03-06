export async function getPostsData(source?:string, revalidate?: number) {
  console.log(`Fetching posts from ${source}`);

  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: revalidate ?? false }
  });

  if (!res.ok) throw new Error('Failed to fetch');

  return res.json();
}