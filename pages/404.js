import Link from 'next/link';
import Header from '../components/header'

export default function FourOhFour() {
  return <>
    <div className="share-anchor"><Link href="/#share"><a>Plan yours</a></Link></div>
    <div className="four-oh-four">
      <Header />
      <section className="content">
        <div className="container">
          <h1>404 - Page Not Found</h1>
         <Link href="/"><a>Head back home</a></Link>
        </div>
      </section>
    </div>
  </>
}