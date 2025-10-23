import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom icons
const indoorIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/3225/3225084.png", // indoor
  iconSize: [30, 30],
});

const outdoorIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/854/854878.png", // outdoor
  iconSize: [30, 30],
});

// Itinerary data
const itineraries = [
  {
    id: 1,
    slug: "lekki-conservation-centre",
    title: "Lekki Conservation Centre",
    location: "Lagos, Nigeria",
    description: "Outdoor picnic, canopy walk, and team challenges.",
    lat: 6.4419,
    lng: 3.5371,
    type: "outdoor",
  },
  {
    id: 2,
    slug: "playzone-arena",
    title: "The PlayZone Arena",
    location: "Lagos, Nigeria",
    description: "Indoor VR gaming, laser tag, and board game lounges.",
    lat: 6.6018,
    lng: 3.3515,
    type: "indoor",
  },
  {
    id: 3,
    slug: "obudu-mountain-resort",
    title: "Obudu Mountain Resort",
    location: "Cross River, Nigeria",
    description: "Outdoor adventure, mountain games, and nature hikes.",
    lat: 6.3703,
    lng: 9.3975,
    type: "outdoor",
  },
];

export default function ItineraryMap() {
  const navigate = useNavigate();

  return (
    <section style={{ textAlign: "center", padding: "60px 20px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
        Explore <span style={{ color: "#f97316" }}>Indoor & Outdoor</span> Game
        Itineraries
      </h2>
      <p style={{ color: "#555", maxWidth: "600px", margin: "0 auto 30px" }}>
        Discover exciting spots across Nigeria — from thrilling outdoor
        adventures to fun indoor arenas.
      </p>

      <div
        style={{ height: "500px", borderRadius: "20px", overflow: "hidden" }}
      >
        <MapContainer
          center={[9.082, 8.6753]}
          zoom={6}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />

          {itineraries.map((item) => (
            <Marker
              key={item.id}
              position={[item.lat, item.lng]}
              icon={item.type === "indoor" ? indoorIcon : outdoorIcon}
            >
              <Popup>
                <strong>{item.title}</strong> <br />
                <em>{item.location}</em> <br />
                <small>{item.description}</small> <br />
                <button
                  onClick={() => navigate(`/itinerary/${item.slug}`)}
                  style={{
                    marginTop: "8px",
                    padding: "5px 10px",
                    background: item.type === "indoor" ? "#0ea5e9" : "#22c55e",
                    border: "none",
                    borderRadius: "5px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  View Itinerary
                </button>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
}
