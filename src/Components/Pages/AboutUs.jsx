import React from "react";
import { FaUsers, FaLightbulb, FaHeart, FaHandsHelping } from "react-icons/fa";
import "../CSS/About.css";
import blessingImg from "../assets/blessing.jpg";
import emeraldImg from "../assets/emerad.jpg";
import ijeomaImg from "../assets/ijeoma.jpg";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Creating Joyful Moments Through Play</h1>
          <p>
            At <strong>PlayfulOutings</strong>, we design experiences that bring
            people together through laughter, creativity, and fun.
          </p>
          {/* <Button>
            <Link className="btn" to="games">
              Explore Our Games
            </Link>
          </Button> */}
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <h2>Our Story</h2>
        <p>
          What began as a simple passion for games has evolved into a mission to
          reconnect families, friends, and communities through play. At
          <strong> PlayfulOutings</strong>, every game we share celebrates
          connection, learning, and unforgettable memories.
        </p>
      </section>

      {/* Values Section */}
      <section className="values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <FaLightbulb className="value-icon" />
            <h3>Innovation</h3>
            <p>
              We keep reinventing how fun is shared — creatively and
              inclusively.
            </p>
          </div>
          <div className="value-card">
            <FaUsers className="value-icon" />
            <h3>Community</h3>
            <p>
              Play is better together — we believe in unity through joyful
              moments.
            </p>
          </div>
          <div className="value-card">
            <FaHeart className="value-icon" />
            <h3>Passion</h3>
            <p>
              Driven by love for creativity, play, and the art of connection.
            </p>
          </div>
          <div className="value-card">
            <FaHandsHelping className="value-icon" />
            <h3>Impact</h3>
            <p>
              Every experience we create aims to uplift and inspire
              togetherness.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="vision-mission">
        <div className="card">
          <h3>Our Vision</h3>
          <p>
            To become the go-to destination for unique indoor and outdoor fun —
            redefining how people connect and play.
          </p>
        </div>
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To craft meaningful experiences that blend creativity, adventure,
            and joy for every generation.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src={blessingImg} alt="Blessing" />
            <h4>Blessing</h4>
            <p>Founder & Creative Lead</p>
          </div>

          <div className="team-card">
            <img src={ijeomaImg} alt="ijeoma" />
            <h4>Ijeoma</h4>
            <p>Experience Designer</p>
          </div>

          <div className="team-card">
            <img src={emeraldImg} alt="emerald" />
            <h4>Emerald</h4>
            <p>Co Founder</p>
          </div>

          {/* <div className="team-card">
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328e3d4e?w=300"
              alt="Samuel"
            />
            <h4>Samuel</h4>
            <p>Operations & Growth</p>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
