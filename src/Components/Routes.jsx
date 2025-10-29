import React from "react";
import {
  Home,
  AboutUs,
  ContactUs,
  Games,
  GameDetails,
  Itinerary,
} from "./index";

import PageContainer from "../Components/Pages/PageContainer";
import GameCards from "../Components/Layout/GamesCard";
import ItineraryMap from "../Components/Layout/ItineraryMap";
import ItineraryDetail from "../Components/Layout/ItineraryDetail";
import Saved from "../Components/Layout/Saved";
import Favorite from "../Components/Layout/Favorite";
import BookTicket from "../Components/Layout/BookTicket";
import { gamesData } from "./Data/gameData";
import Login from "./UI/Login";
import Signup from "./UI/Signup";

// Main Route Configuration
export const RouteConfig = [
  {
    path: "/",
    element: <PageContainer />,
    children: [
      // Static pages
      { path: "", element: <Home />, label: "Home" },
      { path: "games", element: <Games />, label: "Games" },
      { path: "contact", element: <ContactUs />, label: "Contact" },
      { path: "about", element: <AboutUs />, label: "About" },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      //  User pages
      { path: "saved", element: <Saved /> },
      { path: "favorite", element: <Favorite /> },

      //  Game details page (dynamic)
      {
        path: "games/:category/:gameName",
        element: <GameDetails gamesData={gamesData} />,
      }, //  All itineraries page
      { path: "itinerary", element: <Itinerary />, label: "Itinerary" },
      { path: "/itinerary/:category/:gameName", element: <ItineraryDetail /> }, //  Dynamic itinerary detail page
      //  must not start with "/"
      {
        path: "itinerary/:category/:name",
        element: <ItineraryDetail gamesData={gamesData} />,
      },

      //  Map view (optional)
      { path: "map", element: <ItineraryMap /> },

      //  Booking page (for specific locations)
      {
        path: "book/:locationSlug",
        element: <BookTicket />,
      },
    ],
  },
];
