import { createContext, useState, useEffect, useContext } from "react";
import supabase from "../utils/supabase";
import { useRouter } from "next/router";

const Context = createContext();

const Provider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(supabase.auth.user());

  useEffect(() => {
    setUser(supabase.auth.user());

    supabase.auth.onAuthStateChange(() => {
      const newUser = supabase.auth.user();
      setUser(newUser);

      if (newUser && router.pathname === "/") {
        // the user has just signed in and is on the homepage - navigate them to the share form
        router.push("/#share");
      }
    });
  }, []);

  const exposed = {
    user,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);

export default Provider;
