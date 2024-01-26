import { singlePost } from '@/lib/markdown'

async function getPosts(slug) {
  const postData = singlePost(slug)
  return postData
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPosts(params.slug)

  if (postData.notFound) {
    // Render a not-found message or component
    return (
      <main className="px-16 py-10 flex flex-col content-center justify-center flex-wrap">
        <h2>Post Not Found</h2>
        <p>The requested post could not be found.</p>
      </main>
    )
  }

  // Normal rendering for when the post exists
  return (
    <main className="px-16 py-10 flex flex-col content-center justify-center flex-wrap">
      <h2>{postData.title}</h2>
      <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
    </main>    
  )
}
