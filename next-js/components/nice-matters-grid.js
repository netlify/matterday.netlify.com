import Head from "next/head";

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
      <div class="share-anchor"><a href="#share">Plan yours</a></div>
      <div class="your-matterday grid">
        <header class="header-main">
          <div>
            <a href="/" class="masthead">Matterday</a>
          </div>
          <a href="https://netlify.com" class="logo">
            <img src="/images/logomark-netlify.svg" width="26" height="26" alt="Netlify logomark" />
          </a>
          <a href="https://supabase.com/" class="logo">
            <img src="/images/logomark-supabase.svg" width="26" height="26" alt="Supabase logomark" />
          </a>
        </header>
        <section class="content">
          <div class="grid-intro">
            <h1>How would you spend your <a href="/">Matterday</a>?</h1>
            <div class="nudge">
              <p>Already know? <a href="/#share">Share what matters to you.</a></p>
            </div>
          </div>
          {matters.map((matter) => (
            <div class="matter-item">
              <div class="eyebrow">
                <img
                  src={matter.avatar_url}
                  class="gh-avatar"
                  alt={matter.username}
                />
                <span class="gh-username">@{matter.username}</span>
              </div>
              <h2>
                <span class="prompt">If I had an extra day a week I could...</span>
                <span class="answer">{matter.content}</span>
              </h2>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default NiceMattersGrid;
