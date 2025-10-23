// src/Pages/Games.jsx
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../UI/Cards";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";
import { gamesData } from "../Data/gameData";
import "../CSS/games.css";
import * as Icons from "lucide-react"; // Import all icons

export default function Games() {
  return (
    <section className="games-section">
      <h2 className="section-title">Explore Our Games</h2>

      {/* Loop through each category like indoorGames, outdoorGames, etc. */}
      {Object.entries(gamesData).map(([category, games]) => (
        <div key={category} className="game-category">
          <h3 className="category-title">
            {category.replace(/([A-Z])/g, " $1")}
          </h3>

          <div className="games-grid">
            {games.map((game, index) => {
              // Pick icon dynamically from iconMap
              const Icon =
                Icons[game.icon] ||
                Icons[Object.keys(Icons).find((key) => key === game.name)] ||
                Icons.Gamepad2; // fallback

              return (
                <Card key={index} className="game-card">
                  <CardHeader>
                    <img
                      src={game.image}
                      alt={game.name}
                      className="game-image"
                    />
                  </CardHeader>

                  <CardContent>
                    <div className="game-title-row">
                      {Icon && <Icon size={20} className="game-icon" />}
                      <CardTitle>{game.name}</CardTitle>
                    </div>

                    <div className="game-tags">
                      <span className="tag">{game.type}</span>
                      <span className="tag">{game.ageGroup}</span>
                      <span className="tag difficulty">{game.difficulty}</span>
                    </div>

                    <CardDescription>{game.itinerary}</CardDescription>

                    <ul className="game-details">
                      <li>
                        <strong>Duration:</strong> {game.duration}
                      </li>
                      <li>
                        <strong>Popularity:</strong> {game.popularity}
                      </li>
                      <li>
                        <strong>Available in:</strong>{" "}
                        {game.locationAvailability}
                      </li>
                    </ul>
                  </CardContent>

                  <CardFooter>
                    <Button className="view-btn">
                      <Link to={`/games/${category}/${game.name}`}>
                        View Details
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
