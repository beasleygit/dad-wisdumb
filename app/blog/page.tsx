import { getSortedPostsData } from "@/lib/markdown"

async function getPosts() {
  const allPostsData = getSortedPostsData()

  return allPostsData
}

export default async function Posts() {
  const allPostsData = await getPosts()
  return (
    <main className="px-16 py-10 flex flex-col content-center justify-center flex-wrap">
      <h2>Blog</h2>
      <ul>
      { allPostsData.map((postData) => 
        <li key={postData.id}>{postData.title}</li>
      )}
      </ul>
    </main>    
  )
}