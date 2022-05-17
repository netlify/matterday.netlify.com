import { useUser } from "../context/user";
import supabase from "../utils/supabase";

const ModerationTable = () => {
  const { user } = useUser();

  console.log({ user });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { matter } = Object.fromEntries(new FormData(e.target));

    await supabase.from("matters").insert({
      content: matter,
    });

    // TODO: redirect or handle errors
  };

  const handleSignIn = async () => {
    await supabase.auth.signIn({
      provider: "github",
    });
  };

  return user ? (
    <form onSubmit={handleSubmit}>
      <label htmlFor="matter">What will you do with your extra day?</label>
      <input type="text" name="matter" />
    </form>
  ) : (
    <button onClick={handleSignIn}>
      Authenticate to tell us what matters to you
    </button>
  );
};

export default ModerationTable;
