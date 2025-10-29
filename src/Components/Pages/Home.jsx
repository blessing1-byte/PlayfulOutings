import React from "react";
// import Carousel from "./../UI/Carousel";
import Hero from "./../Layout/Hero";
import GameCards from "../Layout/GamesCard";
import "../CSS/Home.css";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";
import ItineraryPreview from "../Layout/ItineraryPreview";
import NewsletterCTA from "../Layout/Newsletter";
import ItineraryMap from "../Layout/ItineraryMap";
import Footer from "../Layout/Footer";
export default function Home() {
  return (
    <div>
      <Hero />
      <GameCards />
      <ItineraryPreview />
      <ItineraryMap />
      <NewsletterCTA />
      {/* <Footer /> */}
    </div>
  );
}
