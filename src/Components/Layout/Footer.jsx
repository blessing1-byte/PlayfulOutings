import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import "../CSS/Footer.css";
import ScrollingTicker from "../UI/ScrollingTicker";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* === BRAND COLUMN === */}
        <div className="footer-column">
          <h2 className="footer-logo">PlayfulOutings</h2>
          <p className="footer-text">
            Discover exciting indoor and outdoor games, create memorable picnic
            itineraries, and bring friends together for fun-filled experiences.
          </p>

          <div className="newsletter">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-btn">
              <Send size={18} />
            </button>
          </div>
        </div>

        {/* === QUICK LINKS === */}
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>Games</li>
            <li>Itineraries</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* === ACTIVITIES === */}
        <div className="footer-column">
          <h3>Activities</h3>
          <ul>
            <li>Outdoor Adventures</li>
            <li>Indoor Challenges</li>
            <li>Team Games</li>
            <li>Picnic Plans</li>
            <li>Kids’ Fun</li>
          </ul>
        </div>

        {/* === CONTACT INFO === */}
        <div className="footer-column">
          <h3>Get in Touch</h3>
          <ul className="contact-info">
            <li>
              <MapPin size={16} /> 12 Fun Street, Lagos, Nigeria
            </li>
            <li>
              <Phone size={16} /> +234 707 036 9928
            </li>
            <li>
              <Mail size={16} /> hello@playfuloutings.com
            </li>
          </ul>

          <div className="socials">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
            <Youtube />
          </div>
        </div>
      </div>

      <ScrollingTicker />
    </footer>
  );
}
