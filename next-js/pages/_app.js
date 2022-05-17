import UserProvider from "../context/user";
import Head from "next/head";

import "../styles/globals.css";
import "../styles/header.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>{/* TODO: Add any page specific <head> content */}</Head>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

export default MyApp;
