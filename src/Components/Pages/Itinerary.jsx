import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Clock, Star } from "lucide-react";
import { gamesData } from "../Data/gameData";
import AlertModal from "../UI/AlertModal";
import "../CSS/Itinerary.css";
import { Button } from "../UI/Button";

const Itinerary = () => {
  const navigate = useNavigate();
  const [alertOpen, setAlertOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState({ category: "", name: "" });

  const categories = Object.keys(gamesData);

  // Handle view and booking logic
  const handleViewAndBook = (category, gameName) => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) {
      setSelectedGame({ category, name: gameName });
      setAlertOpen(true);
      return;
    }

    navigate(
      `/itinerary/${category}/${gameName.toLowerCase().replace(/\s+/g, "-")}`
    );
  };

  return (
    <div className="itinerary-page">
      {/*  Page Header */}
      <h1 className="itinerary-title">Explore All Itineraries</h1>
      <p className="itinerary-subtitle">
        Browse through available games and their locations to plan your outing.
      </p>

      {/*  Render Categories */}
      {categories.map((category) => (
        <div key={category} className="itinerary-category">
          <h2 className="category-title">{category.toUpperCase()}</h2>

          <div className="itinerary-grid">
            {gamesData[category].map((game) => {
              const hasPaidLocation = game.locations.some(
                (loc) => loc.ticketPrice && loc.ticketPrice > 0
              );

              return (
                <div key={game.name} className="itinerary-card">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="itinerary-img"
                  />

                  <div className="itinerary-info">
                    <h3>{game.name}</h3>
                    <p className="itinerary-desc">
                      {game.description.slice(0, 90)}...
                    </p>

                    {/*  Duration and Rating */}
                    <div className="itinerary-details">
                      <div className="detail">
                        <Clock size={16} />
                        <span>{game.duration}</span>
                      </div>
                      <div className="detail">
                        <Star size={16} />
                        <span>{game.popularity} / 5</span>
                      </div>
                    </div>

                    {/*  List of Locations */}
                    <div className="itinerary-locations-list">
                      {game.locations.map((location, i) => (
                        <div key={i} className="location-item">
                          <MapPin size={14} />
                          <span>{location.name}</span>
                        </div>
                      ))}
                    </div>

                    {/*  Button or Free Label */}
                    {hasPaidLocation ? (
                      <Button
                        className="view-btn"
                        onClick={() => handleViewAndBook(category, game.name)}
                      >
                        View
                      </Button>
                    ) : (
                      <p className="free-label">
                        Free Game — No Booking Needed
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* ⚠️ Alert Modal */}
      <AlertModal
        isOpen={alertOpen}
        title="Login Required"
        message="You must log in to view and book this game."
        confirmText="Login"
        cancelText="Close"
        showCloseIcon={false}
        onConfirm={() => {
          setAlertOpen(false);
          navigate("/login");
        }}
        onClose={() => setAlertOpen(false)}
      />
    </div>
  );
};

export default Itinerary;
