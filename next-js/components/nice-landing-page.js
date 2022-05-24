import Head from "next/head";
import dynamic from "next/dynamic";

// Form component requires a user that is stored in localStorage
const Form = dynamic(() => import("components/form"), { ssr: false });

const NiceLandingPage = () => {
  return (
    <>
      <Head>{/* TODO: Add any Landing Page specific <head> content */}</Head>
      {/* TODO: add nicely styled landing page markup */}
      {/* 👇 This form needs to be placed wherever it should appear */}
      <Form />
    </>
  );
};

export default NiceLandingPage;
