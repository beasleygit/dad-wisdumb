import { Container } from './container'
import { GlobalData } from '../globals'
import { Oswald } from 'next/font/google'
import LinkList from './links'
import Link from 'next/link'

const oswald = Oswald({
  subsets: ['latin']
})
 

export const HeroHeader = () => {
  return (
    <header className="h-screen box-border flex flex-col">     
      <Container>
        <nav className="flex flex-row justify-between content-center mt-3">
          <div className={oswald.className}><Link href="/">{GlobalData.name}</Link></div>
          <div>
            <LinkList />
          </div>
        </nav>  
      </Container>          
      <Container className="h-full">
        <div className="flex flex-wrap h-full bg-red-100 justify-center content-center rounded-xl">
          <div>Test</div>
        </div>  
      </Container>      
    </header>
  )
}

export const Header = () => {
  return (
    <header className="box-border flex flex-col">     
      <Container>
        <nav className="flex flex-row justify-between content-center mt-3">
          <div className={oswald.className}><Link href="/">{GlobalData.name}</Link></div>
          <div>
            <LinkList />
          </div>
        </nav>  
      </Container>          
      <Container className="h-96">
        <div className="flex flex-wrap h-full bg-red-100 justify-center content-center rounded-xl">
          <div>Test</div>
        </div>  
      </Container>      
    </header>
  )
}