import { createContext, useState, useEffect, useContext } from "react";
import supabase from "../utils/supabase";

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(supabase.auth.user());

  useEffect(() => {
    setUser(supabase.auth.user());

    supabase.auth.onAuthStateChange(() => {
      setUser(supabase.auth.user());
    });
  }, []);

  const exposed = {
    user,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);

export default Provider;
