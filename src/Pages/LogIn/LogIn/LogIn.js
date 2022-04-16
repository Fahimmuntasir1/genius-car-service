import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase.init";

const LogIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth  );
    if (user) {
      navigate('/')
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <div className="signup-form">
      <h2 className="text-center mt-2 p-2">Log In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          ref={emailRef}
          id="user-email"
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          name="password"
          ref={passwordRef}
          id="user-pass"
          placeholder="Password"
          required
        />

        <div className=" submit-btn ">
          <input type="submit" value="Sign Up" />
        </div>
        <p className="text-center">
          Already user?{" "}
          <span role="button" className="text-danger" onClick={handleSignUp}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
