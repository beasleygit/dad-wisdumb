import { Container } from './components/container'
import { HeroHeader } from './components/header'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
    <HeroHeader />
    <main>
     <Container>
        <h2>Blog</h2>
      </Container>          
    </main>
    <Footer />      
    </>
  )
}
