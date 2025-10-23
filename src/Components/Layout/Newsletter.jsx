import React, { useState } from "react";
import "../CSS/Newsletter.css";

export default function NewsletterCTA() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpen = () => setIsPopupOpen(true);
  const handleClose = (e) => {
    if (e.target.classList.contains("popup-overlay")) setIsPopupOpen(false);
  };

  return (
    <section className="newsletter-cta">
      <div className="newsletter-content">
        <h2>Stay in the Loop!</h2>
        <p>
          Don’t miss out on new game ideas, picnic itineraries, and fun family
          outings. Join our community and get updates straight to your inbox!
        </p>
        <button className="cta-btn" onClick={handleOpen}>
          Join the Fun
        </button>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={handleClose}>
          <div className="popup-box">
            <span className="close-btn" onClick={() => setIsPopupOpen(false)}>
              &times;
            </span>
            <h3>Join Our Newsletter 🎉</h3>
            <p>Stay updated with fun games, events, and outing ideas!</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for signing up!");
                setIsPopupOpen(false);
              }}
            >
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
