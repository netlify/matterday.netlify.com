import supabase from "utils/supabase";
import NiceMatter from "components/nice-matter";

const Matter = ({ matter }) => {
  return <NiceMatter matter={matter} />;
};

export const getServerSideProps = async ({ params: { id } }) => {
  const { data: matter } = await supabase
    .from("matters_with_user")
    .select("*")
    .match({ id })
    .single();

  return {
    props: {
      matter,
    },
  };
};

export default Matter;
