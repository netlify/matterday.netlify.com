import { useState, useEffect } from "react";
import { useUser } from "context/user";
import supabase from "utils/supabase";
import { useRouter } from "next/router";

const ModerationTable = () => {
  const [liveMatters, setLiveMatters] = useState(null);
  const router = useRouter();
  const { user } = useUser();
  const isNetlifyAdmin = user?.user_metadata?.isNetlifyAdmin || false;

  useEffect(() => {
    const getMatters = async () => {
      const { data, error } = await supabase
        .from("matters_with_user")
        .select("*")
        .match({ status: "new" })
        .order("created_at", { ascending: false });

      if (error) {
        console.log(error.message);
      } else {
        setLiveMatters(data);
      }
    };

    getMatters();
  }, []);

  useEffect(() => {
    const subscription = supabase
      .from("matters")
      .on("INSERT", async (payload) => {
        // we are fetching this again to attach the user info
        const { data } = await supabase
          .from("matters_with_user")
          .select("*")
          .match({ id: payload.new.id })
          .single();

        setLiveMatters((current) => [...current, data]);
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(subscription);
    };
  }, []);

  const handleModerate = (id, status) => async (e) => {
    const { error } = await supabase
      .from("matters")
      .update({
        status,
      })
      .match({ id });

    if (error) {
      console.log(error.message);
    } else {
      setLiveMatters((current) => [
        ...current.filter((matter) => matter.id !== id),
      ]);
    }
  };

  if (!user || !isNetlifyAdmin) {
    router.push("/#share");
    return null;
  }

  return (
    <div className="admin-container">
      {liveMatters ? (
        liveMatters.length > 0 ? (
          liveMatters.map((matter) => (
            <div key={matter.id} className="admin-matter">
              <img
                src={matter.og_image}
                alt={matter.content}
                className="admin-matter-image"
              />
              <p>
                <a href={`https://github.com/${matter.username}`}>
                  @{matter.username}
                </a>{" "}
                would &quot;{matter.content}&quot;
              </p>
              <div className="admin-buttons">
                <button
                  onClick={handleModerate(matter.id, "approved")}
                  className="text"
                >
                  ✅ Approve
                </button>
                <button
                  onClick={handleModerate(matter.id, "denied")}
                  className="text"
                >
                  ❌ Deny
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="admin-centered">Your job here is done! Go get a ☕️</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ModerationTable;
