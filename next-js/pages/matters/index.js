import supabase from "../../utils/supabase";

const Matters = ({ matters }) => {
  // TODO: Implement nicely designed page for grid of matters
  return <pre>{JSON.stringify(matters, null, 2)}</pre>;
};

export const getStaticProps = async () => {
  const { data: matters } = await supabase
    .from("matters")
    .select("*")
    .match({ status: "approved" })
    .order("created_at", { ascending: false });

  return {
    props: {
      matters,
    },
    revalidate: 60,
  };
};

export default Matters;
