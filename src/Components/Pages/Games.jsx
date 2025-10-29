import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gamesData } from "../Data/gameData";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../UI/Cards";
import { Button } from "../UI/Button";
import {
  Search,
  Gamepad2,
  Dice5,
  Users,
  PartyPopper,
  Footprints,
  Home,
} from "lucide-react";
import "../CSS/games.css";

export default function Games() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

  const categories = ["All", ...Object.keys(gamesData)];

  // Icons for each category
  const categoryIcons = {
    indoorGames: <Home size={16} />,
    outdoorGames: <Footprints size={16} />,
    familyGames: <Users size={16} />,
    partyGames: <PartyPopper size={16} />,
    All: <Dice5 size={16} />,
  };

  // Filter logic
  const filteredGames = Object.keys(gamesData).reduce((acc, category) => {
    if (selectedCategory !== "All" && selectedCategory !== category) return acc;

    const matches = gamesData[category].filter((game) =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matches.length > 0) acc[category] = matches;
    return acc;
  }, {});

  // ✅ Sync with Navbar
  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      setSelectedCategory(savedCategory);
      localStorage.removeItem("selectedCategory");
    }
  }, []);

  return (
    <section className="games-section">
      <h1 className="section-title">Explore Games</h1>

      {/* 🔍 Search Bar */}
      <div className="filter-container">
        <div className="filter-input-wrapper">
          <Search size={18} className="filter-icon" />
          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="filter-input"
          />
        </div>
      </div>

      {/* 🧭 Category Buttons */}
      <div className="category-filter-bar">
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
            variant={selectedCategory === cat ? "default" : "outline"}
          >
            {categoryIcons[cat] || <Gamepad2 size={16} />}{" "}
            <span style={{ marginLeft: "5px" }}>{cat}</span>
          </Button>
        ))}
      </div>

      {/* 🎮 Games Display */}
      {Object.keys(filteredGames).length === 0 ? (
        <p className="no-results">No games found.</p>
      ) : (
        Object.keys(filteredGames).map((categoryKey) => (
          <div key={categoryKey} className="category-block">
            <h2 className="category-title">
              {categoryIcons[categoryKey] || <Gamepad2 size={18} />}{" "}
              <span style={{ marginLeft: "5px" }}>{categoryKey}</span>
            </h2>

            <div className="games-grid">
              {filteredGames[categoryKey].map((game) => (
                <Card key={game.name} className="game-card">
                  <CardHeader>
                    <img
                      src={game.image}
                      alt={game.name}
                      className="game-image"
                    />
                  </CardHeader>

                  <CardContent>
                    <CardTitle>
                      <Gamepad2 size={16} className="inline-icon" /> {game.name}
                    </CardTitle>
                    <p>{game.description.slice(0, 80)}...</p>
                  </CardContent>

                  <CardFooter>
                    <Link to={`/games/${categoryKey}/${slugify(game.name)}`}>
                      <Button>View Details</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))
      )}
    </section>
  );
}
