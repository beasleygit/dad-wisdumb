import { Container } from '../components/container'
import { getUniqueCategories } from '@/lib/markdown'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'


async function getCategories() {
  const uniqueCategories = getUniqueCategories()
  return uniqueCategories
}

export default async function Collections() {
  const uniqueCategories = await getCategories()
  console.log(uniqueCategories)
  return (
    <>
    <Header />
    <main>
     <Container>
        <h2>Collections</h2>
        <ul className="grid grid-cols-3">
          {uniqueCategories.map((category, index) => (
            <Link className="flex flex-row justify-center content-center bg-blue-100 min-h-12" href={`/collections/${category}`} key={index}><li>{category}</li></Link>
          ))}
        </ul>
      </Container>          
    </main>
    <Footer />      
    </>
  )
}
