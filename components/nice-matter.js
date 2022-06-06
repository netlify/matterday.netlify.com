import Head from "next/head";
import Link from "next/link";
import Header from "./header";
import ShareAnchor from "./share-anchor";

const NiceMatter = ({ matter }) => {
  return (
    <>
      <Head>
        <meta content={"https://matterday.netlify.com/matters/" + matter.id} property="og:url" />
        <meta content={"https://matterday.netlify.com/matters/" + matter.id} property="twitter:url" />
        <meta content={matter.og_image} property="og:image" />
        <meta content={matter.og_image} name="twitter:image" />
      </Head>
      <div className="your-matterday">
        <ShareAnchor />
        <Header />
        <section className="content">
          <div className="container">
            <div>
              <div className="eyebrow">
                <a href={"https://github.com/" + matter.username}>
                  <img
                    src={matter.avatar_url}
                    className="gh-avatar"
                    alt={matter.username}
                    width="100"
                    height="100"
                  />
                </a>
                <span className="gh-username">
                  @<a href={"https://github.com/" + matter.username}>{matter.username}</a>
                </span>
              </div>
              <h1>
                <span className="prompt">If I had an extra day a week I could…</span>
                <span className="answer">{matter.content}</span>
              </h1>
              <div className="share nudge">
                <p>
                  <a href={"https://twitter.com/intent/tweet?text=Matterday is the new “someday.” Here’s what I’d do if I had an extra day a week.&hashtags=Matterday&url=https://matterday.netlify.com/matters/" + matter.id}>Tweet your #Matterday</a> or <Link href="/matters"><a>see what others are saying</a></Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NiceMatter;
