import Head from "next/head";
import Link from 'next/link';

const NiceMattersGrid = ({ matters }) => {
  return (
    <>
      <Head>
        <meta name="description" content="What could you do with an extra day a week to spend on what matters?" />
        <meta content="What could you do with an extra day a week to spend on what matters?" name="twitter:description" property="og:description" />
        <meta content="https://matterday.netlify.com/matters" property="og:url" />
        <meta content="https://matterday.netlify.com/matters" property="twitter:url" />
        <meta content="https://matterday.netlify.com/images/matterday-og-default.png" property="og:image" />
        <meta content="https://matterday.netlify.com/images/matterday-og-default.png" name="twitter:image" />
      </Head>
      {/*<pre>{JSON.stringify(matters, null, 2)}</pre>*/}
      <div className="share-anchor">
        <Link href="/#share">
          <a>Plan yours</a>
        </Link>
      </div>
      <div className="your-matterday grid">
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
          <div className="grid-intro">
            <h1>How would you spend your <Link href="/"><a>Matterday</a></Link>?</h1>
            <div className="nudge">
              <p>Already know? <Link href="/#share"><a>Share what matters to you.</a></Link></p>
            </div>
          </div>
          {matters.map((matter) => (
            <div className="matter-item">
              <div className="eyebrow">
                <img
                  src={matter.avatar_url}
                  className="gh-avatar"
                  alt={matter.username}
                  width="100"
                  height="100"
                />
                <span className="gh-username">@{matter.username}</span>
              </div>
              <h2>
                <span className="prompt">If I had an extra day a week I could...</span>
                <span className="answer">{matter.content}</span>
              </h2>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default NiceMattersGrid;
