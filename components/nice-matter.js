import Head from "next/head";
import Link from 'next/link';
import Header from './header'

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
            {/* TODO: Should the share button form a tweet? or just copy URL? */}
            <p><a href="#">Tweet your #Matterday</a> + <Link href="/matters"><a>See what others are saying</a></Link></p>
          </footer>
        </section>
      </div>
    </>
  );
};

export default NiceMatter;
