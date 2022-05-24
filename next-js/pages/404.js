export default function FourOhFour() {
  return <>
    <div className="share-anchor"><a href="/#share">Plan yours</a></div>
    <div className="four-oh-four">
      <header className="header-main">
        <div>
          <a href="/" className="masthead">Matterday</a>
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
          <a href="/">Head back home</a>
        </div>
      </section>
    </div>
  </>
}