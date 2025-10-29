import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (existingUser) {
      // ✅ Store logged-in user
      localStorage.setItem("loggedInUser", JSON.stringify(existingUser));

      // ✅ Redirect to homepage after login
      navigate("/");
    } else {
      // ❌ Show error if credentials don’t match
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to PlayfulOutings</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>

      <p>
        Don’t have an account?{" "}
        <span className="link" onClick={() => navigate("/signup")}>
          Sign Up
        </span>
      </p>
    </div>
  );
}
