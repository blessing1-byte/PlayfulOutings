// gameIcons.js
import {
  Home,
  TreePine,
  Users,
  Baby,
  Gamepad2,
  Sparkles,
  Trophy,
  Target,
  Dumbbell,
  Music,
  Palette,
  Heart,
  Zap,
  Bike,
  Flame,
  Shield,
  Package,
  Square,
  Lightbulb,
  Book,
  Gift,
  Award,
  Coffee,
  Brain,
  Activity,
  Sword,
} from "lucide-react";

export const getCategoryIcon = (category) => {
  const icons = {
    indoorGames: Home,
    outdoorGames: TreePine,
    familyGames: Users,
    gamesForKids: Baby,
    gamesForMales: Gamepad2,
    gamesForFemales: Sparkles,
  };
  return icons[category] || Gamepad2;
};

export const getGameIcon = (gameName) => {
  const iconMap = {
    // Indoor Games
    Chess: Square,
    Scrabble: Book,
    Monopoly: Package,
    "Cards (Poker)": Square,
    Jenga: Package,
    "Table Tennis": Target,
    "Billiards/Pool": Target,
    Checkers: Square,
    Darts: Target,
    Carrom: Square,
    Ludo: Square,
    "Video Games Console": Gamepad2,

    // Outdoor Games
    "Football/Soccer": Trophy,
    Basketball: Trophy,
    Cricket: Trophy,
    Tennis: Target,
    Volleyball: Trophy,
    Badminton: Target,
    Frisbee: Target,
    "Tag/Chase": Zap,
    "Hide and Seek": Shield,
    "Capture the Flag": Trophy,
    Dodgeball: Target,
    Cycling: Bike,

    // Family Games
    Uno: Square,
    Pictionary: Palette,
    Charades: Users,
    Scattergories: Brain,
    "Clue/Cluedo": Lightbulb,
    Twister: Activity,
    Bingo: Square,
    "Trivial Pursuit": Brain,
    "Snakes and Ladders": Square,
    "Family Karaoke": Music,
    "Connect Four": Square,
    Boggle: Book,

    // Kids Games
    "Musical Chairs": Music,
    "Duck Duck Goose": Users,
    "Simon Says": Users,
    "Red Light Green Light": Zap,
    "Freeze Dance": Music,
    "Hot Potato": Flame,
    "Memory/Matching Game": Brain,
    "Candy Land": Gift,
    "Balloon Pop Relay": Trophy,
    "Treasure Hunt": Award,
    "Jump Rope": Activity,
    "Coloring Contest": Palette,

    // Male Games
    "FIFA (Video Game)": Gamepad2,
    "Call of Duty": Gamepad2,
    "Gym Workout Challenge": Dumbbell,
    Paintball: Target,
    "Go-Kart Racing": Trophy,
    "Boxing/Sparring": Sword,
    Fortnite: Gamepad2,
    "Poker Night": Square,
    Skateboarding: Activity,
    "League of Legends": Gamepad2,
    "Fantasy Football League": Trophy,
    "Dirt Bike Racing": Bike,

    // Female Games
    "The Sims": Gamepad2,
    "Animal Crossing": Heart,
    "Yoga Session": Activity,
    "Book Club Game": Book,
    "Spa Day Activities": Heart,
    "Cooking Competition": Coffee,
    "Just Dance": Music,
    "Craft Workshop": Palette,
    "Zumba Class": Music,
    "Stardew Valley": Heart,
    "Fashion Show Game": Sparkles,
    "Pilates Class": Activity,
  };

  return iconMap[gameName] || Gamepad2;
};
