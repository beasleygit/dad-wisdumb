import Link from 'next/link'

export default function LinkList() {
  return (
    <ul className="flex-row hidden lg:flex">
      <Link href="/shirts"><li className="mr-3">Latest Tees</li></Link>
      <Link href="/collections"><li className="ml-3">View Collections</li></Link>
    </ul>
  )
}