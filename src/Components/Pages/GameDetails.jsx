// GameDetails.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ChevronLeft,
  Clock,
  Trophy,
  Star,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";
import { getGameIcon } from "../UI/gamesIcons";
import "../CSS/gamesDetails.css";

export default function GameDetails({ gamesData }) {
  const { category, name } = useParams();
  const gameList = gamesData[category] || [];
  const game = gameList.find((g) => g.name === name);

  if (!game) {
    return (
      <div className="game-details-container not-found">
        <h2>Game not found</h2>
        <Link to="/games" className="back-btn">
          Back to Games
        </Link>
      </div>
    );
  }

  const GameIcon = getGameIcon(game.name);

  return (
    <div className="game-details-page">
      <div className="details-container">
        <Link to={`/category/${category}`} className="back-link">
          <ChevronLeft size={20} />
          Back to Category
        </Link>

        <div className="details-card">
          <div className="game-banner">
            <img src={game.image} alt={game.name} className="banner-image" />
            <div className="banner-overlay">
              <div className="banner-content">
                <div className="banner-icon-wrapper">
                  <GameIcon size={32} />
                </div>
                <div>
                  <h1 className="game-title">{game.name}</h1>
                  <p className="game-type">{game.type}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="details-content">
            <div className="stats-grid">
              <div className="stat-card stat-blue">
                <div className="stat-header">
                  <Users size={20} />
                  <span className="stat-label">Age Group</span>
                </div>
                <p className="stat-value">{game.ageGroup}</p>
              </div>

              <div className="stat-card stat-green">
                <div className="stat-header">
                  <Trophy size={20} />
                  <span className="stat-label">Difficulty</span>
                </div>
                <p className="stat-value">{game.difficulty}</p>
              </div>

              <div className="stat-card stat-purple">
                <div className="stat-header">
                  <Clock size={20} />
                  <span className="stat-label">Duration</span>
                </div>
                <p className="stat-value">{game.duration}</p>
              </div>

              <div className="stat-card stat-yellow">
                <div className="stat-header">
                  <Star size={20} />
                  <span className="stat-label">Rating</span>
                </div>
                <p className="stat-value">{game.popularity} / 5</p>
              </div>
            </div>

            <div className="location-section">
              <div className="section-header">
                <MapPin size={24} />
                <h2 className="section-title">Available Locations</h2>
              </div>
              <p className="location-text">{game.locationAvailability}</p>
            </div>

            <Link
              to={`/category/${category}/${encodeURIComponent(
                game.name
              )}/itinerary`}
              className="itinerary-link"
            >
              <div className="itinerary-icon-wrapper">
                <Calendar size={24} />
              </div>
              <div className="itinerary-text">
                <h3>View Complete Itinerary</h3>
                <p>Step-by-step guide to play this game</p>
              </div>
              <div className="itinerary-arrow">→</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
