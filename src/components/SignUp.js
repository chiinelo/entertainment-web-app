import React, { useState } from "react";
import Movie from "../images/Movie.png";
import styles from "../styles/signin.module.css";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepearPassword] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setInputFocused(false);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/home");
    console.log("Submitted: ", email, password);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      repeatPassword,
    });
    if (error) {
      navigate("/");
      console.error("Error signing in:", error.message);
    } else {
      alert("check email for login link!")
      navigate("/Signin");
      console.log("Sigup successful! Login");
    }
    console.log("Submitted: ", email, password, repeatPassword);
  };

  return (
    <div>
      <div className={`${styles.signin}`}>
        <div className={`${styles.signinHeader}`}>
          <img src={Movie} alt="" />
        </div>

        <div className={`${styles.Signinform}`}>
          <p className={`${styles.Login}`}>Sign Up</p>
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
            <br />
            <input
              className={`${styles.inputsection}`}
              type="text"
              value={repeatPassword}
              placeholder="Repeat Password"
              onChange={(event) => setRepearPassword(event.target.value)}
              style={{ color: inputFocused ? "#fff" : "grey" }}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          <button
            type="submit"
            className={`${styles.loginbutton} bg-danger border-0 p-3`}
          >
            Create an account
          </button>
          </form>
          <p className={`${styles.logintext} text-light`}>
            Alread have an account?
            <a
              href="/Signin"
              className={`text-danger`}
              style={{ marginLeft: "10px" }}
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
