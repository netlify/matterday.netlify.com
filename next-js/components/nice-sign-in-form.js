import supabase from "utils/supabase";

const NiceSignInForm = () => {
  const handleSignIn = async () => {
    await supabase.auth.signIn({
      provider: "github",
    });
  };

  return (
    // TODO: Add nicely styled sign in button
    <button onClick={handleSignIn}>
      Authenticate to tell us what matters to you
    </button>
  );
};

export default NiceSignInForm;
