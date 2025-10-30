import React from "react";
import "../CSS/AboutUs.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <section className="about-banner">
        <div className="banner-text">
          <h1>About Playful Outings</h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="section-box">
          <h2>Our Mission</h2>
          <p>
            At Playful Outings, our mission is to design memorable experiences
            that inspire laughter, creativity, and human connection. We believe
            play is not just for kids — it’s the universal language of joy.
          </p>
        </div>
        <div className="section-box">
          <h2>Our Vision</h2>
          <p>
            To be the leading community-driven brand redefining how people
            unwind and connect — one playful moment at a time.
          </p>
        </div>
      </section>

      {/* Attributes Section */}
      <section className="about-attributes">
        <h2>Our Core Values</h2>
        <div className="attribute-grid">
          <div className="attribute-card">
            <img src="https://cdn-icons-png.freepik.com/512/8693/8693569.png" alt="Innovation" />
            <h3>Innovation</h3>
            <p>We bring new ideas to every event, turning imagination into reality.</p>
          </div>
          <div className="attribute-card">
            <img src="https://www.pngkey.com/png/full/290-2901269_safety-first-sign-png-acm-logo.png" alt="Safety" />
            <h3>Safety</h3>
            <p>Every activity is designed with comfort and security at heart.</p>
          </div>
          <div className="attribute-card">
            <img src="https://static.vecteezy.com/system/resources/previews/055/142/670/non_2x/illustration-of-a-blue-group-of-people-icons-showing-community-teamwork-and-collective-leadership-on-a-transparent-background-png.png" alt="Community" />
            <h3>Community</h3>
            <p>We believe joy grows stronger when shared with others.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png" alt="Team Member 1" />
            <h3>Blessing Udom</h3>
            <p>Founder & Creative Director</p>
          </div>
          <div className="team-member">
            <img src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png" alt="Team Member 2" />
            <h3>Emerald Jonathan</h3>
            <p>Experience Designer</p>
          </div>
          <div className="team-member">
            <img src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png" alt="Team Member 3" />
            <h3>Ikedinachi Anyadike</h3>
            <p>Operations Lead</p>
          </div>
          <div className="team-member">
            <img src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png" alt="Team Member 4" />
            <h3>Oluwatobi Gabriel</h3>
            <p>Community Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;