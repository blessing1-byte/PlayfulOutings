import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../UI/Cards";
import "../CSS/ItineraryPreview.css";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";
import {
  Search,
  Trophy,
  UtensilsCrossed,
  Crown,
  Mic,
  ChefHat,
  Volleyball,
  Disc,
  Castle,
} from "lucide-react";

const activityIcons = {
  "Scavenger Hunt": Search,
  "Tug of War": Trophy,
  "Picnic Lunch": UtensilsCrossed,
  Chess: Crown,
  Karaoke: Mic,
  "Cooking Contest": ChefHat,
  "Beach Volleyball": Volleyball,
  Frisbee: Disc,
  "Sandcastle Building": Castle,
};

// Activity image map
const activityImages = {
  "Scavenger Hunt":
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&q=60&w=600",
  "Tug of War":
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&q=60&w=600",
  "Picnic Lunch":
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&q=60&w=600",
  Chess:
    "https://images.unsplash.com/photo-1614280393362-2571b1dc1c85?auto=format&q=60&w=600",
  Karaoke:
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&q=60&w=600",
  "Cooking Contest":
    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&q=60&w=600",
  "Beach Volleyball":
    "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&q=60&w=600",
  Frisbee:
    "https://images.unsplash.com/photo-1627492556902-0bfb996bd067?auto=format&q=60&w=600",
  "Sandcastle Building":
    "https://images.unsplash.com/photo-1597992591484-c46e47b3a5f5?auto=format&q=60&w=600",
};

const itineraries = [
  {
    id: 1,
    title: "Outdoor Adventure",
    description: "A day filled with team challenges, nature walks, and games.",
    activities: ["Scavenger Hunt", "Tug of War", "Picnic Lunch"],
    image:
      "https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?auto=format&q=60&w=500",
  },
  {
    id: 2,
    title: "Indoor Game Fiesta",
    description: "Fun activities you can enjoy indoors, from chess to karaoke.",
    activities: ["Chess", "Karaoke", "Cooking Contest"],
    image:
      "https://images.unsplash.com/photo-1585504198199-20277593b94f?auto=format&q=60&w=500",
  },
  {
    id: 3,
    title: "Beach Day",
    description: "Sun, sand, and sea games for an unforgettable outing.",
    activities: ["Beach Volleyball", "Frisbee", "Sandcastle Building"],
    image:
      "https://plus.unsplash.com/premium_photo-1682097756691-36100f74cc14?auto=format&q=60&w=500",
  },
];

export default function ItineraryPreview() {
  const [hoverImage, setHoverImage] = useState({});

  return (
    <section className="itinerary-section">
      <h2 className="section-title">Featured Itineraries</h2>

      <div className="card-grid">
        {itineraries.map((item) => {
          const currentImage = hoverImage[item.id] || item.image;

          return (
            <Card key={item.id} className="itinerary-card">
              <CardHeader className="image-wrapper">
                <img
                  src={currentImage}
                  alt={item.title}
                  className="card-image smooth-fade"
                />
              </CardHeader>

              <CardContent>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>

                <ul className="activity-list">
                  {item.activities.map((activity, i) => {
                    const Icon = activityIcons[activity];
                    return (
                      <li
                        key={i}
                        className="activity-item"
                        onMouseEnter={() =>
                          setHoverImage((prev) => ({
                            ...prev,
                            [item.id]: activityImages[activity],
                          }))
                        }
                        onMouseLeave={() =>
                          setHoverImage((prev) => ({
                            ...prev,
                            [item.id]: item.image,
                          }))
                        }
                      >
                        {Icon && <Icon size={18} className="activity-icon" />}
                        <span>{activity}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>

              <CardFooter>
                <Button className="view-btn">View Details</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <div className="view-all-container">
        <Link to="/itinerary" className="view-all-btn">
          View All Itineraries
        </Link>
      </div>
    </section>
  );
}
