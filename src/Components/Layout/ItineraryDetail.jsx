import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { gamesData } from "../Data/gameData";
import { Button } from "../UI/Button";
import * as Icons from "lucide-react";
import jsPDF from "jspdf";
import "../CSS/itineraryDetail.css";

export default function ItineraryDetail() {
  const { category, gameName } = useParams();
  const navigate = useNavigate();

  const formattedName = decodeURIComponent(gameName)
    .replace(/-/g, " ")
    .toLowerCase();

  const categoryData = gamesData[category] || [];
  const game = categoryData.find((g) => g.name.toLowerCase() === formattedName);

  if (!game) {
    return (
      <div className="itinerary-not-found">
        <h2>Itinerary not found</h2>
        <Link to="/games">
          <Button>Back to Games</Button>
        </Link>
      </div>
    );
  }

  const Icon = Icons[game.icon] || Icons.Gamepad2;

  // 🧾 Generate Dynamic PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text(game.name, 20, 20);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Type: ${game.type}`, 20, 35);
    doc.text(`Age Group: ${game.ageGroup}`, 20, 45);
    doc.text(`Duration: ${game.duration}`, 20, 55);
    doc.text(`Difficulty: ${game.difficulty}`, 20, 65);

    doc.text("Description:", 20, 80);
    doc.text(doc.splitTextToSize(game.description, 170), 20, 90);

    if (game.instructions) {
      doc.text("Instructions:", 20, 120);
      doc.text(doc.splitTextToSize(game.instructions, 170), 20, 130);
    }

    doc.save(`${game.name}_instructions.pdf`);
  };

  return (
    <section className="itinerary-detail">
      <div className="itinerary-header">
        <img src={game.image} alt={game.name} className="itinerary-image" />
        <div>
          <h1>
            <Icon size={24} /> {game.name}
          </h1>
          <p>{game.type}</p>
        </div>
      </div>

      <div className="itinerary-info">
        <p>
          <Icons.Clock size={16} /> Duration: {game.duration}
        </p>
        <p>
          <Icons.Users size={16} /> Age Group: {game.ageGroup}
        </p>
        <p>
          <Icons.Star size={16} /> Popularity: {game.popularity}
        </p>
      </div>

      <div className="itinerary-section">
        <h2>Description</h2>
        <p>{game.description}</p>
      </div>

      {game.instructions && (
        <div className="itinerary-section">
          <h2>Instructions</h2>
          <p>{game.instructions}</p>
        </div>
      )}

      {/* 🏞 Locations List */}
      <div className="locations-section">
        <h2>Available Locations</h2>
        {game.locations.map((loc, i) => (
          <div key={i} className="location-card">
            <div className="loc-info">
              <Icons.MapPin size={16} /> <strong>{loc.name}</strong>
              <p>
                Ticket Price:{" "}
                {loc.ticketPrice > 0 ? `₦${loc.ticketPrice}` : "Free"}
              </p>
            </div>
            {loc.ticketPrice > 0 && (
              <Button
                onClick={() =>
                  navigate(`/book/${encodeURIComponent(loc.name)}`)
                }
              >
                View & Book
              </Button>
            )}
          </div>
        ))}
      </div>

      <div className="itinerary-actions">
        <Button onClick={handleDownloadPDF}>
          <Icons.Download size={16} /> Download Instructions
        </Button>

        <Link to="/games">
          <Button variant="outline">
            <Icons.ArrowLeft size={16} /> Back to Games
          </Button>
        </Link>
      </div>
    </section>
  );
}
