import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";

const Matter = ({ matter }) => {
  const [liveMatter, setLiveMatter] = useState(matter);

  useEffect(() => {
    const subscription = supabase
      .from(`matters:id=eq.${liveMatter.id}`)
      .on("UPDATE", (payload) => {
        setLiveMatter(payload.new);
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(subscription);
    };
  }, []);

  // TODO: Implement nicely designed page for grid of matters
  return <pre>{JSON.stringify(liveMatter, null, 2)}</pre>;
};

export const getServerSideProps = async ({ params: { id } }) => {
  const { data: matter } = await supabase
    .from("matters")
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
