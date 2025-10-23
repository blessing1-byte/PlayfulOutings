// =========================
// 📁 index.js
// =========================

// --- Importing all pages ---
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import GameDetails from "./Pages/GameDetails";
import Games from "./Pages/Games";
import Home from "./Pages/Home";
import Itinerary from "./Pages/Itinerary";

export { Home, AboutUs, ContactUs, Games, GameDetails, Itinerary };

// --- Importing icons ---
import {
  Tent,
  Home as HomeIcon,
  Baby,
  Dumbbell,
  Heart,
  Users,
} from "lucide-react";

// =========================
// SLIDER DATA
// =========================
export const slideData = [
  {
    title: "THE KINGDOM OF ICE",
    subtitle: "Green Land",
    bgColor: "#90e0ef",
    buttonText: "Learn More",
    image:
      "https://images.unsplash.com/photo-1694437590805-cf944ceb41c4?q=80&w=870&auto=format&fit=crop",
  },
  {
    title: "DESERT DUNES",
    subtitle: "Golden Heat",
    bgColor: "#f4a261",
    buttonText: "Explore",
    image:
      "https://plus.unsplash.com/premium_photo-1724090768698-16a095057e85?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "FOREST TRAILS",
    subtitle: "Deep Green",
    bgColor: "#2a9d8f",
    buttonText: "Start Now",
    image:
      "https://plus.unsplash.com/premium_photo-1663091493808-762f54454f1b?w=500&auto=format&fit=crop&q=60",
  },
];

// =========================
// CATEGORY DATA
// =========================
export const categories = [
  {
    id: "outdoor",
    name: "Outdoor Games",
    icon: Tent,
    themeColor: "#e8f5e9",
    description: "Exciting games for open spaces like parks and beaches.",
    image:
      "https://plus.unsplash.com/premium_photo-1685088255986-bd041fa8c4e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG91dGRvb3IlMjBnYW1lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    link: "/game-details/outdoor",
  },
  {
    id: "indoor",
    name: "Indoor Games",
    icon: HomeIcon,
    themeColor: "#fff3e0",
    description: "Fun activities for any weather, anytime, anywhere.",
    image:
      "https://images.unsplash.com/photo-1642056445470-18b1da13f81f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZG9vciUyMGdhbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    link: "/game-details/indoor",
  },
  {
    id: "kids",
    name: "Kids Games",
    icon: Baby,
    themeColor: "#fce4ec",
    description: "Perfect for young adventurers and creative learners.",
    image:
      "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lkcyUyMGdhbWVzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    link: "/game-details/kids",
  },
  {
    id: "males",
    name: "Games for Males",
    icon: Dumbbell,
    themeColor: "#e3f2fd",
    description: "Competitive, energetic, and fun-packed games for guys.",
    image:
      "https://images.unsplash.com/photo-1612893562175-9303361dd487?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1hbGUlMjBnYW1lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    link: "/game-details/males",
  },
  {
    id: "females",
    name: "Games for Females",
    icon: Heart,
    themeColor: "#f3e5f5",
    description: "Engaging and creative games for ladies of all ages.",
    image:
      "https://images.unsplash.com/photo-1527684920609-fde0693fd266?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwZm9vdGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
    link: "/game-details/females",
  },
  {
    id: "family",
    name: "Family Games",
    icon: Users,
    themeColor: "#fff8e1",
    description: "Fun bonding activities for the entire family.",
    image:
      "https://images.unsplash.com/photo-1640461470346-c8b56497850a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9hcmQlMjBnYW1lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    link: "/game-details/family",
  },
];
