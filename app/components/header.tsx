import { Container } from './container'
import { GlobalData } from '../globals'
import { Lexend } from 'next/font/google'
import LinkList from './links'
import Link from 'next/link'

const logoFont = Lexend({
  subsets: ['latin']
})
 
export default function Header({text}: {text?: string}) {
  return (
    <header className="box-border flex flex-col">     
      <Container>
        <nav className="flex flex-row justify-between content-center mt-3">
          <div className={logoFont.className}><Link href="/" className="text-2xl font-bold">{GlobalData.name}</Link></div>
          <div className="flex flex-row content-center justify-center flex-wrap">
            <LinkList />
          </div>
        </nav>  
      </Container>          
      <Container>
        <div className="flex flex-wrap h-full bg-red-100 justify-center content-center rounded-xl min-h-80">
          <div>{text}</div>
        </div>  
      </Container>      
    </header>
  )
}