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
import "../CSS/footer.css";
import ScrollingTicker from "../UI/ScrollingTicker";
import { Link } from "react-router-dom";

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
            <Link to="/" className="li">
              Home
            </Link>
            <Link to="games" className="li">
              Games
            </Link>
            <Link to="itinerary" className="li">
              Itineraries
            </Link>
            <Link to="about" className="li">
              About Us
            </Link>
            <Link to="contact" className="li">
              Contact
            </Link>
          </ul>
        </div>

        {/* === ACTIVITIES === */}
        <div className="footer-column">
          <h3>Activities</h3>
          <ul>
            <Link to="games" className="li">
              Outdoor Adventures
            </Link>
            <Link to="games" className="li">
              Indoor Challenges
            </Link>
            <Link to="games" className="li">
              Family Games
            </Link>
            <Link to="games" className="li">
              Kids’ Fun
            </Link>
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
