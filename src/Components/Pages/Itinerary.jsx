import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../CSS/Itinerary.css";

// Keep your existing itineraryData here
import { itineraryData } from "../Data/itineraryData"; // move your itineraryData object into /data/itineraryData.js

export default function ItineraryPage() {
  const { category, name, slug } = useParams();
  const [activeDay, setActiveDay] = useState(0);

  let itinerary = null;

  if (slug) {
    itinerary = itineraryData.slugs[slug];
  } else if (category && name) {
    itinerary = itineraryData.games[category]?.[name];
  }

  if (!itinerary) {
    return (
      <div className="itinerary-not-found">
        <h2>Itinerary Not Found</h2>
        <p>Sorry, we couldn't find the itinerary for this game.</p>
        <Link to="/games" className="back-link">
          ← Back to Games
        </Link>
      </div>
    );
  }

  return (
    <div className="itinerary-detail-container">
      <div className="itinerary-header">
        <Link to="/games" className="back-link">
          ← Back to Games
        </Link>
        <h1 className="itinerary-title">{itinerary.title}</h1>
        <p className="itinerary-description">{itinerary.description}</p>
        <div className="itinerary-meta">
          <span>📅 {itinerary.duration}</span>
        </div>
      </div>

      {/* Suggested Locations */}
      <section className="locations-section">
        <h2 className="section-heading">📍 Suggested Locations</h2>
        <div className="locations-grid">
          {itinerary.locations.map((loc, i) => (
            <div key={i} className="location-card">
              <div className="location-image">
                <img src={loc.image} alt={loc.name} />
                <span className="location-type">{loc.type}</span>
              </div>
              <div className="location-content">
                <h3>{loc.name}</h3>
                <p>📍 {loc.address}</p>
                <p>💰 {loc.price}</p>
                <ul>
                  {loc.activities.map((a, j) => (
                    <li key={j}>✓ {a}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Day-by-Day Schedule */}
      <section className="schedule-section">
        <h2 className="section-heading">🗓️ Daily Plan</h2>

        {/* Tabs */}
        <div className="day-tabs">
          {itinerary.itinerary.map((dayPlan, idx) => (
            <button
              key={idx}
              className={`day-tab ${activeDay === idx ? "active" : ""}`}
              onClick={() => setActiveDay(idx)}
            >
              {dayPlan.day}
            </button>
          ))}
        </div>

        {/* Schedule Details */}
        <div className="schedule-content">
          {itinerary.itinerary[activeDay].schedule.map((item, idx) => (
            <div key={idx} className="schedule-item">
              <div className="schedule-time">{item.time}</div>
              <div className="schedule-details">
                <h4>{item.activity}</h4>
                <p>📍 {item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="itinerary-actions">
        <button className="btn btn-primary">💾 Save Itinerary</button>
        <button className="btn btn-secondary">⬇️ Download PDF</button>
        <button className="btn btn-secondary">🔗 Share</button>
      </div>
    </div>
  );
}
