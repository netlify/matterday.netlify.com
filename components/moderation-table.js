import { useState, useEffect } from "react";
import { useUser } from "context/user";
import supabase from "utils/supabase";

const ModerationTable = ({ matters }) => {
  const [liveMatters, setLiveMatters] = useState(matters);
  const { user } = useUser();

  useEffect(() => {
    const subscription = supabase
      .from("matters")
      .on("INSERT", async (payload) => {
        // we are fetching this again to attach the avatar
        const { data } = await supabase
          .from("matters_with_avatar")
          .select("*")
          .match({ id: payload.id })
          .single();
        setLiveMatters((current) => [...current, data]);
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(subscription);
    };
  }, []);

  console.log({ user, liveMatters });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const { matter } = Object.fromEntries(new FormData(e.target));

  //   await supabase.from("matters").insert({
  //     content: matter,
  //   });

  if (!user) {
    return <p>You do not appear to be signed in!</p>;
  }

  return liveMatters.length > 0 ? (
    liveMatters.map((matter) => <p key={matter.id}>{matter.content}</p>)
  ) : (
    <p>Your job here is done! Go get a ☕️</p>
  );

  // return user ? (
  //   <form onSubmit={handleSubmit}>
  //     <label htmlFor="matter">What will you do with your extra day?</label>
  //     <input type="text" name="matter" />
  //   </form>
  // ) : (
  //   <button onClick={handleSignIn}>
  //     Authenticate to tell us what matters to you
  //   </button>
  // );
};

export default ModerationTable;
