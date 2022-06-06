import Head from "next/head";
import Link from "next/link";
import Header from "./header";
import Credit from "./credit";
import ShareAnchor from "./share-anchor";

const NiceMattersGrid = ({ matters }) => {
  return (
    <>
      <Head>
        <meta content="https://matterday.netlify.com/matters" property="og:url" />
        <meta content="https://matterday.netlify.com/matters" property="twitter:url" />
        <meta content="https://matterday.netlify.com/images/matterday-og-default.png" property="og:image" />
        <meta content="https://matterday.netlify.com/images/matterday-og-default.png" name="twitter:image" />
      </Head>
      <div className="your-matterday grid">
        <ShareAnchor />
        <Header />
        <section className="content">
          <div className="grid-intro">
            <h1>How would you spend your <Link href="/"><a>Matterday</a></Link>?</h1>
            <div className="nudge">
              <p><Link href="/#share"><a className="button">Share your Matterday</a></Link></p>
              <p>or <a href="https://netlify-roi-calculator.netlify.app/">calculate your time saved</a></p>
            </div>
          </div>
          {matters.map((matter) => (
            <div key={matter.id} className="matter-item">
              <div className="eyebrow">
                <a href={"https://github.com/" + matter.username}>
                  <img
                    src={matter.avatar_url}
                    className="gh-avatar"
                    alt={matter.username}
                    width="100"
                    height="100"
                    loading="lazy"
                  />
                </a>
                <span className="gh-username">
                  @<a href={"https://github.com/" + matter.username}>{matter.username}</a>
                </span>
              </div>
              <h2>
                <span className="prompt">If I had an extra day a week I could...</span>
                <span className="answer">{matter.content}</span>
              </h2>
            </div>
          ))}
          <Credit />
        </section>
      </div>
    </>
  );
};

export default NiceMattersGrid;
