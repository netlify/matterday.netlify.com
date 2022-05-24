import { useRouter } from "next/router";
import { useState } from "react";
import supabase from "utils/supabase";
import { useUser } from "context/user";
import Filter from "bad-words";

const MatterForm = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [matter, setMatter] = useState("");
  const [isRude, setIsRude] = useState(false);
  const filter = new Filter();
  const router = useRouter();
  const user = useUser();
  const userAvatar = user?.user?.user_metadata?.avatar_url || null;
  const username = user?.user?.user_metadata?.user_name || null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setIsLoading(true);

    const { matter } = Object.fromEntries(new FormData(e.target));

    const { data, error } = await supabase.from("matters").insert({
      content: matter,
      content_encoded: escape(encodeURIComponent(matter)),
    });

    setIsLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    const [newMatter] = data;

    router.push(`/matters/${newMatter.id}`);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const handleChange = (e) => {
    setError(null);

    const matter = e.currentTarget.value;
    setMatter(matter);

    if (filter.isProfane(matter)) {
      setError("Whoops, you did a swear! Let’s keep it family-friendly, kind, and inclusive please.");
    }
  };

  return (
    <div className="logged-in">
      <span className="authentication">
        {username ? (
          <img
            src={user.user.user_metadata.avatar_url}
            className="gh-avatar"
            alt={user.user.user_metadata.user_name}
            width="100"
            height="100"
          />
        ) : null}
        {username ? (
          <span className="github-username">
            @{user.user.user_metadata.user_name}
          </span>
        ) : null}
        {/* TODO: I made this a button but wasn’t sure what else to do! */}
        <button className="text" onClick={handleSignOut}>
          Log out
        </button>
      </span>
      <form onSubmit={handleSubmit} disabled={isLoading || isRude}>
        <fieldset>
          <label htmlFor="matter">
            If I had an extra day a week I could...
          </label>
          <input
            type="text"
            name="matter"
            maxLength={30}
            onChange={handleChange}
            value={matter}
          />
          <footer>
            <small className="characters">limit 30 characters</small>
            <button type="submit">Submit</button>
          </footer>
          {error ? <small className="error">{error}</small> : null}
        </fieldset>
      </form>
      <div className="nudge">
        <p>Need some inspiration? <a href="/matters">See what others are saying.</a></p>
      </div>
    </div>
  );
};

export default MatterForm;
