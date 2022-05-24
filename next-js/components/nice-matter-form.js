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
      // TODO: add better copy for when profanity is detected
      setError("is there a nicer way you could put that?");
    }
  };

  return (
    <div class="logged-in">
      <span class="authentication">
        <span>
          👋&nbsp;
          {username ? (
            <span class="github-username">
              {user.user.user_metadata.user_name}
            </span>
          ) : null}
        </span>
        {/* TODO: Make this one 👇 a button element as it does not need to navigate - I didn't want to break styling so just added the onClick handler! 👍 */}
        <a href="#" class="text" onClick={handleSignOut}>
          Log out
        </a>
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
            <small class="characters">limit 30 characters</small>
            <button type="submit">Submit</button>
          </footer>
          {error ? <p>{error}</p> : null}
        </fieldset>
      </form>
      <div class="nudge">
        <p>Need some inspiration? <a href="/matters">See what others are saying.</a></p>
      </div>
    </div>
  );
};

export default MatterForm;
