import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../CSS/BookTicket.css";

export default function BookTicket() {
  const { locationSlug } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tickets: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `🎟️ Booking Confirmed!\n\nLocation: ${decodeURIComponent(
        locationSlug
      )}\nName: ${formData.name}\nTickets: ${formData.tickets}`
    );
    navigate("/"); // go back or redirect to confirmation page
  };

  return (
    <div className="booking-page">
      <div className="booking-card">
        <h2>Book Tickets for {decodeURIComponent(locationSlug)}</h2>
        <p className="subtitle">
          Please fill in your details to reserve or buy tickets.
        </p>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label>Number of Tickets</label>
            <input
              type="number"
              name="tickets"
              value={formData.tickets}
              onChange={handleChange}
              min="1"
              max="10"
            />
          </div>

          <button type="submit" className="book-btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
