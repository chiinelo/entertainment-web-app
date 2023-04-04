import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

const Home = () => {
  const [user, setUser] = useState({});
  const [authSession, setAuthSession] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      const value = await supabase.auth.getSession();
      if (value.data?.user) {
        console.log("User data retrieved:", value.data.user);
        setUser(value.data.user);
      }

      const { data: authlistner } = supabase.auth.onAuthStateChange(
        (event, session) => {
          if (event === "SIGNED_IN") {
            setUser(session?.user);
          } else if (event === "SIGNED_OUT") {
            setUser(null);
          }
        }
      );
      return () => {
        if (authlistner) {
          authlistner.unsubscribe();
        }
      };
    }
    getUserData();
  }, [authSession]);

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/signin");
  };

  return (
    <div>
      <NavBar />
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default Home;
