import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gamesData } from "../Data/gameData";
import "../CSS/navbar.css";

export default function GamesDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="nav-item dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Games
      </button>

      {open && (
        <div className="dropdown-menu">
          {Object.keys(gamesData).map((category) => (
            <Link
              key={category}
              to={`/games#${category.toLowerCase()}`}
              className="dropdown-link"
              onClick={() => setOpen(false)}
            >
              {category}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
