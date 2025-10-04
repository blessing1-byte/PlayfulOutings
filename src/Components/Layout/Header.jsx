import React from "react";
import "../CSS/Header.css";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  return (
    <div>
      <header>
        <div className="logo">
          <h1 className="logo_text">PlayfulOutings</h1>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Games Categories</li>
            <li>Itinerary</li>
            <li>Contact Us</li>
            <li>About Us</li>
          </ul>
        </nav>

        <div className="theme">
          <div className="search_input">
            <BsSearch className="searchIcon" />
            <input
              type="search"
              name="Search"
              id="search"
              placeholder="Search"
            />
          </div>
          <div className="mode">theme</div>
        </div>
      </header>
    </div>
  );
}
