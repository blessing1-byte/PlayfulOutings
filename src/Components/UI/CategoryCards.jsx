// =========================
// 📁 CategoryCards.jsx
// =========================
import React from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../index";
import "../CSS/CategoryCards.css";

const CategoryCards = () => {
  const navigate = useNavigate();

  return (
    <section className="categories-section">
      <div className="section-header">
        <h2 className="section-title">Explore Our Game Categories</h2>
        <p className="section-subtitle">
          Choose from exciting indoor, outdoor, and family-friendly games.
        </p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => {
          //   const Icon = category.icon;

          return (
            <div
              key={category.id}
              className="category-card"
              style={{
                // backgroundColor: category.color,
                backgroundImage: category.image,
              }}
            >
              {/* <img
                src={category.image}
                alt={category.name}
                className="category-image"
              /> */}

              <div className="category-content">
                <div className="category-header">
                  {/* <Icon className="category-icon" /> */}
                  <h3>{category.name}</h3>
                </div>

                <p className="category-description">{category.description}</p>

                <button
                  onClick={() => navigate(category.link)}
                  className="view-button"
                >
                  View Games →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryCards;
