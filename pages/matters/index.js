import supabase from "utils/supabase";
import NiceMattersGrid from "components/nice-matters-grid";

const Matters = ({ matters }) => {
  return <NiceMattersGrid matters={matters} />;
};

export const getStaticProps = async () => {
  const { data: matters } = await supabase
    .from("matters_with_user")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(1000)
    .match({ status: "approved" });

  return {
    props: {
      matters,
    },
    revalidate: 60,
  };
};

export default Matters;
