import { getSortedPostsData } from "@/lib/markdown"
import { Container } from '../components/container'
import { Header } from '../components/header'
import Footer from '../components/footer'

async function getPosts() {
  const allPostsData = getSortedPostsData()

  return allPostsData
}

export default async function Posts() {
  const allPostsData = await getPosts()
  return (
    <>
    <Header />
    <main>
     <Container>
        <h2>Fresh From The Oven...</h2>
        <ul>
        { allPostsData.map((postData) => 
          <li key={postData.id}>{postData.title}</li>
        )}
        </ul>
      </Container>          
    </main>
    <Footer />      
    </>
  )
}