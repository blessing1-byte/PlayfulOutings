import React, { useState } from "react";
import "../CSS/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [buttonText, setButtonText] = useState("Submit");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{7,15}$/;
    return re.test(String(phone));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      alert("Please fill out all required fields.");
      return;
    }
    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!validatePhone(formData.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    setButtonText("Submitting...");

    setTimeout(() => {
      localStorage.setItem(
        "playfulOutingsContactForm",
        JSON.stringify(formData)
      );
      setButtonText("Submitted Successfully");

      setTimeout(() => {
        setButtonText("Submit");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 2000);
    }, 1500);
  };

  return (
    <div className="contact-us-page">
      <section className="contact-hero">
        <div className="hero-overlay">
          <h1>Contact Us</h1>
          <p>
            We’re here to help! Whether you have questions, feedback, or
            partnership ideas — reach out and we’ll respond as soon as we can.
          </p>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-left">
            <h2>Get in touch</h2>
            <p>
              We’d love to hear from you. Reach out to PlayfulOutings anytime!
            </p>
            <div className="contact-info">
              <p>
                <strong>Head Office:</strong>
                <br /> 123 Fun Avenue, Lagos, Nigeria
              </p>
              <p>
                <strong>Email Us:</strong>
                <br /> support@playfuloutings.com
              </p>
              <p>
                <strong>Call Us:</strong>
                <br /> +234 800 123 4567
              </p>
              <p>
                <strong>Follow us on our socials:</strong>
              </p>
            </div>
            <div className="socials">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message *"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="map-section">
        <iframe
          title="PlayfulOutings Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.012023220865!2d3.379205974964339!3d6.524379423386339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b3b5b4d96a1%3A0x1f1fcd181d1c1f1f!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1697482000000!5m2!1sen!2sng"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;
