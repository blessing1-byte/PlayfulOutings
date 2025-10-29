import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Menu,
  X,
  LogOut,
  ArrowBigDownDashIcon,
  ArrowDownSquareIcon,
} from "lucide-react";
import { RouteConfig } from "../Routes";
import { gamesData } from "../Data/gameData";
import VisitorsCounter from "../UI/VisitorsCounter";
import "../CSS/NavBar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [gamesDropdownOpen, setGamesDropdownOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const userMenuRef = useRef(null);

  const navLinks = RouteConfig?.[0]?.children || [];
  const categories = Object.keys(gamesData || {});

  // Load logged in user
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setLoggedInUser(user);
  }, []);

  // Handle scroll style
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setGamesDropdownOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    setUserMenuOpen(false);
    navigate("/login");
  };

  const handleCategorySelect = (categoryKey) => {
    localStorage.setItem("selectedCategory", categoryKey);
    setGamesDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate("/games");
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="right_nav">
        <Link to="/" className="navbar-brand">
          PlayfulOutings
        </Link>
        <VisitorsCounter />
      </div>

      {/* ====== Desktop Navigation ====== */}
      <div className="nav-links">
        {navLinks
          .filter(
            (link) => link.label && !["Login", "Signup"].includes(link.label)
          )
          .map((link, index) => {
            if (link.label.toLowerCase() === "games") {
              return (
                <div key={index} className="games-dropdown" ref={dropdownRef}>
                  <button
                    className="games-dropdown-btn"
                    onClick={() => setGamesDropdownOpen((prev) => !prev)}
                  >
                    Games <ArrowDownSquareIcon size={18} />
                  </button>

                  {gamesDropdownOpen && (
                    <div className="games-dropdown-menu">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          className="dropdown-item"
                          onClick={() => handleCategorySelect(cat)}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={index} to={link.path} className="nav-link">
                {link.label}
              </Link>
            );
          })}
      </div>

      {/* ====== User Menu ====== */}
      <div className="nav-user" ref={userMenuRef}>
        <button
          className="user-icon-btn"
          onClick={() => setUserMenuOpen((prev) => !prev)}
        >
          <User size={22} />
        </button>

        {userMenuOpen && (
          <div className="user-dropdown">
            {loggedInUser ? (
              <button className="dropdown-item logout" onClick={handleLogout}>
                <LogOut size={16} /> Logout
              </button>
            ) : (
              <>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setUserMenuOpen(false);
                    navigate("/login");
                  }}
                >
                  Login
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setUserMenuOpen(false);
                    navigate("/signup");
                  }}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {/* ====== Mobile Toggle ====== */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen((s) => !s)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* ====== Mobile Menu ====== */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks
            .filter(
              (link) => link.label && !["Login", "Signup"].includes(link.label)
            )
            .map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="mobile-menu-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

          <div className="mobile-dropdown">
            <p className="mobile-dropdown-title">Games</p>
            {categories.map((cat) => (
              <button
                key={cat}
                className="mobile-dropdown-item"
                onClick={() => handleCategorySelect(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
