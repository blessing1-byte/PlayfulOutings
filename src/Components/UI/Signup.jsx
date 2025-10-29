import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email is already registered
    if (users.some((u) => u.email === formData.email)) {
      setError("Email already registered!");
      return;
    }

    //  Save new user
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    // Automatically log in new user
    localStorage.setItem("loggedInUser", JSON.stringify(formData));

    //  Redirect to home page
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2>Create an Account</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account?{" "}
        <span className="link" onClick={() => navigate("/login")}>
          Login
        </span>
      </p>
    </div>
  );
}
