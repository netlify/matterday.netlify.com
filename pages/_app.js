import UserProvider from "../context/user";
import Head from "next/head";

import "styles/main.css";
import "styles/variables.css";
import "styles/main.css";
import "styles/header.css";
import "styles/parallax.css";
import "styles/overlay.css";
import "styles/section-intro.css";
import "styles/section-slow-down.css";
import "styles/section-focus.css";
import "styles/section-adds-up.css";
import "styles/section-the-office.css";
import "styles/section-space-mountain.css";
import "styles/section-walking.css";
import "styles/section-get-more-rest.css";
import "styles/section-backburner.css";
import "styles/section-play.css";
import "styles/section-big-swings.css";
import "styles/section-cta.css";
import "styles/custom-page.css";
import "styles/four-oh-four.css";
import "styles/admin.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Netlify" />
        <title>Matterday</title>
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta content="@netlify" name="twitter:site" />
        <meta content="@netlify" name="twitter:creator" />
        <meta content="Matterday" name="twitter:title" property="og:title" />
      </Head>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

export default MyApp;
