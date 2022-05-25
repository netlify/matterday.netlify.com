import Head from "next/head";
import Link from 'next/link';
import Header from './header'

const NiceMatter = ({ matter }) => {
  return (
    <>
      <Head>
        <meta content={"https://matterday.netlify.com/matters/" + matter.id} property="og:url" />
        <meta content={"https://matterday.netlify.com/matters/" + matter.id} property="twitter:url" />
        <meta content={matter.og_image} property="og:image" />
        <meta content={matter.og_image} name="twitter:image" />
      </Head>
      <div className="share-anchor">
        <Link href="/#share">
          <a>Plan yours</a>
        </Link>
      </div>
      <div className="your-matterday">
        <Header />
        <section className="content">
          <div className="container">
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
            <h1>
              <span className="prompt">If I had an extra day a week I could…</span>
              <span className="answer">{matter.content}</span>
            </h1>
          </div>
          <footer className="share nudge">
            <p>
              <a href={"https://twitter.com/intent/tweet?text=Matterday is the new “someday.” Here’s what I’d do if I had an extra day a week.&url=https://matterday.netlify.com/matters/" + matter.id}>Tweet your #Matterday</a> + <Link href="/matters"><a>See what others are saying</a></Link>
            </p>
          </footer>
        </section>
      </div>
    </>
  );
};

export default NiceMatter;
