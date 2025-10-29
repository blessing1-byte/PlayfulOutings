import { useState, useEffect, useRef } from "react";
import "../CSS/SearchBar.css";
import data from "../data/Data.json";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Filter dynamically
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = (data || []).filter((item) => {
      const name = item.name || item.title || "";
      return name.toLowerCase().includes(query.toLowerCase());
    });

    setSuggestions(filtered);
    setShowSuggestions(true);
    setSelectedIndex(-1);
  }, [query]);

  const handleInputChange = (e) => setQuery(e.target.value);

  const handleSuggestionClick = (item) => {
    setQuery(item.name || item.title);
    setShowSuggestions(false);
  };

  const handleClear = () => {
    setQuery("");
    setSuggestions([]);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSuggestionClick(suggestions[selectedIndex]);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (selectedIndex >= 0 && suggestionsRef.current) {
      const selectedEl = suggestionsRef.current.children[selectedIndex];
      selectedEl?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  return (
    <div>
      {/* <div className="searchbar-box"> */}
      <div className="search-input-wrapper">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setShowSuggestions(true)}
          placeholder="Search indoor, outdoor, or itineraries..."
          className="search-input"
        />
        {query && (
          <button onClick={handleClear} className="clear-btn">
            ×
          </button>
        )}
      </div>

      {showSuggestions && (
        <div ref={suggestionsRef} className="suggestions-box">
          {suggestions.length > 0 ? (
            suggestions.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => handleSuggestionClick(item)}
                className={`suggestion-item ${
                  idx === selectedIndex ? "active" : ""
                }`}
              >
                <div className="suggestion-text">
                  <strong>{item.name || item.title}</strong>
                  <span className="type">{item.type}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No results found</p>
          )}
        </div>
      )}
      {/* </div> */}
    </div>
  );
}
