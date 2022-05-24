import Head from "next/head";

const NiceMatter = ({ matter }) => {
  return (
    <>
      <Head>{/* TODO: Add any Matter Page specific <head> content */}</Head>
      {/* TODO: Replace this <pre> tag 👇 with nicely styled markup */}
      <pre>{JSON.stringify(matter, null, 2)}</pre>
    </>
  );
};

export default NiceMatter;
