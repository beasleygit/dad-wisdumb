import { singlePost } from '@/lib/markdown'
import { Container } from '../../components/container'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Link from 'next/link'


async function getPosts(slug: string) {
  const postData = singlePost(slug)
  return postData
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPosts(params.slug)

  if (postData.notFound) {
    // Render a not-found message or component
    return (
      <>
      <Header />
      <main>
        <Container>
          <h2>Post Not Found!</h2>
        </Container>          
      </main>
      <Footer />      
      </>
    )
  }

  // Normal rendering for when the post exists
  return (
      <>
      <Header text={postData.title} />
      <main>
        <Container>
          <h2>{postData.title}</h2>
          <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        </Container>          
      </main>
      <Footer />      
      </>
  )
}
