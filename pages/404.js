import Link from 'next/link';

export default function FourOhFour() {
  return <>
    <div className="share-anchor"><Link href="/#share"><a>Plan yours</a></Link></div>
    <div className="four-oh-four">
      <header className="header-main">
        <div>
         <Link href="/"><a className="masthead">Matterday</a></Link>
        </div>
        <a href="https://netlify.com" className="logo">
          <img src="/images/logomark-netlify.svg" width="26" height="26" alt="Netlify logomark" />
        </a>
        <a href="https://supabase.com/" className="logo">
          <img src="/images/logomark-supabase.svg" width="26" height="26" alt="Supabase logomark" />
        </a>
      </header>
      <section className="content">
        <div className="container">
          <h1>404 - Page Not Found</h1>
         <Link href="/"><a>Head back home</a></Link>
        </div>
      </section>
    </div>
  </>
}