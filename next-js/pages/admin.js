import dynamic from "next/dynamic";

// ModerationTable component requires a user that is stored in localStorage
const ModerationTable = dynamic(
  () => import("../components/moderation-table"),
  { ssr: false }
);

const Admin = ({ matters }) => {
  return <ModerationTable />;
};

export default Admin;
