import React from "react";
import { useParams, Link } from "react-router-dom";
import { gamesData } from "../Data/gameData";
import { Button } from "../UI/Button";
import * as Icons from "lucide-react";
import "../CSS/gamesDetails.css";

export default function GameDetails() {
  const { category, gameName } = useParams();

  // Decode and normalize game name
  const decodedName = decodeURIComponent(gameName)
    .replace(/-/g, " ")
    .trim()
    .toLowerCase();

  // Get category data safely
  const categoryData = gamesData[category] || [];

  // Find the game by normalized name
  const game = categoryData.find(
    (g) => g.name.toLowerCase().trim() === decodedName
  );

  if (!game) {
    console.warn(
      `Game not found for category="${category}" and name="${decodedName}"`
    );
    return (
      <div className="not-found">
        <h2>Game not found</h2>
        <Link to="/games">
          <Button>Back to Games</Button>
        </Link>
      </div>
    );
  }

  const Icon = Icons[game.icon] || Icons.Gamepad2;

  return (
    <section className="game-details">
      <div className="game-details-container">
        <img
          src={game.image}
          alt={game.name}
          className="game-details-image"
          loading="lazy"
        />

        <div className="game-info">
          <h1 className="game-title">
            <Icon size={22} className="inline-icon" /> {game.name}
          </h1>
          <p className="game-description">{game.description}</p>

          <div className="game-buttons">
            <Button asChild className="view-itinerary-btn">
              <Link
                to={`/itinerary/${category}/${encodeURIComponent(
                  game.name.toLowerCase().replace(/\s+/g, "-")
                )}`}
                className="button_link"
              >
                View Itinerary
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link to="/games" className="button_link_black">
                Back to Games
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
