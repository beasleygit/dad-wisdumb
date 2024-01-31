import { Container } from './components/container'
import Header from './components/header'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
    <Header />
    <main>
     <Container>
        <h2>Blog</h2>
      </Container>          
    </main>
    <Footer />      
    </>
  )
}
