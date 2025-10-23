import { Button } from "../UI/Button";
import { ArrowDown } from "lucide-react";
import Slider from "../UI/Slider";
import "../CSS/Hero.css"; // <-- External stylesheet
import { Link } from "react-router-dom";
// import VisitorsCounter from "../UI/VisitorsCounter";

const Hero = () => {
  const scrollToGames = () => {
    const element = document.querySelector("#games");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Slider */}
      <div className="hero-bg">
        {/* <VisitorsCounter /> */}
        <Slider />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Make Every Outing
          <br />
          <span className="highlight-text">Memorable</span>
        </h1>

        <p className="hero-subtitle">
          Discover fun indoor and outdoor games for all ages. Plan your perfect
          getaway with our curated itineraries.
        </p>

        <div className="hero-buttons">
          <Button size="lg" onClick={scrollToGames} className="btn-primary">
            <Link to="games" className="link-explore">
              {" "}
              Explore Games
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.querySelector("#itinerary");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline"
          >
            <Link to="itinerary" className="link-getaway">
              Plan a Getaway
            </Link>
          </Button>
        </div>

        <div className="scroll-arrow">
          <ArrowDown className="arrow-icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
