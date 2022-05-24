import dynamic from "next/dynamic";
import supabase from "../utils/supabase";

// ModerationTable component requires a user that is stored in localStorage
const ModerationTable = dynamic(
  () => import("../components/moderation-table"),
  { ssr: false }
);

const Admin = ({ matters }) => {
  return <ModerationTable matters={matters} />;
};

export const getServerSideProps = async () => {
  const { data: matters } = await supabase
    .from("matters_with_avatar")
    .select("*")
    .match({ status: "new" });

  return {
    props: { matters },
  };
};

export default Admin;
