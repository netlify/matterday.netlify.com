import { useUser } from "../context/user";
import supabase from "../utils/supabase";
import { useRouter } from "next/router";

const Form = () => {
  const { user } = useUser();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { matter } = Object.fromEntries(new FormData(e.target));

    const { data } = await supabase.from("matters").insert({
      content: matter,
    });

    // TODO: handle errors
    // TODO: add loading state while submitting - disable form

    const [newMatter] = data;

    router.push(`/matters/${newMatter.id}`);
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

export default Form;
