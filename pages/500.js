import Link from 'next/link';
import Header from '../components/header'

export default function Custom500() {
  return <>
    <div className="share-anchor"><Link href="/#share"><a>Plan yours</a></Link></div>
    <div className="error-page">
      <Header />
      <section className="content">
        <div className="container">
          <h1>500 - Server-side error occurred</h1>
        </div>
      </section>
    </div>
  </>
}