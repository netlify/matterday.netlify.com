import Head from "next/head";

const NiceMattersGrid = ({ matters }) => {
  return (
    <>
      <Head>{/* TODO: Add any Matter Grid specific <head> content */}</Head>
      {/* TODO: Replace this <pre> tag 👇 with nicely styled markup */}
      <pre>{JSON.stringify(matters, null, 2)}</pre>
    </>
  );
};

export default NiceMattersGrid;
