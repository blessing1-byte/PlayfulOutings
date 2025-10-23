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
import ItineraryDetail from "../Components/Layout/ItineraryDetail"; // ✅ keep this one only
import Saved from "../Components/Layout/Saved";
import Favorite from "../Components/Layout/Favorite";
import Profile from "../Components/Layout/Profile";
import { gamesData } from "./Data/gameData";

// ✅ Your cleaned and corrected RouteConfig
export const RouteConfig = [
  {
    path: "/",
    element: <PageContainer />,
    children: [
      { path: "", element: <Home />, label: "Home" },
      { path: "games", element: <Games />, label: "Games" },
      { path: "contact", element: <ContactUs />, label: "Contact" },
      { path: "about", element: <AboutUs />, label: "About" },
      { path: "profile", element: <Profile />, label: "Profile" },
      { path: "saved", element: <Saved />, label: "Saved" },
      { path: "favorite", element: <Favorite />, label: "Favorite" },

      // ✅ Games Details
      {
        path: "games/:category/:name",
        element: <GameDetails gamesData={gamesData} />,
      },

      // ✅ Itinerary Pages
      { path: "itinerary", element: <Itinerary />, label: "Itinerary" },
      { path: "map", element: <ItineraryMap />, label: "Map" },

      // ✅ Itinerary detail route (keep only one)
      {
        path: "itinerary/:slug",
        element: <ItineraryDetail />,
      },
    ],
  },
];
