import Head from "next/head";
import dynamic from "next/dynamic";

// Form component requires a user that is stored in localStorage
const Form = dynamic(() => import("../components/form"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>{/* TODO: Add any page specific <head> content */}</Head>
      {/* TODO: Add nicely designed landing page */}
      <Form />
    </div>
  );
}
