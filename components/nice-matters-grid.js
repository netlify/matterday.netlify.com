import Head from "next/head";
import Link from "next/link";
import Header from "./header";
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
              <p>or <a href="https://www.netlify.com/roi-calculator/?utm_campaign=2022_06_roi_calculator_launch&utm_content=matterday" id="cta-hero-calculate">calculate your team’s savings</a></p>
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
          <footer className="credit">
            <p className="built-with">Matterday is built with <a href="https://supabase.com/?utm_source=matterday&utm_medium=referral" className="supabase-mark" id="cta-footer-supabase">Supabase</a> on <a href="https://www.netlify.com/?utm_campaign=website_launch_2022_05_rework_your_workweek&utm_content=matterday" className="netlify-mark" id="cta-footer-netlify">Netlify</a></p>
            <p><a href="https://www.netlify.com/roi-calculator/?utm_campaign=2022_06_roi_calculator_launch&utm_content=matterday" className="calculate" id="cta-footer-calculate">Calculate your team’s savings</a></p>
          </footer>
        </section>
      </div>
    </>
  );
};

export default NiceMattersGrid;
