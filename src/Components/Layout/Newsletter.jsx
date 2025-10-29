import React, { useState } from "react";
import "../CSS/Newsletter.css";

export default function SignupCTA() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpen = () => setIsPopupOpen(true);
  const handleClose = (e) => {
    if (e.target.classList.contains("popup-overlay")) setIsPopupOpen(false);
  };

  return (
    <section className="signup-cta">
      <div className="signup-content">
        <h2>Join the Fun!</h2>
        <p>
          Create your free PlayfulOutings account to unlock exclusive games,
          book picnic itineraries, and save your favorite activities.
        </p>
        <button className="cta-btn" onClick={handleOpen}>
          Sign Up Now
        </button>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={handleClose}>
          <div className="popup-box">
            <span className="close-btn" onClick={() => setIsPopupOpen(false)}>
              &times;
            </span>

            <h3>Get Started 🎉</h3>
            <p>Create your account to start exploring!</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Account created successfully!");
                setIsPopupOpen(false);
              }}
            >
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="password" placeholder="Create Password" required />
              <button type="submit" className="signup-btn">
                Sign Up
              </button>
            </form>

            <p className="login-text">
              Already have an account?{" "}
              <a href="/login" className="login-link">
                Log in
              </a>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
