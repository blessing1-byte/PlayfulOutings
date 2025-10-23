import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, Menu, X } from "lucide-react";
import { RouteConfig } from "../Routes";
import "../CSS/NavBar.css";
import VisitorsCounter from "../UI/VisitorsCounter";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navLinks = RouteConfig?.[0]?.children || [];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClass = `navbar ${
    scrolled ? "navbar--scrolled" : "navbar--transparent"
  }`;

  return (
    <nav className={navbarClass}>
      {/* Brand */}
      <div className="right_nav">
        <Link to="/" className="navbar-brand">
          PlayfulOutings
        </Link>
        <VisitorsCounter />
      </div>

      {/* Desktop Navigation */}
      <div className="nav-links">
        {navLinks.map(
          (link, index) =>
            link.label && (
              <div>
                <Link key={index} to={link.path} className="nav-link">
                  {link.label}
                </Link>
              </div>
            )
        )}
      </div>

      {/* User Section */}
      <div className="nav-user">
        <button
          className="user-button"
          onClick={() => setUserMenuOpen((prev) => !prev)}
          aria-label="User menu"
        >
          <User size={20} />
        </button>

        {userMenuOpen && (
          <div className="user-dropdown">
            <Link to="/profile" className="user-dropdown-item">
              Profile
            </Link>
            <Link to="/favorite" className="user-dropdown-item">
              Favorite
            </Link>
            <Link to="/saved" className="user-dropdown-item">
              Saved
            </Link>
            <hr className="user-dropdown-divider" />
            <button className="user-dropdown-item user-dropdown-item--logout">
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map(
            (link, index) =>
              link.label && (
                <Link
                  key={index}
                  to={link.path}
                  className="mobile-menu-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
          )}
          <hr className="mobile-menu-divider" />
          <Link
            to="/profile"
            className="mobile-menu-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Profile
          </Link>
          <Link
            to="/settings"
            className="mobile-menu-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Settings
          </Link>
          <Link
            to="/bookings"
            className="mobile-menu-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            My Bookings
          </Link>
        </div>
      )}
    </nav>
  );
}
