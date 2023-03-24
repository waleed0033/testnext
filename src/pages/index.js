import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="m-0 row vh-100 justify-content-center align-content-center">
    <div className="col-2 text-center">
        <h2>Hello Welcome</h2>
        <Link href="/test/t" className="btn btn-primary">Click here</Link>
    </div>
</div>
  )
}
