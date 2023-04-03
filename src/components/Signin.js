import React, { useState } from "react";
import Movie from "../images/Movie.png";
import styles from "../styles/signin.module.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setInputFocused(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    console.log("Submitted: ", email, password); // Prints form data to the console
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
