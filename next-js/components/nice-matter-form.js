import { useRouter } from "next/router";
import { useState } from "react";
import supabase from "utils/supabase";

const MatterForm = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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

  return (
    // TODO: Add nicely styled matter form
    <form onSubmit={handleSubmit} disabled={isLoading}>
      <label htmlFor="matter">What will you do with your extra day?</label>
      <input type="text" name="matter" />
      <button type="submit">Submit</button>
      {error ? <p>{error}</p> : null}
    </form>
  );
};

export default MatterForm;
