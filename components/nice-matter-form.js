import { useRouter } from "next/router";
import { useState } from "react";
import supabase from "utils/supabase";
import { useUser } from "context/user";
import Filter from "bad-words";
import Link from "next/link";

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
    setIsRude(false);
    setError(null);

    const matter = e.currentTarget.value;
    setMatter(matter);

    if (filter.isProfane(matter)) {
      setIsRude(true);
      setError(
        "Whoops, you did a swear! Let’s keep it family-friendly, kind, and inclusive please."
      );
    }
  };

  return (
    <div className="logged-in">
      <span className="authentication">
        {username && userAvatar ? (
          <img
            src={userAvatar}
            className="gh-avatar"
            alt={username}
            width="100"
            height="100"
          />
        ) : null}
        {username ? <span className="github-username">@{username}</span> : null}
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
            <button type="submit" disabled={isLoading || isRude}>
              Submit
            </button>
          </footer>
          {error ? <small className="error">{error}</small> : null}
        </fieldset>
      </form>
      <div className="nudge">
        <p>
          Need some inspiration?{" "}
          <Link href="/matters">
            <a>See what others are saying.</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MatterForm;
