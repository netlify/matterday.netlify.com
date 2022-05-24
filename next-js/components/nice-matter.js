import Head from "next/head";

const NiceMatter = ({ matter }) => {
  return (
    <>
      <Head>
        <meta name="description" content="If I had an extra day a week, I could..." />
        <meta content="If I had an extra day a week, I could..." name="twitter:description" property="og:description" />
        <meta content={"https://matterday.netlify.com/matters/" + matter.id} property="og:url" />
        <meta content={"https://matterday.netlify.com/matters/" + matter.id} property="twitter:url" />
        <meta content="https://res.cloudinary.com/netlify/image/upload/w_1280,h_669,c_fill,q_auto,f_auto/w_760,c_fit,co_rgb:ffffff,g_south_west/l_fetch:aHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91Lzg3MTMxNT92PTQ=/w_65,h_65/r_max/fl_layer_apply,x_48,y_45,g_north_west/l_text:roboto_26:@lynnandtonic,co_rgb:9ce9db,g_north_west,x_128,y_66/l_text:caveat_68:eat%2520some%2520pizza,co_rgb:ffffff,y_115/matter-day/og-template" property="og:image" />
        <meta content="https://res.cloudinary.com/netlify/image/upload/w_1280,h_669,c_fill,q_auto,f_auto/w_760,c_fit,co_rgb:ffffff,g_south_west/l_fetch:aHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91Lzg3MTMxNT92PTQ=/w_65,h_65/r_max/fl_layer_apply,x_48,y_45,g_north_west/l_text:roboto_26:@lynnandtonic,co_rgb:9ce9db,g_north_west,x_128,y_66/l_text:caveat_68:eat%2520some%2520pizza,co_rgb:ffffff,y_115/matter-day/og-template" name="twitter:image" />
      </Head>
      {/*<pre>{JSON.stringify(matter, null, 2)}</pre>*/}
      <div className="share-anchor"><a href="#share">Plan yours</a></div>
      <div className="your-matterday">
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
            <div className="eyebrow">
              <img
                src={matter.avatar_url}
                className="gh-avatar"
                alt={matter.username}
              />
              <span className="gh-username">@{matter.username}</span>
            </div>
            <h1>
              <span className="prompt">If I had an extra day a week I could…</span>
              <span className="answer">{matter.content}</span>
            </h1>
          </div>
          <footer className="share nudge">
            {/* TODO: Should the share button form a tweet? or just copy URL? */}
            <p><a href="/#share">Tweet your #Matterday</a> + <a href="/matters">See what others are saying</a></p>
          </footer>
        </section>
      </div>
    </>
  );
};

export default NiceMatter;
