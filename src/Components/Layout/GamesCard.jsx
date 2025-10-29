import React from "react";
import { Link } from "react-router-dom";
import "../CSS/GamesCard.css";
import { categories } from "../index";

const GameCards = () => {
  return (
    <section className="categories-section">
      <div className="section-header">
        <h2>Explore Game Categories</h2>
        <p>Discover fun activities for every age, mood, and occasion.</p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => {
          //   const Icon = category.icon;
          return (
            <div key={category.id} className="category-card">
              <div className="overlay"></div>
              <div
                className="category-content"
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: 360,
                  objectFit: "cover",
                }}
              >
                <div className="details">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>

                  <Link to={category.link} className="view-btn">
                    View Games
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GameCards;
