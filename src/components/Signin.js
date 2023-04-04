import React, { useState } from "react";
import Movie from "../images/Movie.png";
import styles from "../styles/signin.module.css";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [session, setSession] = useState({})

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setInputFocused(false);
  };

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitted: ", email, password);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data);
    if (error) {
      navigate("/");
      console.error("Error signing in:", error.message);
    } else {
      setSession(data.session)
      navigate("/home");
      console.log("Signed in successfully:");
    }
  };

  return (
    <div className={`${styles.signin}`}>
      <div className={`${styles.signinHeader}`}>
        <img src={Movie} alt="" />
      </div>

      <div className={`${styles.Signinform}`}>
        <p className={`${styles.Login}`}>Login</p>
        <form onSubmit={handleSubmit}>
          <input
            className={`${styles.inputsection}`}
            type="email"
            value={email}
            placeholder="Email Address"
            onChange={(event) => setEmail(event.target.value)}
            style={{ color: inputFocused ? "#fff" : "grey" }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <br />
          <input
            className={`${styles.inputsection}`}
            type="text"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            style={{ color: inputFocused ? "#fff" : "grey" }}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button
            type="submit"
            className={`${styles.loginbutton} bg-danger border-0 p-3`}
          >
            Login to your account
          </button>
        </form>
        <p className={`${styles.logintext} text-light`}>
          Don’t have an account?
          <a
            href="/SignUp"
            className={`text-danger`}
            style={{ marginLeft: "10px" }}
          >
            SignUp
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
