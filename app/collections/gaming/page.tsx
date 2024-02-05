import { getSortedPostsData } from '@/lib/markdown'
import { Container } from '../../components/container'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Link from 'next/link'

async function getPosts() {
  const categoryFilter = 'gaming'
  const allPostsData = getSortedPostsData(categoryFilter)
  return allPostsData
}

export default async function Posts() {
  const allPostsData = await getPosts()
  return (
    <>
    <Header />
    <main>
     <Container>
        <h2>Latest Tees</h2>
        <ul>
        { allPostsData.map((postData) => 
          <Link key={postData.id} href={`../shirts/${postData.id}`}><li>{postData.title}</li></Link>
        )}
        </ul>
      </Container>          
    </main>
    <Footer />      
    </>
  )
}