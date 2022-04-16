import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./SignUp.css";
import auth from "../../../Firebase.init";

const SIgnUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/login");
  };

  if (user) {
    navigate("/");
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="signup-form">
      <h2 className="text-center mt-2 p-2">Sign Up</h2>
      <form onSubmit={handleSubmitForm}>
        <input type="text" name="name" id="" placeholder="Enter Name" />
        <input type="email" name="email" placeholder="Email Address" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
        />
        <div className=" submit-btn ">
          <input type="submit" value="Sign Up" />
        </div>
        <p className="text-center">
          Already user?{" "}
          <span role="button" className="text-danger" onClick={handleLogIn}>
            Log In
          </span>
        </p>
      </form>
    </div>
  );
};

export default SIgnUp;
