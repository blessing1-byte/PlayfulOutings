import {
  Home,
  TreePine,
  Users,
  Baby,
  Gamepad2,
  Sparkles,
  Trophy,
  Clock,
  Star,
  MapPin,
  List,
  Sword,
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
} from "lucide-react";

const getCategoryIcon = (category) => {
  const icons = {
    indoorGames: Home,
    outdoorGames: TreePine,
    familyGames: Users,
    gamesForKids: Baby,
    gamesForMales: Gamepad2,
    gamesForFemales: Sparkles,
  };
  return icons[category];
};

const getGameIcon = (gameName) => {
  const iconMap = {
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
// gamesData.js - Complete Games Database

const gamesData = {
  outdoorGames: [
    {
      id: "football-001",
      name: "Football (Soccer)",
      type: "Team Sport",
      image:
        "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=300&fit=crop",
      ageGroup: "6+",
      difficulty: "Medium",
      duration: "60-120 mins",
      popularity: 5.0,
      description:
        "Popular team sport played between two sides of 11 players each. Objective: score by getting the ball into the opponent’s goal.",
      locations: [
        {
          name: "Agege Stadium",
          address: "Agege, Lagos",
          price: "₦3,000-₦10,000 per session",
          ticketPrice: 5000,
          activities: [
            "Full-size pitch",
            "Team training",
            "Friendly matches",
            "Tournaments",
          ],
        },
        {
          name: "Campus Fields",
          address: "University of Lagos, Akoka",
          price: "₦2,000-₦5,000",
          ticketPrice: 3000,
          activities: [
            "5-a-side and 11-a-side",
            "Practice matches",
            "Skill drills",
            "Casual games",
          ],
        },
        {
          name: "Neighborhood Parks",
          address: "Various open grounds",
          price: "Free",
          ticketPrice: 0,
          activities: [
            "Street football",
            "Pickup matches",
            "Community games",
            "Fun play",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Team warm-up and stretches",
          location: "Sideline",
        },
        {
          time: "0:10",
          activity: "Form teams and positions",
          location: "Center Field",
        },
        { time: "0:15", activity: "Kickoff begins", location: "Midfield" },
        { time: "0:45", activity: "Half-time break", location: "Bench Area" },
        { time: "1:00", activity: "Second half starts", location: "Midfield" },
        {
          time: "1:40",
          activity: "Final whistle and cool down",
          location: "Sideline",
        },
      ],
    },
    {
      id: "basketball-001",
      name: "Basketball",
      type: "Team Sport",
      image:
        "https://images.unsplash.com/photo-1504457046367-9a0e71a1c028?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Medium",
      duration: "40-60 mins",
      popularity: 4.9,
      description:
        "Fast-paced team sport where two teams of five players aim to shoot the ball through the opponent’s hoop.",
      locations: [
        {
          name: "National Stadium Court",
          address: "Surulere, Lagos",
          price: "₦5,000-₦10,000 per session",
          ticketPrice: 8000,
          activities: [
            "Full court play",
            "Dunk practice",
            "Friendly games",
            "Skill drills",
          ],
        },
        {
          name: "Freedom Park Court",
          address: "Broad Street, Lagos",
          price: "₦200",
          ticketPrice: 200,
          activities: [
            "Open play",
            "3v3 matches",
            "Street basketball",
            "Spectator stands",
          ],
        },
      ],
      itinerary: [
        { time: "0:00", activity: "Stretch and warm-up", location: "Court" },
        { time: "0:10", activity: "Team selection", location: "Sideline" },
        { time: "0:15", activity: "Game starts", location: "Court" },
        { time: "0:45", activity: "Half-time", location: "Bench" },
        {
          time: "1:00",
          activity: "Second half and conclusion",
          location: "Court",
        },
      ],
    },
    {
      id: "running-001",
      name: "Jogging/Running",
      type: "Fitness Activity",
      image:
        "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=400&h=300&fit=crop",
      ageGroup: "6+",
      difficulty: "Easy",
      duration: "20-60 mins",
      popularity: 4.7,
      description:
        "Simple cardiovascular exercise that can be done on tracks, parks, or beaches to improve stamina and endurance.",
      locations: [
        {
          name: "Tarkwa Bay Beach",
          address: "Lagos Island",
          price: "₦1,000 entry + boat fare",
          ticketPrice: 1000,
          activities: ["Beach runs", "Sunrise jog", "Fitness groups"],
        },
        {
          name: "Johnson Jakande Tinubu Park",
          address: "Ikeja",
          price: "Free",
          ticketPrice: 0,
          activities: ["Park trail jogging", "Group fitness", "Stretch zones"],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Stretch and hydrate",
          location: "Starting Point",
        },
        { time: "0:10", activity: "Slow pace jog", location: "Trail" },
        {
          time: "0:30",
          activity: "Mid-run sprint interval",
          location: "Open Area",
        },
        { time: "0:50", activity: "Cool down and walk", location: "Park Exit" },
      ],
    },
    {
      id: "skating-001",
      name: "Roller Skating",
      type: "Recreational Sport",
      image:
        "https://images.unsplash.com/photo-1554774853-d50f9c681e3a?w=400&h=300&fit=crop",
      ageGroup: "7+",
      difficulty: "Medium",
      duration: "30-90 mins",
      popularity: 4.6,
      description:
        "Fun outdoor sport involving gliding on roller skates, improving balance and coordination.",
      locations: [
        {
          name: "Muri Okunola Park",
          address: "Victoria Island",
          price: "₦500-₦1,000 entry",
          ticketPrice: 800,
          activities: ["Open skating", "Beginners training", "Kids fun ride"],
        },
        {
          name: "Upbeat Centre Skating Track",
          address: "Lekki Phase 1",
          price: "₦3,000-₦5,000",
          ticketPrice: 4000,
          activities: ["Skating lessons", "Obstacle skating", "Social skating"],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Gear up and safety check",
          location: "Entry Point",
        },
        {
          time: "0:10",
          activity: "Basic gliding practice",
          location: "Flat Zone",
        },
        { time: "0:30", activity: "Freestyle skating", location: "Track" },
        { time: "1:00", activity: "Cool down session", location: "Rest Area" },
      ],
    },
    {
      id: "horse-riding-001",
      name: "Horse Riding",
      type: "Outdoor Adventure",
      image:
        "https://images.unsplash.com/photo-1548676756-94d8a83a0a5a?w=400&h=300&fit=crop",
      ageGroup: "10+",
      difficulty: "Medium",
      duration: "30-60 mins",
      popularity: 4.5,
      description:
        "Exciting outdoor activity involving guided horseback rides through open fields or beaches.",
      locations: [
        {
          name: "Lekki Leisure Lake",
          address: "Lekki Phase 1",
          price: "₦5,000-₦10,000 per ride",
          ticketPrice: 7000,
          activities: ["Beach rides", "Horse training", "Photography"],
        },
        {
          name: "Elegushi Beach",
          address: "Lekki Peninsula",
          price: "₦1,000 entrance + ride fee",
          ticketPrice: 1000,
          activities: ["Casual rides", "Couple rides", "Sunset trails"],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Safety briefing and gear up",
          location: "Stable Area",
        },
        {
          time: "0:10",
          activity: "Mount horse and basic control",
          location: "Riding Zone",
        },
        {
          time: "0:20",
          activity: "Trail or beach ride",
          location: "Open Path",
        },
        {
          time: "0:50",
          activity: "Return to base and feed horse",
          location: "Stable",
        },
      ],
    },
    {
      id: "kayaking-001",
      name: "Kayaking",
      type: "Water Sport",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
      ageGroup: "12+",
      difficulty: "Medium",
      duration: "30-90 mins",
      popularity: 4.8,
      description:
        "Water adventure sport involving paddling a small boat through rivers, lakes, or calm seas.",
      locations: [
        {
          name: "Lekki Leisure Lake",
          address: "Lekki Phase 1",
          price: "₦10,000-₦15,000 per session",
          ticketPrice: 12000,
          activities: ["Guided kayaking", "Solo paddling", "Safety lessons"],
        },
        {
          name: "Omu Resort",
          address: "Bogije, Ibeju-Lekki",
          price: "₦7,000 entry + activity fee",
          ticketPrice: 7000,
          activities: ["Kayak rides", "Scenic lake view", "Family fun"],
        },
      ],
      itinerary: [
        { time: "0:00", activity: "Safety gear briefing", location: "Dock" },
        {
          time: "0:10",
          activity: "Practice paddling strokes",
          location: "Shoreline",
        },
        {
          time: "0:20",
          activity: "Paddle across lake",
          location: "Open Water",
        },
        { time: "1:00", activity: "Return and cool off", location: "Dock" },
      ],
    },
    {
      id: "archery-001",
      name: "Archery",
      type: "Target Sport",
      image:
        "https://images.unsplash.com/photo-1615486519696-6b7bdb7ff292?w=400&h=300&fit=crop",
      ageGroup: "10+",
      difficulty: "Medium",
      duration: "30-60 mins",
      popularity: 4.5,
      description:
        "Precision outdoor sport involving shooting arrows at a target using a bow.",
      locations: [
        {
          name: "Upbeat Recreation Centre",
          address: "Lekki Phase 1",
          price: "₦5,000 per session",
          ticketPrice: 5000,
          activities: ["Archery lanes", "Target practice", "Coaching lessons"],
        },
        {
          name: "Omu Resort",
          address: "Bogije, Ibeju-Lekki",
          price: "₦7,000 entry + activity fee",
          ticketPrice: 7000,
          activities: ["Outdoor archery", "Family activity", "Safety briefing"],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Brief on equipment and safety",
          location: "Range Area",
        },
        {
          time: "0:10",
          activity: "Set up target and stance",
          location: "Shooting Zone",
        },
        {
          time: "0:15",
          activity: "Practice short-range shots",
          location: "Target 1",
        },
        {
          time: "0:45",
          activity: "Advance to long-range shooting",
          location: "Target 2",
        },
      ],
    },
    {
      id: "golf-001",
      name: "Golf",
      type: "Precision Sport",
      image:
        "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=400&h=300&fit=crop",
      ageGroup: "12+",
      difficulty: "Medium",
      duration: "60-180 mins",
      popularity: 4.6,
      description:
        "Sport where players use clubs to hit balls into holes on a course in as few strokes as possible.",
      locations: [
        {
          name: "Ikoyi Club Golf Section",
          address: "Ikoyi, Lagos",
          price: "Membership required",
          ticketPrice: 0,
          activities: [
            "9-hole and 18-hole courses",
            "Driving range",
            "Clubhouse",
          ],
        },
        {
          name: "Lakowe Lakes Golf Estate",
          address: "Lekki-Epe Expressway",
          price: "₦20,000-₦30,000 per round",
          ticketPrice: 25000,
          activities: ["Professional course", "Golf carts", "Training"],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Warm-up at driving range",
          location: "Practice Zone",
        },
        { time: "0:20", activity: "Start 9-hole round", location: "Hole 1" },
        {
          time: "1:30",
          activity: "Short break at clubhouse",
          location: "Midpoint",
        },
        {
          time: "2:00",
          activity: "Finish last hole and tally scores",
          location: "Final Green",
        },
      ],
    },
    {
      id: "hiking-001",
      name: "Hiking",
      type: "Outdoor Adventure",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=300&fit=crop",
      ageGroup: "10+",
      difficulty: "Medium",
      duration: "60-240 mins",
      popularity: 4.8,
      description:
        "Leisure or fitness activity involving walking along trails or natural environments for exploration and exercise.",
      locations: [
        {
          name: "Owu Waterfalls Trail",
          address: "Owu Falls, Kwara State",
          price: "₦1,000 entry",
          ticketPrice: 1000,
          activities: ["Scenic trails", "Guided hikes", "Photography spots"],
        },
        {
          name: "LCC Nature Park",
          address: "Lekki Conservation Centre, Lagos",
          price: "₦2,000 entry",
          ticketPrice: 2000,
          activities: ["Canopy walk", "Boardwalk", "Bird watching"],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Safety briefing and route plan",
          location: "Base Camp",
        },
        {
          time: "0:10",
          activity: "Trail hike begins",
          location: "Forest Path",
        },
        {
          time: "1:00",
          activity: "Rest stop and hydration",
          location: "Hilltop",
        },
        { time: "2:00", activity: "Return to base", location: "Camp Area" },
      ],
    },
    {
      id: "swimming-001",
      name: "Swimming",
      type: "Water Sport",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
      ageGroup: "5+",
      difficulty: "Easy",
      duration: "30-90 mins",
      popularity: 4.9,
      description:
        "Full-body exercise and recreational activity done in pools or open water for fun or competition.",
      locations: [
        {
          name: "National Stadium Pool",
          address: "Surulere, Lagos",
          price: "₦2,000-₦5,000 per session",
          ticketPrice: 3000,
          activities: ["Lap swimming", "Training", "Water aerobics"],
        },
        {
          name: "Lekki Leisure Lake",
          address: "Lekki Phase 1",
          price: "₦5,000 per session",
          ticketPrice: 5000,
          activities: ["Recreational swim", "Water sports", "Family fun"],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Warm-up and safety check",
          location: "Poolside",
        },
        { time: "0:10", activity: "Swim laps freestyle", location: "Lap Lane" },
        {
          time: "0:30",
          activity: "Practice strokes and dives",
          location: "Deep End",
        },
        {
          time: "1:00",
          activity: "Relax and cool down",
          location: "Shallow End",
        },
      ],
    },
  ],
  indoorGames: [
    {
      id: "chess-001",
      name: "Chess",
      type: "Board Game",
      image:
        "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Medium",
      duration: "30-60 mins",
      popularity: 4.7,
      description:
        "Strategic board game for two players featuring 64 squares and 32 pieces. Master tactics, strategy, and endgame techniques in this timeless classic.",
      locations: [
        {
          name: "Home Setup",
          address: "Your Living Room or Study",
          price: "Free",
          ticketPrice: 0,
          equipment: "Chess set (₦3,000-₦15,000)",
          activities: [
            "Multiple courts",
            "3v3 and 5v5",
            "Practice sessions",
            "Equipment available",
          ],
        },
        {
          name: "Public Courts",
          address: "Freedom Park, neighborhood courts",
          price: "Free",
          ticketPrice: 0,
          activities: [
            "Street basketball",
            "Pick-up games",
            "Practice shooting",
            "Social play",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Arrive, check ball pressure, inspect court",
          location: "Court Check",
        },
        {
          time: "0:05",
          activity: "Warm up - jog, layups, passing, shooting",
          location: "Warm-Up",
        },
        {
          time: "0:15",
          activity: "Divide teams (5v5 full, 3v3 half court)",
          location: "Team Selection",
        },
        {
          time: "0:18",
          activity: "Review rules - fouls, violations, scoring",
          location: "Rules",
        },
        {
          time: "0:20",
          activity: "Jump ball at center court",
          location: "Tip-Off",
        },
        {
          time: "0:25",
          activity: "First quarter - 10-12 minutes",
          location: "Q1",
        },
        {
          time: "0:35",
          activity: "Brief break, switch sides if outdoor",
          location: "Q1 Break",
        },
        { time: "0:37", activity: "Second quarter begins", location: "Q2" },
        {
          time: "0:47",
          activity: "Half-time - 5 minute break",
          location: "Half-Time",
        },
        { time: "0:52", activity: "Third quarter starts", location: "Q3" },
        {
          time: "1:02",
          activity: "Final quarter - intensity increases",
          location: "Q4",
        },
        {
          time: "1:12",
          activity: "Game ends, final score",
          location: "Final Whistle",
        },
        {
          time: "1:15",
          activity: "Cool down stretching",
          location: "Cool Down",
        },
      ],
    },
    {
      id: "cricket-001",
      name: "Cricket",
      type: "Team Sport",
      image:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Medium",
      duration: "60-180 mins",
      popularity: 4.8,
      description:
        "Bat-and-ball team sport with two teams of 11 players. Popular formats include T20, ODI, and Test cricket.",
      locations: [
        {
          name: "Lagos Cricket Ground",
          address: "Tafawa Balewa Square Area, Lagos Island",
          price: "₦10,000-₦20,000 per match",
          ticketPrice: 15000,
          activities: [
            "Full cricket pitch",
            "Practice nets",
            "Tournament matches",
            "Equipment rental",
          ],
        },
        {
          name: "University of Lagos Sports Complex",
          address: "Akoka, Yaba",
          price: "₦5,000-₦15,000 per session",
          ticketPrice: 10000,
          activities: [
            "Cricket field",
            "Training sessions",
            "Inter-school matches",
            "Coaching programs",
          ],
        },
        {
          name: "Open Fields/Parks",
          address: "Various parks across Lagos",
          price: "Free",
          ticketPrice: 0,
          activities: [
            "Street cricket",
            "Box cricket",
            "Practice sessions",
            "Casual matches",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Inspect pitch, set up stumps, mark boundaries",
          location: "Field Setup",
        },
        {
          time: "0:10",
          activity: "Warm up - catching, bowling, batting drills",
          location: "Warm-Up",
        },
        {
          time: "0:20",
          activity: "Toss coin - winner chooses bat or bowl",
          location: "Toss",
        },
        {
          time: "0:25",
          activity: "Fielding team takes positions",
          location: "Field Setting",
        },
        {
          time: "0:30",
          activity: "First innings begins - 20 overs T20 format",
          location: "Innings 1",
        },
        {
          time: "0:35",
          activity: "Bowlers deliver 6 balls per over",
          location: "Bowling",
        },
        {
          time: "1:00",
          activity: "Powerplay overs - fielding restrictions",
          location: "Powerplay",
        },
        {
          time: "1:30",
          activity: "Death overs - maximize scoring",
          location: "Death Overs",
        },
        {
          time: "1:50",
          activity: "First innings ends",
          location: "Innings Break",
        },
        {
          time: "2:00",
          activity: "Chase begins - target set",
          location: "Innings 2",
        },
        {
          time: "2:40",
          activity: "Nail-biting finish",
          location: "Close Finish",
        },
        { time: "2:50", activity: "Match concludes", location: "Match End" },
        {
          time: "3:00",
          activity: "Player of match announced",
          location: "Wrap-Up",
        },
      ],
    },
    {
      id: "tennis-001",
      name: "Tennis",
      type: "Racket Sport",
      image:
        "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=300&fit=crop",
      ageGroup: "7+",
      difficulty: "Medium",
      duration: "60-120 mins",
      popularity: 4.6,
      description:
        "Individual or doubles racket sport played on a rectangular court with a net.",
      locations: [
        {
          name: "Lagos Lawn Tennis Club",
          address: "12 Tafawa Balewa Square, Lagos Island",
          price: "₦5,000-₦15,000 per hour",
          ticketPrice: 10000,
          activities: [
            "Multiple courts",
            "Professional coaching",
            "Club tournaments",
            "Equipment rental",
          ],
        },
        {
          name: "Ikoyi Club 1938",
          address: "6A Ikoyi Club Road, Ikoyi",
          price: "Membership required",
          ticketPrice: 0,
          activities: [
            "Premium courts",
            "Competitive leagues",
            "Social events",
            "Pro facilities",
          ],
        },
        {
          name: "National Stadium Tennis Courts",
          address: "Western Avenue, Surulere",
          price: "₦3,000-₦8,000 per hour",
          ticketPrice: 5000,
          activities: [
            "Public courts",
            "Singles/doubles",
            "Coaching",
            "Practice sessions",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Check court surface, net height, ball bounce",
          location: "Court Inspection",
        },
        {
          time: "0:05",
          activity: "Warm up - jog, arm swings, shadow swings",
          location: "Physical Warm-Up",
        },
        {
          time: "0:10",
          activity: "Practice rallies with opponent",
          location: "Rally Warm-Up",
        },
        {
          time: "0:15",
          activity: "Spin racket for first server and side",
          location: "Toss",
        },
        {
          time: "0:20",
          activity: "First game begins - two serves per point",
          location: "Match Start",
        },
        {
          time: "0:25",
          activity: "Score: love, 15, 30, 40, deuce, advantage",
          location: "Scoring",
        },
        {
          time: "0:30",
          activity: "First set - first to 6 games by 2",
          location: "Set 1",
        },
        {
          time: "0:35",
          activity: "Switch ends every odd game",
          location: "End Switching",
        },
        {
          time: "0:45",
          activity: "Tiebreak at 6-6 if needed",
          location: "Tiebreak",
        },
        {
          time: "1:00",
          activity: "First set complete, 90-second break",
          location: "Set Break",
        },
        { time: "1:02", activity: "Second set begins", location: "Set 2" },
        {
          time: "1:25",
          activity: "Match concludes, handshake at net",
          location: "Match End",
        },
        {
          time: "1:30",
          activity: "Cool down stretching",
          location: "Cool Down",
        },
      ],
    },
    {
      id: "volleyball-001",
      name: "Volleyball",
      type: "Team Sport",
      image:
        "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&h=300&fit=crop",
      ageGroup: "10+",
      difficulty: "Easy",
      duration: "30-60 mins",
      popularity: 4.5,
      description:
        "Team sport where two teams hit a ball over a net, trying to ground it on opponent's side.",
      locations: [
        {
          name: "Elegushi Beach",
          address: "Lekki Peninsula, Eti-Osa",
          price: "₦1,000-₦2,000 entrance",
          ticketPrice: 1500,
          activities: [
            "Beach volleyball",
            "Sand courts",
            "Ocean view",
            "Recreational atmosphere",
          ],
        },
        {
          name: "Atican Beach",
          address: "Okun Ajah, Off Lekki-Epe Expressway",
          price: "₦1,500 entrance",
          ticketPrice: 1500,
          activities: [
            "Beach volleyball",
            "Tournaments",
            "Casual games",
            "Refreshments",
          ],
        },
        {
          name: "National Stadium Lagos",
          address: "Surulere",
          price: "₦5,000-₦10,000 per session",
          ticketPrice: 7500,
          activities: [
            "Indoor court",
            "Professional net",
            "Training",
            "Competitive matches",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up net at regulation height, mark boundaries",
          location: "Court Setup",
        },
        {
          time: "0:05",
          activity: "Warm up - passing, setting, spiking, serving",
          location: "Warm-Up",
        },
        {
          time: "0:15",
          activity: "Divide teams - 6 per side (2-4 for beach)",
          location: "Team Formation",
        },
        {
          time: "0:18",
          activity: "Determine serve order and rotations",
          location: "Rotation Setup",
        },
        {
          time: "0:20",
          activity: "First set begins - rally scoring to 25",
          location: "Set 1",
        },
        {
          time: "0:22",
          activity: "Teams volley up to 3 touches per side",
          location: "Rally Play",
        },
        {
          time: "0:25",
          activity: "Rotate clockwise when winning serve back",
          location: "Rotation",
        },
        {
          time: "0:30",
          activity: "Use bumps, sets, spikes strategically",
          location: "Technique",
        },
        {
          time: "0:40",
          activity: "First set concludes at 25 points",
          location: "Set 1 End",
        },
        {
          time: "0:42",
          activity: "Switch sides, brief rest",
          location: "Side Switch",
        },
        { time: "0:45", activity: "Second set begins", location: "Set 2" },
        {
          time: "0:58",
          activity: "Match concludes (best of 3 or 5)",
          location: "Match End",
        },
      ],
    },
    {
      id: "badminton-001",
      name: "Badminton",
      type: "Racket Sport",
      image:
        "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=300&fit=crop",
      ageGroup: "6+",
      difficulty: "Easy",
      duration: "30-60 mins",
      popularity: 4.5,
      description:
        "Racket sport using a shuttlecock instead of a ball, played on a rectangular court.",
      locations: [
        {
          name: "Lagos Lawn Tennis Club",
          address: "12 Tafawa Balewa Square, Lagos Island",
          price: "₦3,000-₦8,000 per hour",
          ticketPrice: 5000,
          activities: [
            "Indoor courts",
            "Singles/doubles",
            "Equipment rental",
            "Coaching",
          ],
        },
        {
          name: "Upbeat Recreation Centre",
          address: "11 Admiralty Road, Lekki Phase 1",
          price: "₦5,000 per session",
          ticketPrice: 5000,
          activities: [
            "Professional courts",
            "Group sessions",
            "Tournaments",
            "Refreshments",
          ],
        },
        {
          name: "Backyard/Park Setup",
          address: "Your backyard or local park",
          price: "Free",
          ticketPrice: 0,
          equipment: "Net (₦5k-₦15k), Rackets (₦3k-₦10k each)",
          activities: [
            "Casual games",
            "Family matches",
            "Practice",
            "Social play",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up net at 5'1\" center height",
          location: "Setup",
        },
        {
          time: "0:05",
          activity: "Warm up - wrist rotations, footwork, serves",
          location: "Warm-Up",
        },
        {
          time: "0:10",
          activity: "Practice rallies to adjust to court",
          location: "Practice",
        },
        {
          time: "0:15",
          activity: "Decide first server - coin toss or rally",
          location: "First Server",
        },
        {
          time: "0:18",
          activity: "Begin first game to 21 points",
          location: "Game 1",
        },
        {
          time: "0:20",
          activity: "Serve diagonal, below waist height",
          location: "Service Rules",
        },
        {
          time: "0:25",
          activity: "Server switches sides after each point",
          location: "Side Switching",
        },
        {
          time: "0:28",
          activity: "Use clears, drops, smashes, net shots",
          location: "Shot Variety",
        },
        {
          time: "0:35",
          activity: "First to 21 wins (by 2, cap at 30)",
          location: "Game 1 End",
        },
        {
          time: "0:37",
          activity: "One-minute break, switch sides",
          location: "Break",
        },
        { time: "0:40", activity: "Second game begins", location: "Game 2" },
        {
          time: "0:52",
          activity: "Best of 3 - play decisive third if 1-1",
          location: "Match Format",
        },
        {
          time: "1:00",
          activity: "Cool down stretches",
          location: "Cool Down",
        },
      ],
    },
    {
      id: "frisbee-001",
      name: "Frisbee",
      type: "Throwing Game",
      image:
        "https://images.unsplash.com/photo-1592656094267-764a45160876?w=400&h=300&fit=crop",
      ageGroup: "5+",
      difficulty: "Easy",
      duration: "20-60 mins",
      popularity: 4.4,
      description:
        "Casual throwing game or competitive Ultimate Frisbee sport played with a flying disc.",
      locations: [
        {
          name: "Elegushi Beach",
          address: "Lekki Peninsula",
          price: "₦1,000-₦2,000 entrance",
          ticketPrice: 1500,
          activities: [
            "Beach frisbee",
            "Ultimate frisbee",
            "Casual throwing",
            "Ocean breeze",
          ],
        },
        {
          name: "Johnson Jakande Tinubu Park",
          address: "Mobolaji Bank Anthony Way, Ikeja",
          price: "Free",
          ticketPrice: 0,
          activities: [
            "Open field frisbee",
            "Ultimate frisbee",
            "Family games",
            "Picnic and play",
          ],
        },
        {
          name: "Freedom Park",
          address: "Broad Street, Lagos Island",
          price: "₦200 entrance",
          ticketPrice: 200,
          activities: [
            "Historic setting",
            "Casual throwing",
            "Social gatherings",
            "Cultural atmosphere",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Choose open space, mark boundaries if Ultimate",
          location: "Field Selection",
        },
        {
          time: "0:05",
          activity: "Warm up - arm circles, wrist stretches",
          location: "Warm-Up",
        },
        {
          time: "0:10",
          activity: "Practice basic throws - backhand, forehand, overhead",
          location: "Throw Practice",
        },
        {
          time: "0:15",
          activity: "Casual toss - 10-15 meters apart",
          location: "Casual Play",
        },
        {
          time: "0:25",
          activity: "Increase distance, practice accuracy",
          location: "Distance Throwing",
        },
        {
          time: "0:30",
          activity: "For Ultimate - divide teams of 5-7",
          location: "Team Formation",
        },
        {
          time: "0:35",
          activity: "Ultimate rules - no running with disc",
          location: "Rules",
        },
        {
          time: "0:40",
          activity: "Score by catching in end zone",
          location: "Ultimate Gameplay",
        },
        {
          time: "0:55",
          activity: "First team to 15 points wins",
          location: "Game Conclusion",
        },
      ],
    },
    {
      id: "tag-001",
      name: "Tag/Chase",
      type: "Running Game",
      image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop",
      ageGroup: "3+",
      difficulty: "Easy",
      duration: "15-45 mins",
      popularity: 4.3,
      description:
        "Classic children's game where one player chases others trying to tag them.",
      locations: [
        {
          name: "Johnson Jakande Tinubu Park",
          address: "Ikeja",
          price: "Free",
          ticketPrice: 0,
          activities: [
            "Open space tag",
            "Safe environment",
            "Kids playground",
            "Family-friendly",
          ],
        },
        {
          name: "Freedom Park",
          address: "Lagos Island",
          price: "₦200",
          ticketPrice: 200,
          activities: [
            "Historic venue",
            "Open grounds",
            "Safe for children",
            "Shaded areas",
          ],
        },
        {
          name: "Muri Okunola Park",
          address: "Victoria Island",
          price: "Free",
          ticketPrice: 0,
          activities: [
            "Large play area",
            "Grass fields",
            "Children section",
            "Security present",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Gather players, establish boundaries",
          location: "Boundary Setting",
        },
        {
          time: "0:03",
          activity: "Choose first tagger",
          location: "Tagger Selection",
        },
        {
          time: "0:05",
          activity: "Explain rules - stay in bounds, tag gently",
          location: "Rules",
        },
        {
          time: "0:08",
          activity: "Game begins - tagger chases others",
          location: "Game Start",
        },
        {
          time: "0:10",
          activity: "Tagged player becomes new tagger",
          location: "Tag Transfer",
        },
        {
          time: "0:15",
          activity: "Freeze tag variant - frozen until unfrozen",
          location: "Freeze Tag",
        },
        {
          time: "0:20",
          activity: "TV Tag - say TV show to be safe",
          location: "TV Tag",
        },
        {
          time: "0:25",
          activity: "Shadow Tag - tag person's shadow",
          location: "Shadow Tag",
        },
        {
          time: "0:28",
          activity: "Cool down with light walking",
          location: "Cool Down",
        },
      ],
    },
    {
      id: "hide-and-seek-001",
      name: "Hide and Seek",
      type: "Stealth Game",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop",
      ageGroup: "4+",
      difficulty: "Easy",
      duration: "20-60 mins",
      popularity: 4.5,
      description:
        "Classic game where one seeker tries to find all hidden players.",
      locations: [
        {
          name: "Freedom Park",
          address: "Lagos Island",
          price: "₦200",
          ticketPrice: 200,
          activities: [
            "Multiple hiding spots",
            "Historic structures",
            "Safe enclosed area",
            "Supervised",
          ],
        },
        {
          name: "Johnson Jakande Tinubu Park",
          address: "Ikeja",
          price: "Free",
          ticketPrice: 0,
          activities: [
            "Trees and structures",
            "Open and hidden areas",
            "Family-friendly",
            "Well-lit",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Establish boundaries",
          location: "Boundary Setup",
        },
        {
          time: "0:03",
          activity: "Designate home base",
          location: "Home Base",
        },
        {
          time: "0:05",
          activity: "Choose seeker",
          location: "Seeker Selection",
        },
        {
          time: "0:08",
          activity: "Seeker counts to 20-50 at base",
          location: "Counting",
        },
        {
          time: "0:10",
          activity: "Players scatter to hide",
          location: "Hiding",
        },
        {
          time: "0:12",
          activity: 'Seeker shouts "Ready or not, here I come!"',
          location: "Search Begins",
        },
        {
          time: "0:20",
          activity: "When spotted, seeker tags or calls name",
          location: "Tagging",
        },
        {
          time: "0:25",
          activity: "Hiders try to reach home base first",
          location: "Race to Base",
        },
        {
          time: "0:30",
          activity: 'Shout "Home free!" if reaching base first',
          location: "Home Free",
        },
        {
          time: "0:35",
          activity: "Last hider found becomes next seeker",
          location: "Next Round",
        },
      ],
    },
    {
      id: "capture-flag-001",
      name: "Capture the Flag",
      type: "Strategy Game",
      image:
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Medium",
      duration: "30-60 mins",
      popularity: 4.6,
      description:
        "Team strategy game where players try to capture opponent's flag and return it to their territory.",
      locations: [
        {
          name: "Johnson Jakande Tinubu Park",
          address: "Ikeja",
          price: "Free",
          ticketPrice: 0,
          activities: [
            "Large open field",
            "Team strategy",
            "Safe environment",
            "Multiple terrain",
          ],
        },
        {
          name: "Agege Stadium Grounds",
          address: "Agege",
          price: "₦2,000-₦5,000",
          ticketPrice: 3500,
          activities: [
            "Expansive field",
            "Team competitions",
            "Organized events",
            "Facilities",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Divide field into two territories",
          location: "Field Division",
        },
        {
          time: "0:05",
          activity: "Split into two equal teams",
          location: "Team Formation",
        },
        {
          time: "0:10",
          activity: "Each team hides flag in territory",
          location: "Flag Placement",
        },
        {
          time: "0:15",
          activity: "Designate jail area in each territory",
          location: "Jail Setup",
        },
        {
          time: "0:20",
          activity: "Explain rules - capture enemy flag",
          location: "Rules",
        },
        {
          time: "0:25",
          activity: "Game begins - strategize offense/defense",
          location: "Game Start",
        },
        {
          time: "0:30",
          activity: "Tag opponents in your territory - they go to jail",
          location: "Tagging",
        },
        {
          time: "0:35",
          activity: "Free jailed teammates by tagging them",
          location: "Jail Break",
        },
        {
          time: "0:50",
          activity: "Carry enemy flag back to win",
          location: "Victory Condition",
        },
        {
          time: "1:00",
          activity: "Discuss strategy and memorable moments",
          location: "Debrief",
        },
      ],
    },
    {
      id: "dodgeball-001",
      name: "Dodgeball",
      type: "Team Sport",
      image:
        "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Easy",
      duration: "20-40 mins",
      popularity: 4.4,
      description:
        "Team sport where players throw balls at opponents while avoiding being hit.",
      locations: [
        {
          name: "School Gymnasiums",
          address: "Various schools across Lagos",
          price: "Free-₦5,000 rental",
          ticketPrice: 2500,
          activities: [
            "Indoor dodgeball",
            "Tournament play",
            "PE classes",
            "Youth programs",
          ],
        },
        {
          name: "National Stadium Indoor Hall",
          address: "Surulere",
          price: "₦10,000-₦20,000 per session",
          ticketPrice: 15000,
          activities: [
            "Professional court",
            "Team competitions",
            "Organized leagues",
            "Equipment provided",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Mark center line dividing court",
          location: "Court Setup",
        },
        {
          time: "0:03",
          activity: "Divide into two equal teams (6-10 per side)",
          location: "Team Selection",
        },
        {
          time: "0:05",
          activity: "Place 6 dodgeballs along center line",
          location: "Ball Placement",
        },
        {
          time: "0:08",
          activity: "Teams line up at back walls",
          location: "Starting Position",
        },
        {
          time: "0:10",
          activity: "On whistle, rush to grab balls",
          location: "Ball Rush",
        },
        {
          time: "0:12",
          activity: "Throw balls to hit opponents below shoulders",
          location: "Gameplay",
        },
        {
          time: "0:15",
          activity: "Hit by ball = out (unless caught)",
          location: "Elimination",
        },
        {
          time: "0:18",
          activity: "Catch brings thrower out, your teammate back",
          location: "Catch Rules",
        },
        {
          time: "0:30",
          activity: "Last team with players wins round",
          location: "Round End",
        },
        {
          time: "0:38",
          activity: "Final round determines champion",
          location: "Finals",
        },
      ],
    },
    {
      id: "cycling-001",
      name: "Cycling",
      type: "Individual Sport",
      image:
        "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400&h=300&fit=crop",
      ageGroup: "5+",
      difficulty: "Easy",
      duration: "30-120 mins",
      popularity: 4.7,
      description:
        "Outdoor activity and exercise riding bicycles for leisure, fitness, or sport.",
      locations: [
        {
          name: "Lekki-Ikoyi Link Bridge",
          address: "Connecting Lekki and Ikoyi",
          price: "Free",
          ticketPrice: 0,
          activities: [
            "Scenic route",
            "Bridge views",
            "Morning rides",
            "Photography spots",
          ],
        },
        {
          name: "Lagos-Badagry Expressway",
          address: "Festac/Badagry area",
          price: "Free",
          ticketPrice: 0,
          activities: [
            "Long distance",
            "Training rides",
            "Group cycling",
            "Coastal route",
          ],
        },
        {
          name: "Bar Beach/VI Coastline",
          address: "Victoria Island",
          price: "Free",
          ticketPrice: 0,
          activities: [
            "Beach road",
            "Sunset rides",
            "Ocean breeze",
            "Tourist stops",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Inspect bike - brakes, tires, chain, gears",
          location: "Bike Check",
        },
        {
          time: "0:05",
          activity: "Wear helmet, reflective gear",
          location: "Safety Gear",
        },
        {
          time: "0:08",
          activity: "Plan route with distance goal",
          location: "Route Planning",
        },
        {
          time: "0:10",
          activity: "Warm up with gentle pedaling",
          location: "Warm-Up",
        },
        {
          time: "0:15",
          activity: "Begin main ride at comfortable pace",
          location: "Ride Start",
        },
        {
          time: "0:20",
          activity: "Maintain steady cadence (60-80 RPM)",
          location: "Pacing",
        },
        {
          time: "0:45",
          activity: "Midpoint break - hydrate, stretch",
          location: "Break Point",
        },
        {
          time: "0:50",
          activity: "Continue second half of route",
          location: "Return Journey",
        },
        {
          time: "1:15",
          activity: "Cool down with slower pace",
          location: "Cool Down",
        },
        {
          time: "1:25",
          activity: "Stretch major muscle groups",
          location: "Post-Ride Stretch",
        },
      ],
    },
  ],

  familyGames: [
    {
      id: "uno-001",
      name: "Uno",
      type: "Card Game",
      image:
        "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=300&fit=crop",
      ageGroup: "7+",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.7,
      description:
        "Popular card game where players match colors and numbers to empty their hand first.",
      locations: [
        {
          name: "Home Game Night",
          address: "Your Dining Table or Living Room",
          price: "Free",
          ticketPrice: 0,
          equipment: "Uno deck (₦1,500-₦4,000)",
          activities: [
            "Classic Uno",
            "Team Uno",
            "Speed Uno",
            "Tournament brackets",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Shuffle Uno deck thoroughly",
          location: "Shuffle",
        },
        {
          time: "0:02",
          activity: "Deal 7 cards to each player face-down",
          location: "Deal Cards",
        },
        {
          time: "0:04",
          activity: "Place remaining cards face-down, flip top card",
          location: "Setup Piles",
        },
        {
          time: "0:06",
          activity: "First player matches card by color, number, or symbol",
          location: "Game Start",
        },
        {
          time: "0:08",
          activity: "If no match, draw one card",
          location: "Draw Rule",
        },
        {
          time: "0:10",
          activity: "Action cards: Skip, Reverse, Draw Two",
          location: "Action Cards",
        },
        {
          time: "0:15",
          activity: "Wild cards change color, Wild Draw Four",
          location: "Wild Cards",
        },
        {
          time: "0:20",
          activity: 'Must shout "UNO!" with one card left',
          location: "Uno Call",
        },
        {
          time: "0:25",
          activity: "First to play all cards wins round",
          location: "Round Win",
        },
        {
          time: "0:27",
          activity: "Score points from opponents' remaining cards",
          location: "Scoring",
        },
        {
          time: "0:30",
          activity: "First to 500 points wins match",
          location: "Match End",
        },
      ],
    },
    {
      id: "pictionary-001",
      name: "Pictionary",
      type: "Drawing Game",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Easy",
      duration: "30-60 mins",
      popularity: 4.6,
      description:
        "Team-based drawing and guessing game where players sketch clues for teammates.",
      locations: [
        {
          name: "Home Family Night",
          address: "Your Living Room",
          price: "Free",
          ticketPrice: 0,
          equipment: "Pictionary set or whiteboard (₦3,000-₦10,000)",
          activities: [
            "Team competitions",
            "Quick sketches",
            "Word categories",
            "Timed rounds",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Divide into two or more teams",
          location: "Team Formation",
        },
        {
          time: "0:03",
          activity: "Set up drawing board or paper",
          location: "Setup",
        },
        {
          time: "0:05",
          activity: "First player draws card with word/phrase",
          location: "Card Draw",
        },
        {
          time: "0:07",
          activity: "Start timer (60-90 seconds)",
          location: "Timer Start",
        },
        {
          time: "0:08",
          activity: "Player sketches without words, letters, or numbers",
          location: "Drawing",
        },
        { time: "0:10", activity: "Team shouts guesses", location: "Guessing" },
        {
          time: "0:12",
          activity: "Correct guess earns points, move game piece",
          location: "Scoring",
        },
        {
          time: "0:15",
          activity: "Next team takes turn",
          location: "Team Rotation",
        },
        {
          time: "0:45",
          activity: "First team to finish board or reach goal wins",
          location: "Victory",
        },
      ],
    },
    {
      id: "charades-001",
      name: "Charades",
      type: "Acting Game",
      image:
        "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=300&fit=crop",
      ageGroup: "6+",
      difficulty: "Easy",
      duration: "30-60 mins",
      popularity: 4.7,
      description:
        "Classic party game where players act out words or phrases without speaking.",
      locations: [
        {
          name: "Home Party",
          address: "Your Living Room",
          price: "Free",
          ticketPrice: 0,
          equipment: "None required (cards optional)",
          activities: [
            "Movie titles",
            "Book titles",
            "Famous people",
            "Actions/phrases",
          ],
        },
      ],
      itinerary: [
        { time: "0:00", activity: "Divide into teams", location: "Team Setup" },
        {
          time: "0:03",
          activity: "Prepare cards with words/phrases",
          location: "Card Prep",
        },
        {
          time: "0:05",
          activity: "Player picks card, reads secretly",
          location: "Selection",
        },
        {
          time: "0:07",
          activity: "Indicate category (movie, book, song, etc.)",
          location: "Category Signal",
        },
        {
          time: "0:08",
          activity: "Start timer (2-3 minutes)",
          location: "Timer",
        },
        {
          time: "0:09",
          activity: "Act out phrase using only gestures",
          location: "Acting",
        },
        {
          time: "0:12",
          activity: "Team guesses until correct or time runs out",
          location: "Guessing",
        },
        {
          time: "0:15",
          activity: "Award points for correct guess",
          location: "Scoring",
        },
        { time: "0:18", activity: "Switch to next team", location: "Rotation" },
        {
          time: "0:45",
          activity: "Team with most points wins",
          location: "Winner",
        },
      ],
    },
    {
      id: "scattergories-001",
      name: "Scattergories",
      type: "Word Game",
      image:
        "https://images.unsplash.com/photo-1611329857570-f02f340e7378?w=400&h=300&fit=crop",
      ageGroup: "12+",
      difficulty: "Medium",
      popularity: 4.5,
      description:
        "Creative thinking game where players list words in categories beginning with a specific letter.",
      locations: [
        {
          name: "Home Game Night",
          address: "Your Dining Table",
          price: "Free",
          ticketPrice: 0,
          equipment: "Scattergories set or paper (₦5,000-₦12,000)",
          activities: [
            "Category challenges",
            "Timed rounds",
            "Creative thinking",
            "Scoring debates",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Distribute answer sheets with categories",
          location: "Setup",
        },
        {
          time: "0:03",
          activity: "Roll die to determine letter",
          location: "Letter Selection",
        },
        {
          time: "0:05",
          activity: "Start timer (2-3 minutes)",
          location: "Timer Start",
        },
        {
          time: "0:06",
          activity: "Write answers for each category starting with letter",
          location: "Writing",
        },
        {
          time: "0:09",
          activity: "Timer ends, pencils down",
          location: "Time Up",
        },
        {
          time: "0:10",
          activity: "Read answers aloud category by category",
          location: "Reading",
        },
        {
          time: "0:15",
          activity: "Unique answers score 1 point, duplicates score 0",
          location: "Scoring",
        },
        {
          time: "0:20",
          activity: "Start next round with new letter",
          location: "Next Round",
        },
        {
          time: "0:50",
          activity: "Tally all points, declare winner",
          location: "Final Score",
        },
      ],
    },
    {
      id: "clue-001",
      name: "Clue/Cluedo",
      type: "Mystery Game",
      image:
        "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Medium",
      duration: "45-90 mins",
      popularity: 4.6,
      description:
        "Murder mystery game where players deduce who committed the crime, with what weapon, and where.",
      locations: [
        {
          name: "Home Mystery Night",
          address: "Your Dining Room",
          price: "Free",
          ticketPrice: 0,
          equipment: "Clue board game (₦8,000-₦20,000)",
          activities: [
            "Detective work",
            "Deduction",
            "Strategic questioning",
            "Mystery solving",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up board, distribute character cards",
          location: "Setup",
        },
        {
          time: "0:05",
          activity: "Place suspect, weapon, room cards in envelope",
          location: "Mystery Setup",
        },
        {
          time: "0:10",
          activity: "Distribute remaining cards to players",
          location: "Card Distribution",
        },
        {
          time: "0:15",
          activity: "Roll dice to move through mansion",
          location: "Movement",
        },
        {
          time: "0:20",
          activity: "Make suggestions when entering rooms",
          location: "Suggestions",
        },
        {
          time: "0:25",
          activity: "Players show cards to disprove suggestions",
          location: "Disproving",
        },
        {
          time: "0:30",
          activity: "Take notes on detective sheet",
          location: "Note Taking",
        },
        {
          time: "0:45",
          activity: "Use secret passages for quick movement",
          location: "Strategy",
        },
        {
          time: "1:00",
          activity: "Make accusation when confident",
          location: "Accusation",
        },
        {
          time: "1:15",
          activity: "Check envelope - correct accusation wins",
          location: "Solution",
        },
      ],
    },
    {
      id: "twister-001",
      name: "Twister",
      type: "Physical Game",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=300&fit=crop",
      ageGroup: "6+",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.5,
      description:
        "Physical skill game where players place hands and feet on colored circles.",
      locations: [
        {
          name: "Home Party",
          address: "Your Living Room (clear space)",
          price: "Free",
          ticketPrice: 0,
          equipment: "Twister mat and spinner (₦5,000-₦10,000)",
          activities: [
            "Flexibility challenge",
            "Balance test",
            "Party entertainment",
            "Group laughter",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Lay out Twister mat on floor",
          location: "Setup",
        },
        {
          time: "0:02",
          activity: "Choose referee to spin",
          location: "Referee Selection",
        },
        {
          time: "0:05",
          activity: "Players start around mat edges",
          location: "Starting Position",
        },
        {
          time: "0:07",
          activity: "Spin arrow - call out color and body part",
          location: "First Spin",
        },
        {
          time: "0:08",
          activity: "Players move hand or foot to called circle",
          location: "First Move",
        },
        {
          time: "0:10",
          activity: "Continue spinning and moving",
          location: "Gameplay",
        },
        {
          time: "0:15",
          activity: "Players become tangled, maintain balance",
          location: "Tangling",
        },
        {
          time: "0:20",
          activity: "Fall or touch mat with knee/elbow = elimination",
          location: "Elimination",
        },
        {
          time: "0:25",
          activity: "Last player standing wins",
          location: "Victory",
        },
      ],
    },
    {
      id: "bingo-001",
      name: "Bingo",
      type: "Number Game",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop",
      ageGroup: "5+",
      difficulty: "Easy",
      duration: "20-45 mins",
      popularity: 4.4,
      description:
        "Number matching game where players mark called numbers on their cards.",
      locations: [
        {
          name: "Home Bingo Night",
          address: "Your Dining Room",
          price: "Free",
          ticketPrice: 0,
          equipment: "Bingo set (₦3,000-₦8,000)",
          activities: [
            "Traditional bingo",
            "Pattern games",
            "Prize rounds",
            "Family fun",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Distribute bingo cards to each player",
          location: "Setup",
        },
        {
          time: "0:03",
          activity: "Give markers or chips to cover numbers",
          location: "Markers",
        },
        {
          time: "0:05",
          activity: "Caller draws first number",
          location: "First Call",
        },
        {
          time: "0:06",
          activity: "Players mark matching numbers on cards",
          location: "Marking",
        },
        {
          time: "0:10",
          activity: "Continue calling numbers randomly",
          location: "Gameplay",
        },
        {
          time: "0:15",
          activity: 'First to complete row/column/diagonal yells "BINGO!"',
          location: "Bingo Call",
        },
        {
          time: "0:17",
          activity: "Verify card against called numbers",
          location: "Verification",
        },
        {
          time: "0:20",
          activity: "Award prize, start new game",
          location: "Prize & Reset",
        },
        {
          time: "0:40",
          activity: "Try different patterns (four corners, blackout)",
          location: "Variations",
        },
      ],
    },
    {
      id: "trivial-pursuit-001",
      name: "Trivial Pursuit",
      type: "Trivia Game",
      image:
        "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=300&fit=crop",
      ageGroup: "12+",
      difficulty: "Hard",
      duration: "60-120 mins",
      popularity: 4.5,
      description:
        "Knowledge-based board game testing players on various subjects.",
      locations: [
        {
          name: "Home Quiz Night",
          address: "Your Dining Table",
          price: "Free",
          ticketPrice: 0,
          equipment: "Trivial Pursuit set (₦10,000-₦25,000)",
          activities: [
            "Trivia challenges",
            "Knowledge test",
            "Category mastery",
            "Competitive quiz",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up board, distribute playing pieces",
          location: "Setup",
        },
        {
          time: "0:05",
          activity: "Roll die to move around board",
          location: "Movement",
        },
        {
          time: "0:08",
          activity: "Answer question from category you land on",
          location: "Questions",
        },
        {
          time: "0:10",
          activity: "Correct answer earns wedge piece",
          location: "Wedge Collection",
        },
        {
          time: "0:30",
          activity: "Collect wedges from all 6 categories",
          location: "Category Completion",
        },
        {
          time: "1:00",
          activity: "Return to center hub with all wedges",
          location: "Hub Return",
        },
        {
          time: "1:15",
          activity: "Opponents choose final question category",
          location: "Final Question",
        },
        {
          time: "1:20",
          activity: "Answer correctly to win game",
          location: "Victory",
        },
      ],
    },
    {
      id: "snakes-ladders-001",
      name: "Snakes and Ladders",
      type: "Board Game",
      image:
        "https://images.unsplash.com/photo-1611890547346-8bbfdcea8d9e?w=400&h=300&fit=crop",
      ageGroup: "4+",
      difficulty: "Easy",
      duration: "20-40 mins",
      popularity: 4.3,
      description:
        "Classic children's board game with ladders that help and snakes that hinder progress.",
      locations: [
        {
          name: "Home Family Game",
          address: "Your Living Room",
          price: "Free",
          ticketPrice: 0,
          equipment: "Snakes and Ladders board (₦1,500-₦5,000)",
          activities: [
            "Kids entertainment",
            "Number counting",
            "Luck-based fun",
            "Quick games",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up board, each player chooses token",
          location: "Setup",
        },
        {
          time: "0:03",
          activity: "All players start at square 1",
          location: "Starting",
        },
        {
          time: "0:05",
          activity: "Roll die and move forward",
          location: "First Move",
        },
        {
          time: "0:10",
          activity: "Land on ladder bottom - climb up",
          location: "Ladder Boost",
        },
        {
          time: "0:15",
          activity: "Land on snake head - slide down",
          location: "Snake Slide",
        },
        {
          time: "0:25",
          activity: "Race continues with ups and downs",
          location: "Gameplay",
        },
        {
          time: "0:35",
          activity: "First to reach square 100 wins",
          location: "Victory",
        },
      ],
    },
    {
      id: "karaoke-001",
      name: "Family Karaoke",
      type: "Music Game",
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop",
      ageGroup: "5+",
      difficulty: "Easy",
      duration: "60-120 mins",
      popularity: 4.6,
      description:
        "Singing entertainment where family members perform songs with lyrics displayed on screen.",
      locations: [
        {
          name: "Home Karaoke Night",
          address: "Your Living Room",
          price: "Free",
          ticketPrice: 0,
          equipment: "Karaoke machine or app (₦15,000-₦80,000)",
          activities: [
            "Solo performances",
            "Duets",
            "Group songs",
            "Singing competitions",
          ],
        },
        {
          name: "Karaoke Bars Lagos",
          address: "Various locations (VI, Lekki, Ikeja)",
          price: "₦5,000-₦20,000 per booth",
          ticketPrice: 12500,
          activities: [
            "Private rooms",
            "Song libraries",
            "Professional sound",
            "Food and drinks",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up karaoke system, test microphones",
          location: "Setup",
        },
        {
          time: "0:10",
          activity: "Browse song library, create playlist",
          location: "Song Selection",
        },
        {
          time: "0:15",
          activity: "First performer chooses song",
          location: "First Song",
        },
        {
          time: "0:20",
          activity: "Sing along with on-screen lyrics",
          location: "Performance",
        },
        {
          time: "0:25",
          activity: "Audience cheers and supports",
          location: "Audience",
        },
        {
          time: "0:30",
          activity: "Next person takes microphone",
          location: "Rotation",
        },
        {
          time: "1:00",
          activity: "Try duets and group songs",
          location: "Duets",
        },
        {
          time: "1:30",
          activity: "Voting for best performance",
          location: "Voting",
        },
        {
          time: "1:45",
          activity: "Encore performance by winner",
          location: "Encore",
        },
      ],
    },
    {
      id: "connect-four-001",
      name: "Connect Four",
      type: "Strategy Game",
      image:
        "https://images.unsplash.com/photo-1611890547346-8bbfdcea8d9e?w=400&h=300&fit=crop",
      ageGroup: "6+",
      difficulty: "Easy",
      duration: "10-20 mins",
      popularity: 4.4,
      description:
        "Two-player connection game where players drop colored discs trying to connect four in a row.",
      locations: [
        {
          name: "Home Quick Game",
          address: "Anywhere",
          price: "Free",
          ticketPrice: 0,
          equipment: "Connect Four set (₦3,000-₦8,000)",
          activities: [
            "Quick matches",
            "Strategy practice",
            "Tournament play",
            "Kids entertainment",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up vertical grid, choose disc colors",
          location: "Setup",
        },
        {
          time: "0:02",
          activity: "First player drops disc in any column",
          location: "First Move",
        },
        {
          time: "0:04",
          activity: "Disc falls to lowest available space",
          location: "Disc Drop",
        },
        {
          time: "0:06",
          activity: "Players alternate dropping discs",
          location: "Alternating",
        },
        {
          time: "0:10",
          activity: "Try to connect four discs horizontally",
          location: "Horizontal",
        },
        {
          time: "0:12",
          activity: "Or vertically, or diagonally",
          location: "Directions",
        },
        {
          time: "0:15",
          activity: "Block opponent while building your line",
          location: "Strategy",
        },
        {
          time: "0:18",
          activity: "First to connect four wins",
          location: "Victory",
        },
      ],
    },
    {
      id: "boggle-001",
      name: "Boggle",
      type: "Word Game",
      image:
        "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Medium",
      duration: "15-30 mins",
      popularity: 4.4,
      description:
        "Word game where players find words in sequences of adjacent letters.",
      locations: [
        {
          name: "Home Word Challenge",
          address: "Your Dining Table",
          price: "Free",
          ticketPrice: 0,
          equipment: "Boggle set (₦4,000-₦10,000)",
          activities: [
            "Timed rounds",
            "Vocabulary building",
            "Speed challenges",
            "Scoring competition",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Shake covered grid to randomize letter cubes",
          location: "Setup",
        },
        {
          time: "0:02",
          activity: "Remove cover, start 3-minute timer",
          location: "Timer Start",
        },
        {
          time: "0:03",
          activity: "Find words by connecting adjacent letters",
          location: "Word Finding",
        },
        {
          time: "0:05",
          activity: "Write down all words (3+ letters)",
          location: "Writing",
        },
        {
          time: "0:05",
          activity: "Timer ends, pencils down",
          location: "Time Up",
        },
        {
          time: "0:06",
          activity: "Read words aloud, cross out duplicates",
          location: "Reading",
        },
        {
          time: "0:10",
          activity: "Score points: 3-4 letters=1pt, 5 letters=2pts, etc.",
          location: "Scoring",
        },
        {
          time: "0:15",
          activity: "Shake grid for next round",
          location: "Next Round",
        },
      ],
    },
  ],

  gamesForKids: [
    {
      id: "musical-chairs-001",
      name: "Musical Chairs",
      type: "Party Game",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
      ageGroup: "3-10",
      difficulty: "Easy",
      duration: "10-20 mins",
      popularity: 4.5,
      description:
        "Exciting party game where kids walk around chairs and rush to sit when music stops.",
      locations: [
        {
          name: "Home Party Setup",
          address: "Your Living Room",
          price: "Free",
          ticketPrice: 0,
          equipment: "Chairs and music player",
          activities: [
            "Birthday parties",
            "Family gatherings",
            "Kids entertainment",
            "Group fun",
          ],
        },
        {
          name: "Party Venues Lagos",
          address: "Various event centers",
          price: "₦20,000-₦100,000",
          ticketPrice: 50000,
          activities: [
            "Professional hosting",
            "Organized games",
            "DJ services",
            "Full party package",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Arrange chairs in circle, one fewer than players",
          location: "Setup",
        },
        {
          time: "0:03",
          activity: "Explain rules clearly to children",
          location: "Rules",
        },
        {
          time: "0:05",
          activity: "Start music, children walk around chairs",
          location: "Round 1",
        },
        {
          time: "0:07",
          activity: "Stop music suddenly - rush to sit",
          location: "Music Stop",
        },
        {
          time: "0:08",
          activity: "Player without chair is out, remove one chair",
          location: "Elimination",
        },
        {
          time: "0:10",
          activity: "Continue rounds, building excitement",
          location: "Ongoing",
        },
        {
          time: "0:15",
          activity: "Final round with 2 players and 1 chair",
          location: "Finals",
        },
        {
          time: "0:17",
          activity: "Winner receives prize",
          location: "Victory",
        },
      ],
    },
    {
      id: "duck-duck-goose-001",
      name: "Duck Duck Goose",
      type: "Circle Game",
      image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop",
      ageGroup: "3-8",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.4,
      description:
        'Classic circle game where one child taps others\' heads saying "duck" until choosing "goose".',
      locations: [
        {
          name: "Playground or Park",
          address: "Any open space with grass",
          price: "Free",
          ticketPrice: 0,
          activities: [
            "Circle games",
            "Running",
            "Social play",
            "Group activity",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Children sit in circle facing inward",
          location: "Circle Formation",
        },
        {
          time: "0:03",
          activity: 'Choose first "it" player',
          location: "Selection",
        },
        {
          time: "0:05",
          activity: '"It" walks around tapping heads saying "duck"',
          location: "Tapping",
        },
        {
          time: "0:08",
          activity: 'Eventually taps someone saying "goose"',
          location: "Goose Call",
        },
        {
          time: "0:09",
          activity: 'Goose chases "it" around circle',
          location: "Chase",
        },
        {
          time: "0:11",
          activity: '"It" tries to reach goose\'s empty spot',
          location: "Racing",
        },
        {
          time: "0:13",
          activity: 'If caught, "it" sits in center pot',
          location: "Pot",
        },
        {
          time: "0:15",
          activity: 'If safe, goose becomes new "it"',
          location: "New Round",
        },
      ],
    },
    {
      id: "simon-says-001",
      name: "Simon Says",
      type: "Following Game",
      image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop",
      ageGroup: "4-10",
      difficulty: "Easy",
      duration: "10-20 mins",
      popularity: 4.5,
      description:
        'Listening game where children follow commands only when prefaced with "Simon says".',
      locations: [
        {
          name: "Anywhere",
          address: "Home, classroom, playground",
          price: "Free",
          ticketPrice: 0,
          activities: [
            "No equipment needed",
            "Listening skills",
            "Following directions",
            "Quick game",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Children stand facing leader",
          location: "Setup",
        },
        {
          time: "0:02",
          activity: 'Leader gives command: "Simon says touch your toes"',
          location: "First Command",
        },
        {
          time: "0:04",
          activity: 'Children follow commands with "Simon says"',
          location: "Following",
        },
        {
          time: "0:06",
          activity: 'Leader gives command without "Simon says"',
          location: "Trick Command",
        },
        {
          time: "0:08",
          activity: "Children who follow are out",
          location: "Elimination",
        },
        {
          time: "0:15",
          activity: "Last child standing wins",
          location: "Victory",
        },
      ],
    },
    {
      id: "red-light-green-light-001",
      name: "Red Light Green Light",
      type: "Movement Game",
      image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop",
      ageGroup: "4-10",
      difficulty: "Easy",
      duration: "10-20 mins",
      popularity: 4.6,
      description:
        'Running game where children move forward on "green light" and freeze on "red light".',
      locations: [
        {
          name: "Open Space",
          address: "Playground, park, or large yard",
          price: "Free",
          ticketPrice: 0,
          activities: [
            "Running game",
            "Freezing challenge",
            "Outdoor play",
            "No equipment",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Children line up at starting line",
          location: "Starting Line",
        },
        {
          time: "0:02",
          activity: "Leader stands at finish line facing away",
          location: "Leader Position",
        },
        {
          time: "0:04",
          activity: 'Leader calls "green light" - children run forward',
          location: "Green Light",
        },
        {
          time: "0:06",
          activity: 'Leader calls "red light" and turns around quickly',
          location: "Red Light",
        },
        {
          time: "0:08",
          activity: "Children must freeze immediately",
          location: "Freezing",
        },
        {
          time: "0:10",
          activity: "Anyone caught moving goes back to start",
          location: "Caught Moving",
        },
        {
          time: "0:15",
          activity: "First to reach leader wins and becomes new leader",
          location: "Victory",
        },
      ],
    },
    {
      id: "freeze-dance-001",
      name: "Freeze Dance",
      type: "Music Game",
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop",
      ageGroup: "3-10",
      difficulty: "Easy",
      duration: "10-20 mins",
      popularity: 4.5,
      description:
        "Dancing game where children freeze in place when the music stops.",
      locations: [
        {
          name: "Home or Party",
          address: "Your living room or party venue",
          price: "Free",
          ticketPrice: 0,
          equipment: "Music player",
          activities: [
            "Dance party",
            "Freezing challenge",
            "Kids entertainment",
            "No props needed",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Clear space for dancing",
          location: "Setup",
        },
        {
          time: "0:02",
          activity: "Start upbeat music",
          location: "Music Start",
        },
        {
          time: "0:03",
          activity: "Children dance freely",
          location: "Dancing",
        },
        {
          time: "0:05",
          activity: "Stop music suddenly",
          location: "Music Stop",
        },
        {
          time: "0:06",
          activity: "Everyone freezes in current position",
          location: "Freeze",
        },
        {
          time: "0:08",
          activity: "Anyone moving is out or gets silly task",
          location: "Elimination",
        },
        {
          time: "0:10",
          activity: "Resume music and continue",
          location: "Continue",
        },
        {
          time: "0:18",
          activity: "Last dancer standing wins",
          location: "Winner",
        },
      ],
    },
    {
      id: "hot-potato-001",
      name: "Hot Potato",
      type: "Passing Game",
      image:
        "https://images.unsplash.com/photo-1509390298614-cfb6fc6c1980?w=400&h=300&fit=crop",
      ageGroup: "4-10",
      difficulty: "Easy",
      duration: "10-20 mins",
      popularity: 4.4,
      description:
        "Fast-paced game where children pass an object around a circle before music stops.",
      locations: [
        {
          name: "Anywhere",
          address: "Home, classroom, party",
          price: "Free",
          ticketPrice: 0,
          equipment: "Bean bag or soft ball, music player",
          activities: [
            "Quick reflexes",
            "Passing skills",
            "Circle game",
            "Party favorite",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Children sit in circle",
          location: "Circle Formation",
        },
        {
          time: "0:02",
          activity: 'Start music, begin passing "hot potato"',
          location: "Game Start",
        },
        {
          time: "0:04",
          activity: "Pass quickly around circle",
          location: "Passing",
        },
        {
          time: "0:06",
          activity: "Music stops randomly",
          location: "Music Stop",
        },
        {
          time: "0:07",
          activity: "Child holding potato is out",
          location: "Elimination",
        },
        {
          time: "0:09",
          activity: "Resume with remaining players",
          location: "Continue",
        },
        { time: "0:15", activity: "Last player wins", location: "Victory" },
      ],
    },
    {
      id: "memory-game-001",
      name: "Memory/Matching Game",
      type: "Card Game",
      image:
        "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=300&fit=crop",
      ageGroup: "3-8",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.5,
      description:
        "Concentration game where children flip cards to find matching pairs.",
      locations: [
        {
          name: "Home Game",
          address: "Floor or table",
          price: "Free",
          ticketPrice: 0,
          equipment: "Memory card set (₦2,000-₦6,000)",
          activities: [
            "Memory training",
            "Concentration",
            "Matching pairs",
            "Educational fun",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Lay all cards face-down in grid",
          location: "Setup",
        },
        {
          time: "0:03",
          activity: "First player flips two cards",
          location: "First Flip",
        },
        {
          time: "0:05",
          activity: "If matching, keep pair and go again",
          location: "Match",
        },
        {
          time: "0:07",
          activity: "If not matching, flip back face-down",
          location: "No Match",
        },
        {
          time: "0:10",
          activity: "Try to remember card locations",
          location: "Memory",
        },
        {
          time: "0:20",
          activity: "Player with most pairs wins",
          location: "Victory",
        },
      ],
    },
    {
      id: "candy-land-001",
      name: "Candy Land",
      type: "Board Game",
      image:
        "https://images.unsplash.com/photo-1611890547346-8bbfdcea8d9e?w=400&h=300&fit=crop",
      ageGroup: "3-6",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.3,
      description:
        "Colorful first board game where young children follow a path to candy castle.",
      locations: [
        {
          name: "Home Play",
          address: "Floor or table",
          price: "Free",
          ticketPrice: 0,
          equipment: "Candy Land board game (₦5,000-₦12,000)",
          activities: [
            "First board game",
            "Color recognition",
            "Turn-taking",
            "No reading required",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up colorful game board",
          location: "Setup",
        },
        {
          time: "0:03",
          activity: "Each player chooses gingerbread token",
          location: "Token Selection",
        },
        {
          time: "0:05",
          activity: "Draw card showing color or character",
          location: "Card Draw",
        },
        {
          time: "0:07",
          activity: "Move to next matching colored square",
          location: "Movement",
        },
        {
          time: "0:15",
          activity: "Special cards jump ahead or backward",
          location: "Special Cards",
        },
        {
          time: "0:25",
          activity: "First to reach Candy Castle wins",
          location: "Victory",
        },
      ],
    },
    {
      id: "balloon-pop-001",
      name: "Balloon Pop Relay",
      type: "Party Game",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
      ageGroup: "5-12",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.4,
      description:
        "Active relay race where children pop balloons in various creative ways.",
      locations: [
        {
          name: "Party Venue or Backyard",
          address: "Outdoor or large indoor space",
          price: "Free",
          ticketPrice: 0,
          equipment: "Balloons (₦1,000-₦3,000 for pack)",
          activities: [
            "Team relay",
            "Balloon popping",
            "High energy",
            "Party game",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Inflate balloons, divide into teams",
          location: "Setup",
        },
        {
          time: "0:05",
          activity: "Teams line up at start line",
          location: "Starting Position",
        },
        {
          time: "0:07",
          activity: "First player races to balloon",
          location: "Race Start",
        },
        {
          time: "0:09",
          activity: "Pop balloon by sitting, stomping, or squeezing",
          location: "Popping",
        },
        {
          time: "0:11",
          activity: "Run back to tag next teammate",
          location: "Relay",
        },
        {
          time: "0:20",
          activity: "First team to pop all balloons wins",
          location: "Victory",
        },
      ],
    },
    {
      id: "treasure-hunt-001",
      name: "Treasure Hunt",
      type: "Adventure Game",
      image:
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=300&fit=crop",
      ageGroup: "5-12",
      difficulty: "Medium",
      duration: "30-60 mins",
      popularity: 4.7,
      description:
        "Exciting adventure where children follow clues to find hidden treasure.",
      locations: [
        {
          name: "Home or Garden",
          address: "Indoor or outdoor space",
          price: "Free",
          ticketPrice: 0,
          equipment: "Clue cards, hidden prizes (₦2,000-₦10,000)",
          activities: [
            "Clue solving",
            "Exploration",
            "Team work",
            "Prize hunting",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Hide treasure and place clues",
          location: "Setup",
        },
        {
          time: "0:10",
          activity: "Give children first clue",
          location: "First Clue",
        },
        {
          time: "0:15",
          activity: "Solve clue, find next location",
          location: "Clue Solving",
        },
        {
          time: "0:20",
          activity: "Follow trail of clues",
          location: "Following Trail",
        },
        {
          time: "0:40",
          activity: "Final clue leads to treasure",
          location: "Final Clue",
        },
        {
          time: "0:50",
          activity: "Discover treasure chest",
          location: "Treasure Found",
        },
        {
          time: "1:00",
          activity: "Share prizes among hunters",
          location: "Prize Distribution",
        },
      ],
    },
    {
      id: "jump-rope-001",
      name: "Jump Rope",
      type: "Physical Game",
      image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop",
      ageGroup: "5-12",
      difficulty: "Medium",
      popularity: 4.5,
      description:
        "Active game where children jump over a rope, either solo or with turners.",
      locations: [
        {
          name: "Playground or Driveway",
          address: "Any flat outdoor space",
          price: "Free",
          ticketPrice: 0,
          equipment: "Jump rope (₦500-₦3,000)",
          activities: [
            "Solo jumping",
            "Double Dutch",
            "Rhyme games",
            "Fitness activity",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Choose appropriate length rope",
          location: "Setup",
        },
        { time: "0:03", activity: "Practice basic jumps", location: "Warm-Up" },
        {
          time: "0:08",
          activity: "Try different jump styles",
          location: "Variations",
        },
        {
          time: "0:15",
          activity: "Count consecutive jumps",
          location: "Challenge",
        },
        { time: "0:20", activity: "Sing jump rope rhymes", location: "Rhymes" },
        {
          time: "0:25",
          activity: "Try Double Dutch with two ropes",
          location: "Advanced",
        },
        {
          time: "0:35",
          activity: "Competition for most jumps",
          location: "Contest",
        },
      ],
    },
    {
      id: "coloring-contest-001",
      name: "Coloring Contest",
      type: "Art Activity",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
      ageGroup: "3-10",
      difficulty: "Easy",
      duration: "30-60 mins",
      popularity: 4.4,
      description:
        "Creative activity where children color pictures, competing for best artwork.",
      locations: [
        {
          name: "Home or Classroom",
          address: "Any table space",
          price: "Free",
          ticketPrice: 0,
          equipment: "Coloring books, crayons/markers (₦2,000-₦8,000)",
          activities: [
            "Creative expression",
            "Fine motor skills",
            "Quiet activity",
            "Art showcase",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Distribute coloring sheets and supplies",
          location: "Setup",
        },
        {
          time: "0:05",
          activity: "Children begin coloring",
          location: "Coloring Start",
        },
        {
          time: "0:30",
          activity: "Continue with detailed work",
          location: "Detailed Work",
        },
        {
          time: "0:50",
          activity: "Finishing touches",
          location: "Final Details",
        },
        {
          time: "0:55",
          activity: "Display all artwork",
          location: "Art Display",
        },
        {
          time: "1:00",
          activity: "Vote for favorites, award prizes",
          location: "Winners",
        },
      ],
    },
  ],

  gamesForMales: [
    {
      id: "fifa-001",
      name: "FIFA (Video Game)",
      type: "Digital Game",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      ageGroup: "10+",
      difficulty: "Medium",
      duration: "20-90 mins",
      popularity: 4.9,
      description:
        "Premier football video game with realistic gameplay, licensed teams, and multiple modes.",
      locations: [
        {
          name: "Home Console",
          address: "Your gaming setup",
          price: "Game cost ₦25,000-₦35,000 + Console",
          ticketPrice: 0,
          equipment: "PlayStation, Xbox, or PC",
          activities: [
            "Career mode",
            "Ultimate Team",
            "Online seasons",
            "Local multiplayer",
          ],
        },
        {
          name: "Gaming Cafes Lagos",
          address: "Various (Ikeja, Lekki, VI)",
          price: "₦500-₦2,000 per hour",
          ticketPrice: 1000,
          activities: [
            "Console gaming",
            "Tournaments",
            "Social play",
            "Latest FIFA version",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Power on console, load FIFA",
          location: "Setup",
        },
        {
          time: "0:05",
          activity: "Choose teams - browse leagues, pick clubs",
          location: "Team Selection",
        },
        {
          time: "0:10",
          activity: "Adjust match settings - difficulty, half length",
          location: "Settings",
        },
        {
          time: "0:15",
          activity: "Kickoff - first half begins",
          location: "First Half",
        },
        {
          time: "0:25",
          activity: "Use skills, passes, through balls",
          location: "Gameplay",
        },
        {
          time: "0:30",
          activity: "Half-time - review stats, substitutions",
          location: "Half-Time",
        },
        {
          time: "0:35",
          activity: "Second half - intensify gameplay",
          location: "Second Half",
        },
        {
          time: "0:50",
          activity: "Full-time whistle, view match stats",
          location: "Full Time",
        },
        {
          time: "0:55",
          activity: "Rematch or switch teams",
          location: "Next Match",
        },
        {
          time: "1:30",
          activity: "Save progress, discuss highlights",
          location: "Wrap-Up",
        },
      ],
    },
    {
      id: "call-of-duty-001",
      name: "Call of Duty",
      type: "Digital Game",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      ageGroup: "18+",
      difficulty: "Hard",
      duration: "30-120 mins",
      popularity: 4.8,
      description:
        "First-person shooter game with intense combat, multiplayer modes, and strategic gameplay.",
      locations: [
        {
          name: "Home Gaming",
          address: "Your gaming room",
          price: "Game cost ₦30,000-₦40,000",
          ticketPrice: 0,
          equipment: "Console or gaming PC",
          activities: [
            "Campaign mode",
            "Multiplayer battles",
            "Zombies mode",
            "Warzone BR",
          ],
        },
        {
          name: "Gaming Cafes",
          address: "Lagos gaming centers",
          price: "₦1,000-₦2,500 per hour",
          ticketPrice: 1500,
          activities: [
            "High-end PCs",
            "Tournament play",
            "Team matches",
            "LAN parties",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Boot game, select mode",
          location: "Game Start",
        },
        {
          time: "0:05",
          activity: "Choose loadout and perks",
          location: "Loadout",
        },
        {
          time: "0:10",
          activity: "Enter multiplayer lobby",
          location: "Lobby",
        },
        {
          time: "0:15",
          activity: "Team Deathmatch or objective modes",
          location: "Match Start",
        },
        {
          time: "0:30",
          activity: "Strategic gameplay, map control",
          location: "Gameplay",
        },
        {
          time: "1:00",
          activity: "Switch to Battle Royale mode",
          location: "Mode Change",
        },
        {
          time: "1:30",
          activity: "Squad up for Warzone",
          location: "Squad Play",
        },
        {
          time: "2:00",
          activity: "Review stats and achievements",
          location: "Session End",
        },
      ],
    },
    {
      id: "gym-workout-001",
      name: "Gym Workout Challenge",
      type: "Physical Activity",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
      ageGroup: "16+",
      difficulty: "Hard",
      duration: "60-120 mins",
      popularity: 4.7,
      description:
        "Competitive fitness challenges and strength training workouts.",
      locations: [
        {
          name: "Commercial Gyms Lagos",
          address: "Various locations (Lekki, VI, Ikeja)",
          price: "₦5,000-₦15,000 per day pass",
          ticketPrice: 10000,
          activities: [
            "Weight training",
            "Cardio",
            "CrossFit",
            "Personal training",
          ],
        },
        {
          name: "Outdoor Fitness Parks",
          address: "Public parks with equipment",
          price: "Free",
          ticketPrice: 0,
          activities: [
            "Calisthenics",
            "Running",
            "Body weight exercises",
            "Group workouts",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Arrive, change into workout gear",
          location: "Arrival",
        },
        {
          time: "0:05",
          activity: "Warm-up - light cardio and stretching",
          location: "Warm-Up",
        },
        {
          time: "0:15",
          activity: "Strength training - compound lifts",
          location: "Lifting",
        },
        {
          time: "0:45",
          activity: "Accessory exercises and isolation",
          location: "Accessories",
        },
        {
          time: "1:00",
          activity: "Cardio session - treadmill or cycling",
          location: "Cardio",
        },
        { time: "1:20", activity: "Core workout and abs", location: "Core" },
        {
          time: "1:30",
          activity: "Cool down and stretching",
          location: "Cool Down",
        },
        {
          time: "1:40",
          activity: "Protein shake and recovery",
          location: "Recovery",
        },
      ],
    },
    {
      id: "paintball-001",
      name: "Paintball",
      type: "Combat Sport",
      image:
        "https://images.unsplash.com/photo-1563299796-17596ed6b017?w=400&h=300&fit=crop",
      ageGroup: "12+",
      difficulty: "Medium",
      duration: "120-180 mins",
      popularity: 4.8,
      description:
        "Tactical team sport where players eliminate opponents by hitting them with paint-filled pellets.",
      locations: [
        {
          name: "Paintball Arena Lagos",
          address: "Lekki and outskirts",
          price: "₦8,000-₦15,000 per person",
          ticketPrice: 12000,
          activities: [
            "Team battles",
            "Capture the flag",
            "Elimination rounds",
            "Equipment included",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Arrival, sign waiver, safety briefing",
          location: "Check-In",
        },
        {
          time: "0:15",
          activity: "Get equipped - marker, mask, protective gear",
          location: "Equipment",
        },
        {
          time: "0:30",
          activity: "Practice shooting at targets",
          location: "Practice",
        },
        {
          time: "0:45",
          activity: "Divide into teams, discuss strategy",
          location: "Team Formation",
        },
        {
          time: "1:00",
          activity: "First match - team elimination",
          location: "Match 1",
        },
        {
          time: "1:20",
          activity: "Break, reload paintballs, hydrate",
          location: "Break",
        },
        {
          time: "1:30",
          activity: "Capture the flag match",
          location: "Match 2",
        },
        {
          time: "2:00",
          activity: "Final battle royale round",
          location: "Finals",
        },
        {
          time: "2:30",
          activity: "Clean up, return equipment",
          location: "Wrap-Up",
        },
      ],
    },
    {
      id: "go-kart-001",
      name: "Go-Kart Racing",
      type: "Racing Sport",
      image:
        "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=400&h=300&fit=crop",
      ageGroup: "12+",
      difficulty: "Medium",
      duration: "30-90 mins",
      popularity: 4.7,
      description:
        "High-speed racing in small open-wheel vehicles on dedicated tracks.",
      locations: [
        {
          name: "Karting Tracks Lagos",
          address: "Lekki, Victoria Island",
          price: "₦5,000-₦12,000 per session",
          ticketPrice: 8000,
          activities: [
            "Lap racing",
            "Time trials",
            "Racing leagues",
            "Corporate events",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Arrival, registration, safety briefing",
          location: "Check-In",
        },
        {
          time: "0:10",
          activity: "Get fitted with helmet and racing gear",
          location: "Gear Up",
        },
        {
          time: "0:15",
          activity: "Track walk-through, learn racing line",
          location: "Track Tour",
        },
        {
          time: "0:25",
          activity: "Practice laps to learn kart handling",
          location: "Practice",
        },
        {
          time: "0:35",
          activity: "Qualifying session - set best lap time",
          location: "Qualifying",
        },
        {
          time: "0:45",
          activity: "Race start - compete for position",
          location: "Race",
        },
        {
          time: "1:00",
          activity: "Checkered flag, cool-down lap",
          location: "Finish",
        },
        {
          time: "1:10",
          activity: "Review lap times and podium ceremony",
          location: "Results",
        },
      ],
    },
    {
      id: "boxing-001",
      name: "Boxing/Sparring",
      type: "Combat Sport",
      image:
        "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=300&fit=crop",
      ageGroup: "16+",
      difficulty: "Hard",
      duration: "60-90 mins",
      popularity: 4.6,
      description:
        "Combat sport focusing on punching technique, footwork, and defensive skills.",
      locations: [
        {
          name: "Boxing Gyms Lagos",
          address: "Various locations across Lagos",
          price: "₦3,000-₦10,000 per session",
          ticketPrice: 6000,
          activities: [
            "Technical training",
            "Sparring",
            "Bag work",
            "Fitness boxing",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Arrive, wrap hands, put on gloves",
          location: "Preparation",
        },
        {
          time: "0:10",
          activity: "Jump rope and shadow boxing warm-up",
          location: "Warm-Up",
        },
        {
          time: "0:20",
          activity: "Heavy bag work - combinations",
          location: "Bag Work",
        },
        { time: "0:35", activity: "Pad work with trainer", location: "Mitts" },
        {
          time: "0:50",
          activity: "Controlled sparring rounds",
          location: "Sparring",
        },
        {
          time: "1:10",
          activity: "Core conditioning exercises",
          location: "Conditioning",
        },
        {
          time: "1:25",
          activity: "Cool down and stretching",
          location: "Cool Down",
        },
      ],
    },
    {
      id: "fortnite-001",
      name: "Fortnite",
      type: "Digital Game",
      image:
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop",
      ageGroup: "13+",
      difficulty: "Medium",
      duration: "30-120 mins",
      popularity: 4.8,
      description:
        "Popular battle royale game combining shooting, building, and survival elements.",
      locations: [
        {
          name: "Home Gaming",
          address: "Your setup",
          price: "Free-to-play",
          ticketPrice: 0,
          equipment: "Console, PC, or mobile",
          activities: [
            "Battle Royale",
            "Creative mode",
            "Team modes",
            "Tournaments",
          ],
        },
        {
          name: "Gaming Cafes",
          address: "Lagos gaming centers",
          price: "₦500-₦1,500 per hour",
          ticketPrice: 1000,
          activities: [
            "Squad play",
            "Competitive matches",
            "Practice sessions",
            "Social gaming",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Launch game, check challenges",
          location: "Start",
        },
        {
          time: "0:05",
          activity: "Land on map, gather loot",
          location: "Drop",
        },
        {
          time: "0:15",
          activity: "Build structures for defense",
          location: "Building",
        },
        {
          time: "0:25",
          activity: "Engage in combat encounters",
          location: "Combat",
        },
        {
          time: "0:35",
          activity: "Storm circle closes, move to safe zone",
          location: "Rotation",
        },
        {
          time: "0:45",
          activity: "Final circles - intense battles",
          location: "Endgame",
        },
        {
          time: "0:50",
          activity: "Victory Royale or next match",
          location: "Match End",
        },
        {
          time: "1:30",
          activity: "Review stats and highlights",
          location: "Wrap-Up",
        },
      ],
    },
    {
      id: "poker-night-001",
      name: "Poker Night",
      type: "Card Game",
      image:
        "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=400&h=300&fit=crop",
      ageGroup: "21+",
      difficulty: "Hard",
      duration: "120-240 mins",
      popularity: 4.7,
      description:
        "Strategic card game night with friends, featuring Texas Hold'em and variants.",
      locations: [
        {
          name: "Home Poker Game",
          address: "Your dining room",
          price: "Free",
          ticketPrice: 0,
          equipment: "Poker chips and cards (₦5,000-₦20,000)",
          activities: [
            "Cash games",
            "Tournament format",
            "Social gaming",
            "Strategy discussion",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up table, distribute chips",
          location: "Setup",
        },
        {
          time: "0:15",
          activity: "Post blinds, deal hole cards",
          location: "Game Start",
        },
        {
          time: "0:20",
          activity: "Pre-flop betting round",
          location: "Betting 1",
        },
        {
          time: "0:25",
          activity: "Flop dealt - three community cards",
          location: "Flop",
        },
        {
          time: "0:40",
          activity: "Turn and river cards",
          location: "Later Streets",
        },
        {
          time: "1:00",
          activity: "Showdown and pot awarded",
          location: "Showdown",
        },
        {
          time: "2:00",
          activity: "Continue tournament or cash game",
          location: "Mid-Game",
        },
        { time: "3:30", activity: "Final table action", location: "Finals" },
        {
          time: "4:00",
          activity: "Winner declared, cash out",
          location: "End",
        },
      ],
    },
    {
      id: "skateboarding-001",
      name: "Skateboarding",
      type: "Extreme Sport",
      image:
        "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=400&h=300&fit=crop",
      ageGroup: "10+",
      difficulty: "Hard",
      duration: "60-180 mins",
      popularity: 4.6,
      description:
        "Action sport involving riding and performing tricks on a skateboard.",
      locations: [
        {
          name: "Skate Parks Lagos",
          address: "Limited locations, mostly DIY spots",
          price: "Free-₦2,000",
          ticketPrice: 0,
          activities: [
            "Street skating",
            "Tricks practice",
            "Ramp skating",
            "Social skating",
          ],
        },
        {
          name: "Street Spots",
          address: "Various urban locations",
          price: "Free",
          ticketPrice: 0,
          activities: [
            "Street skating",
            "Spot hunting",
            "Video filming",
            "Practice sessions",
            "Family tournaments",
            "Scoring practice",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up chess board with pieces in starting positions",
          location: "Setup",
        },
        {
          time: "0:02",
          activity: "White moves first - typically pawn or knight opening",
          location: "Opening",
        },
        {
          time: "0:05",
          activity: "Develop minor pieces (knights and bishops) early",
          location: "Development",
        },
        {
          time: "0:10",
          activity: "Control center squares (e4, d4, e5, d5)",
          location: "Center Control",
        },
        {
          time: "0:15",
          activity: "Castle king to safety (kingside or queenside)",
          location: "Castling",
        },
        {
          time: "0:20",
          activity: "Middle game - tactical combinations and positioning",
          location: "Mid Game",
        },
        {
          time: "0:35",
          activity: "Look for forks, pins, skewers, and discovered attacks",
          location: "Tactics",
        },
        {
          time: "0:45",
          activity: "Endgame begins with fewer pieces on board",
          location: "Endgame",
        },
        {
          time: "0:55",
          activity: "King becomes active piece in endgame",
          location: "King Activity",
        },
        {
          time: "1:00",
          activity: "Checkmate delivered or draw agreed",
          location: "Game End",
        },
      ],
    },
    {
      id: "scrabble-001",
      name: "Scrabble",
      type: "Word Game",
      image:
        "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Medium",
      duration: "60-90 mins",
      popularity: 4.6,
      description:
        "Classic word-building board game where players create intersecting words on a 15x15 grid to score points.",
      locations: [
        {
          name: "Home Game Night",
          address: "Your Dining Table",
          price: "Free",
          ticketPrice: 0,
          equipment: "Scrabble set (₦5,000-₦15,000)",
          activities: [
            "Vocabulary building",
            "Family tournaments",
            "Timed challenges",
            "Team play",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up board, distribute tile racks to each player",
          location: "Setup",
        },
        {
          time: "0:05",
          activity: "Each player draws 7 letter tiles from bag",
          location: "Tile Draw",
        },
        {
          time: "0:08",
          activity:
            "First player places word on center star (double word score)",
          location: "Opening Word",
        },
        {
          time: "0:15",
          activity: "Players take turns forming words using existing letters",
          location: "Word Building",
        },
        {
          time: "0:20",
          activity: "Calculate scores using letter values and premium squares",
          location: "Scoring",
        },
        {
          time: "0:30",
          activity:
            "Strategic tile placement on double/triple letter and word scores",
          location: "Strategy",
        },
        {
          time: "0:45",
          activity: "Exchange tiles if needed (costs your turn)",
          location: "Tile Exchange",
        },
        {
          time: "1:00",
          activity: "Game intensifies as board fills up",
          location: "Mid Game",
        },
        {
          time: "1:20",
          activity: "Final moves with remaining tiles",
          location: "Endgame",
        },
        {
          time: "1:30",
          activity: "Tally final scores, subtract remaining tile values",
          location: "Final Score",
        },
      ],
    },
    {
      id: "monopoly-001",
      name: "Monopoly",
      type: "Board Game",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Medium",
      duration: "90-180 mins",
      popularity: 4.5,
      description:
        "Real estate trading game where players buy, sell, and develop properties to bankrupt opponents.",
      locations: [
        {
          name: "Home Setup",
          address: "Your Living Room",
          price: "Free",
          ticketPrice: 0,
          equipment: "Monopoly set (₦8,000-₦25,000)",
          activities: [
            "Property trading",
            "Business strategy",
            "Negotiation practice",
            "Family competition",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up board, distribute starting money to each player",
          location: "Setup",
        },
        {
          time: "0:10",
          activity: "Roll dice to move around board, buy unowned properties",
          location: "Early Game",
        },
        {
          time: "0:30",
          activity:
            "Trade properties with other players to complete color sets",
          location: "Trading Phase",
        },
        {
          time: "1:00",
          activity: "Build houses and hotels on complete color sets",
          location: "Development",
        },
        {
          time: "1:30",
          activity:
            "Collect higher rents from opponents landing on your properties",
          location: "Mid Game",
        },
        {
          time: "2:00",
          activity:
            "Mortgage properties if cash-strapped, make strategic deals",
          location: "Financial Strategy",
        },
        {
          time: "2:30",
          activity: "Players begin going bankrupt, game narrows down",
          location: "Elimination",
        },
        {
          time: "3:00",
          activity: "Last player remaining with money wins",
          location: "Victory",
        },
      ],
    },
    {
      id: "poker-001",
      name: "Cards (Poker)",
      type: "Card Game",
      image:
        "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=400&h=300&fit=crop",
      ageGroup: "18+",
      difficulty: "Hard",
      duration: "60-180 mins",
      popularity: 4.8,
      description:
        "Strategic card game combining skill, psychology, and probability. Texas Hold'em is the most popular variant.",
      locations: [
        {
          name: "Home Poker Night",
          address: "Your Dining Room",
          price: "Free",
          ticketPrice: 0,
          equipment: "Poker chips and cards (₦5,000-₦20,000)",
          activities: [
            "Texas Hold'em",
            "Cash games",
            "Tournament play",
            "Social gaming",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up table, distribute chips, shuffle cards",
          location: "Setup",
        },
        {
          time: "0:10",
          activity: "Post blinds, deal two hole cards to each player",
          location: "Pre-Flop",
        },
        {
          time: "0:15",
          activity: "First betting round - fold, call, or raise",
          location: "Betting 1",
        },
        {
          time: "0:20",
          activity: "Deal the flop (three community cards)",
          location: "Flop",
        },
        {
          time: "0:25",
          activity: "Second betting round",
          location: "Betting 2",
        },
        {
          time: "0:30",
          activity: "Deal the turn (fourth community card)",
          location: "Turn",
        },
        {
          time: "0:35",
          activity: "Third betting round",
          location: "Betting 3",
        },
        {
          time: "0:40",
          activity: "Deal the river (fifth community card)",
          location: "River",
        },
        {
          time: "0:45",
          activity: "Final betting round",
          location: "Betting 4",
        },
        {
          time: "0:50",
          activity: "Showdown - best five-card hand wins pot",
          location: "Showdown",
        },
        {
          time: "1:00",
          activity: "Continue rounds until tournament end or time limit",
          location: "Ongoing",
        },
      ],
    },
    {
      id: "jenga-001",
      name: "Jenga",
      type: "Stacking Game",
      image:
        "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=400&h=300&fit=crop",
      ageGroup: "6+",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.4,
      description:
        "Physical skill game where players remove blocks from a tower and place them on top without toppling it.",
      locations: [
        {
          name: "Home Setup",
          address: "Any flat surface",
          price: "Free",
          ticketPrice: 0,
          equipment: "Jenga set (₦3,000-₦8,000)",
          activities: [
            "Party game",
            "Family fun",
            "Steady hand challenge",
            "Giant Jenga variant",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Stack 54 blocks in rows of three, alternating directions",
          location: "Tower Building",
        },
        {
          time: "0:05",
          activity: "Roll dice or go in order to determine first player",
          location: "Starting",
        },
        {
          time: "0:07",
          activity: "Remove one block from below top completed row",
          location: "First Move",
        },
        {
          time: "0:10",
          activity: "Place removed block on top to continue tower",
          location: "Stacking",
        },
        {
          time: "0:15",
          activity: "Tower becomes increasingly unstable",
          location: "Tension Builds",
        },
        {
          time: "0:20",
          activity: "Use one hand only, test blocks by tapping gently",
          location: "Strategy",
        },
        {
          time: "0:25",
          activity: "Player who topples tower loses",
          location: "Game End",
        },
        {
          time: "0:30",
          activity: "Rebuild for another round",
          location: "Reset",
        },
      ],
    },
    {
      id: "table-tennis-001",
      name: "Table Tennis",
      type: "Racket Sport",
      image:
        "https://images.unsplash.com/photo-1534158914592-062992fbe900?w=400&h=300&fit=crop",
      ageGroup: "6+",
      difficulty: "Medium",
      duration: "20-45 mins",
      popularity: 4.7,
      description:
        "Fast-paced indoor sport played on a table with small paddles and a lightweight ball.",
      locations: [
        {
          name: "Home Setup",
          address: "Game room or garage",
          price: "Free",
          ticketPrice: 0,
          equipment: "Table tennis table (₦80,000-₦300,000)",
          activities: [
            "Singles matches",
            "Doubles play",
            "Practice drills",
            "Tournament games",
          ],
        },
        {
          name: "Recreation Centers Lagos",
          address: "Various locations across Lagos",
          price: "₦2,000-₦5,000 per hour",
          ticketPrice: 3000,
          activities: [
            "Professional tables",
            "Equipment rental",
            "Coaching available",
            "League matches",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up table, check net height (6 inches)",
          location: "Setup",
        },
        {
          time: "0:03",
          activity: "Warm up with practice rallies",
          location: "Warm-Up",
        },
        {
          time: "0:08",
          activity: "Coin toss for serve or side selection",
          location: "Toss",
        },
        {
          time: "0:10",
          activity: "First game begins - serve must bounce on both sides",
          location: "Game 1",
        },
        {
          time: "0:12",
          activity:
            "Rally until ball lands out, doesn't clear net, or double bounces",
          location: "Rallying",
        },
        {
          time: "0:15",
          activity: "Switch serves every 2 points",
          location: "Serve Rotation",
        },
        {
          time: "0:20",
          activity: "First to 11 points wins game (must win by 2)",
          location: "Game Win",
        },
        {
          time: "0:22",
          activity: "Brief break, switch sides",
          location: "Break",
        },
        {
          time: "0:25",
          activity: "Continue match - best of 5 or 7 games",
          location: "Match Play",
        },
        {
          time: "0:45",
          activity: "Match concludes, shake hands",
          location: "Match End",
        },
      ],
    },
    {
      id: "billiards-001",
      name: "Billiards/Pool",
      type: "Cue Sport",
      image:
        "https://images.unsplash.com/photo-1604245887864-6464b38c1916?w=400&h=300&fit=crop",
      ageGroup: "12+",
      difficulty: "Medium",
      duration: "30-90 mins",
      popularity: 4.6,
      description:
        "Precision cue sport played on a felt-covered table with pocketed rails and colored balls.",
      locations: [
        {
          name: "Pool Halls Lagos",
          address: "Various locations (Ikeja, VI, Lekki)",
          price: "₦1,000-₦3,000 per hour",
          ticketPrice: 2000,
          activities: [
            "8-Ball pool",
            "9-Ball pool",
            "Snooker",
            "Practice sessions",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Rack balls in triangle formation for 8-ball",
          location: "Setup",
        },
        {
          time: "0:05",
          activity: "Break shot - hit racked balls with cue ball",
          location: "Break",
        },
        {
          time: "0:08",
          activity: "Determine stripes or solids based on first pocketed ball",
          location: "Assignment",
        },
        {
          time: "0:15",
          activity: "Take turns pocketing your designated balls",
          location: "Gameplay",
        },
        {
          time: "0:20",
          activity: "Call pocket for 8-ball in some variants",
          location: "Strategy",
        },
        {
          time: "0:30",
          activity: "Avoid scratching (cue ball in pocket)",
          location: "Fouls",
        },
        {
          time: "0:40",
          activity: "Pocket all your balls before shooting 8-ball",
          location: "Endgame",
        },
        {
          time: "0:50",
          activity: "Pocket 8-ball in called pocket to win",
          location: "Victory",
        },
        {
          time: "1:00",
          activity: "Rack for next game or conclude session",
          location: "Next Game",
        },
      ],
    },
    {
      id: "checkers-001",
      name: "Checkers",
      type: "Board Game",
      image:
        "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=400&h=300&fit=crop",
      ageGroup: "5+",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.3,
      description:
        "Classic strategy game played on an 8x8 board where players capture opponent pieces by jumping over them.",
      locations: [
        {
          name: "Home Setup",
          address: "Your living room",
          price: "Free",
          ticketPrice: 0,
          equipment: "Checkers set (₦1,500-₦5,000)",
          activities: [
            "Quick matches",
            "Tournament play",
            "Teaching kids",
            "Strategy practice",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up board with 12 pieces each on dark squares",
          location: "Setup",
        },
        {
          time: "0:03",
          activity: "Dark pieces move first diagonally forward",
          location: "Opening",
        },
        {
          time: "0:08",
          activity: "Jump over opponent pieces to capture them",
          location: "Captures",
        },
        {
          time: "0:12",
          activity: "Multi-jump if possible in same turn",
          location: "Multiple Jumps",
        },
        {
          time: "0:18",
          activity: "Reach opposite end to crown piece as king",
          location: "King Me",
        },
        {
          time: "0:22",
          activity: "Kings can move backward and forward",
          location: "King Movement",
        },
        {
          time: "0:28",
          activity: "Capture all opponent pieces or block their moves to win",
          location: "Victory",
        },
      ],
    },
    {
      id: "darts-001",
      name: "Darts",
      type: "Throwing Game",
      image:
        "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
      ageGroup: "10+",
      difficulty: "Medium",
      duration: "20-40 mins",
      popularity: 4.5,
      description:
        "Precision throwing game where players throw small missiles at a circular target mounted on a wall.",
      locations: [
        {
          name: "Home Setup",
          address: "Game room or garage wall",
          price: "Free",
          ticketPrice: 0,
          equipment: "Dartboard and darts (₦5,000-₦20,000)",
          activities: [
            "301/501 games",
            "Cricket",
            "Around the clock",
            "Practice sessions",
          ],
        },
        {
          name: "Sports Bars Lagos",
          address: "Various bars and pubs",
          price: "₦500-₦2,000 per person",
          ticketPrice: 1000,
          activities: [
            "Pub darts",
            "League nights",
            "Tournament play",
            "Social gaming",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Mount dartboard at 5'8\" from floor to bullseye",
          location: "Board Setup",
        },
        {
          time: "0:02",
          activity: "Mark throwing line 7'9.25\" from board face",
          location: "Distance Mark",
        },
        {
          time: "0:05",
          activity: "Practice throws to warm up and calibrate",
          location: "Warm-Up",
        },
        {
          time: "0:08",
          activity: "Choose game - 301, 501, or Cricket",
          location: "Game Selection",
        },
        {
          time: "0:10",
          activity: "Each player starts with set points (301)",
          location: "301 Start",
        },
        {
          time: "0:12",
          activity: "Three darts per turn, subtract total from remaining",
          location: "Turn Structure",
        },
        {
          time: "0:20",
          activity: "Must double out - final dart in double ring",
          location: "Winning Rule",
        },
        {
          time: "0:25",
          activity: "Bust if going below zero or hitting exactly 1",
          location: "Bust Rule",
        },
        {
          time: "0:35",
          activity: "First to exactly zero with double out wins",
          location: "Victory",
        },
      ],
    },
    {
      id: "carrom-001",
      name: "Carrom",
      type: "Board Game",
      image:
        "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=400&h=300&fit=crop",
      ageGroup: "6+",
      difficulty: "Easy",
      duration: "20-40 mins",
      popularity: 4.4,
      description:
        "Tabletop game where players flick a striker to pocket colored pieces into corner pockets.",
      locations: [
        {
          name: "Home Setup",
          address: "Your living room floor or table",
          price: "Free",
          ticketPrice: 0,
          equipment: "Carrom board (₦8,000-₦25,000)",
          activities: [
            "Singles matches",
            "Doubles play",
            "Tournament",
            "Trick shots",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Place board on stable surface, apply carrom powder",
          location: "Setup",
        },
        {
          time: "0:03",
          activity: "Arrange 9 white, 9 black pieces and red queen in center",
          location: "Piece Setup",
        },
        {
          time: "0:07",
          activity: "Choose white or black pieces",
          location: "Color Selection",
        },
        {
          time: "0:10",
          activity: "Flick striker to hit your color pieces into pockets",
          location: "First Shot",
        },
        {
          time: "0:15",
          activity: "Consecutive turns if you pocket your piece",
          location: "Combo Shots",
        },
        {
          time: "0:20",
          activity: "Queen must be pocketed and covered by your piece",
          location: "Queen Rules",
        },
        {
          time: "0:30",
          activity: "First to pocket all pieces and cover queen wins",
          location: "Victory",
        },
        {
          time: "0:35",
          activity: "Score based on opponent remaining pieces",
          location: "Scoring",
        },
      ],
    },
    {
      id: "ludo-001",
      name: "Ludo",
      type: "Board Game",
      image:
        "https://images.unsplash.com/photo-1611890547346-8bbfdcea8d9e?w=400&h=300&fit=crop",
      ageGroup: "4+",
      difficulty: "Easy",
      duration: "20-40 mins",
      popularity: 4.3,
      description:
        "Classic family dice game where players race their four tokens from start to finish around the board.",
      locations: [
        {
          name: "Home Family Game",
          address: "Your living room or dining table",
          price: "Free",
          ticketPrice: 0,
          equipment: "Ludo set (₦1,500-₦5,000)",
          activities: [
            "Family tournaments",
            "2-4 player games",
            "Speed Ludo",
            "Team alliances",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up board, each player chooses color",
          location: "Setup",
        },
        {
          time: "0:02",
          activity: "Place 4 tokens in home base corner",
          location: "Token Placement",
        },
        {
          time: "0:05",
          activity: "Roll die for play order - highest goes first",
          location: "Order",
        },
        {
          time: "0:08",
          activity: "Roll 6 to move token out of base onto start square",
          location: "Entering",
        },
        {
          time: "0:10",
          activity: "After rolling 6, roll again for movement",
          location: "Six Rule",
        },
        {
          time: "0:15",
          activity: "Move clockwise around board per die roll",
          location: "Movement",
        },
        {
          time: "0:18",
          activity: "Land on opponent sends them back to base",
          location: "Capturing",
        },
        {
          time: "0:25",
          activity: "Race to colored home column",
          location: "Home Stretch",
        },
        {
          time: "0:35",
          activity: "First with all 4 tokens in center wins",
          location: "Victory",
        },
      ],
    },
    {
      id: "video-games-001",
      name: "Video Games Console",
      type: "Digital Game",
      image:
        "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Medium",
      duration: "30-120 mins",
      popularity: 4.8,
      description:
        "Modern gaming consoles offering thousands of games from action to sports to puzzles.",
      locations: [
        {
          name: "Home Console Gaming",
          address: "Your living room or bedroom",
          price: "Console cost varies",
          ticketPrice: 0,
          equipment: "PlayStation (₦300k-₦500k), Xbox (₦250k-₦400k)",
          activities: [
            "Single-player campaigns",
            "Local multiplayer",
            "Online gaming",
            "Co-op adventures",
          ],
        },
        {
          name: "Gaming Cafes Lagos",
          address: "Various (Ikeja, Lekki, VI)",
          price: "₦500-₦2,000 per hour",
          ticketPrice: 1500,
          activities: [
            "Latest games",
            "Tournaments",
            "Social gaming",
            "Snacks available",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Power on console, TV, and controllers",
          location: "Setup",
        },
        {
          time: "0:05",
          activity: "Select game - story mode or multiplayer",
          location: "Game Selection",
        },
        {
          time: "0:10",
          activity: "Configure controllers and settings",
          location: "Configuration",
        },
        {
          time: "0:15",
          activity: "Start gameplay - tutorial or jump into action",
          location: "Game Start",
        },
        {
          time: "0:30",
          activity: "Campaign mode - progress through missions",
          location: "Story Mode",
        },
        {
          time: "1:00",
          activity: "Take break - hydrate and rest eyes",
          location: "Break",
        },
        {
          time: "1:10",
          activity: "Continue or switch to different game mode",
          location: "Session 2",
        },
        {
          time: "1:45",
          activity: "Wrap up, save progress",
          location: "Conclusion",
        },
      ],
    },
  ],
  gamesForFemales: [
    {
      id: "just-dance-001",
      name: "Just Dance",
      type: "Music Game",
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Easy",
      duration: "30-60 mins",
      popularity: 4.7,
      description:
        "Interactive dance game that combines fitness with fun music.",
      locations: [
        {
          name: "Home Setup",
          address: "Your Living Room",
          price: "₦20,000-₦30,000",
          ticketPrice: 0,
          equipment: "Game + Console",
          activities: [
            "Dance workouts",
            "Party mode",
            "Solo challenges",
            "Fitness tracking",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Set up console, clear space",
          location: "Setup",
        },
        { time: "0:10", activity: "Warm-up dance", location: "Warm-Up" },
        {
          time: "0:35",
          activity: "Multiplayer dance battle",
          location: "Competition",
        },
        {
          time: "0:50",
          activity: "High-energy cardio session",
          location: "Workout",
        },
        {
          time: "1:00",
          activity: "View scores and calories",
          location: "Results",
        },
      ],
    },
    {
      id: "makeup-challenge-002",
      name: "Makeup Challenge",
      type: "Beauty Game",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop",
      ageGroup: "12+",
      difficulty: "Medium",
      duration: "45 mins",
      popularity: 4.8,
      description:
        "A timed makeover challenge to create creative or celebrity-inspired looks.",
      locations: [
        {
          name: "Salon Lounge",
          address: "Lekki Phase 1, Lagos",
          price: "₦5,000 per person",
          ticketPrice: 5000,
          equipment: "Makeup kits and mirrors",
          activities: [
            "Creative makeup",
            "Style judging",
            "Selfie session",
            "Photo shoot",
          ],
        },
      ],
      itinerary: [
        { time: "0:00", activity: "Set up makeup stations", location: "Salon" },
        { time: "0:10", activity: "Theme announcement", location: "Stage" },
        { time: "0:15", activity: "Makeup competition", location: "Tables" },
        {
          time: "0:45",
          activity: "Final presentation & pictures",
          location: "Gallery",
        },
      ],
    },
    {
      id: "yoga-bliss-003",
      name: "Yoga Bliss",
      type: "Fitness Game",
      image:
        "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1d?w=400&h=300&fit=crop",
      ageGroup: "16+",
      difficulty: "Easy",
      duration: "1 hour",
      popularity: 4.9,
      description:
        "Relaxing yoga session that enhances balance, mindfulness, and flexibility.",
      locations: [
        {
          name: "Outdoor Park",
          address: "Jabi Lake Park, Abuja",
          price: "₦3,000 per person",
          ticketPrice: 3000,
          equipment: "Yoga mats, speakers, water bottles",
          activities: [
            "Stretching",
            "Meditation",
            "Breathing exercises",
            "Relaxation",
          ],
        },
      ],
      itinerary: [
        { time: "0:00", activity: "Warm-up stretching", location: "Field" },
        { time: "0:15", activity: "Breathing exercises", location: "Mat" },
        {
          time: "0:40",
          activity: "Yoga poses & balance drills",
          location: "Group Area",
        },
        {
          time: "1:00",
          activity: "Cool down & meditation",
          location: "Shaded Area",
        },
      ],
    },
    {
      id: "sip-and-paint-004",
      name: "Sip & Paint",
      type: "Creative Game",
      image:
        "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=400&h=300&fit=crop",
      ageGroup: "18+",
      difficulty: "Easy",
      duration: "2 hours",
      popularity: 4.6,
      description: "A relaxed art session with snacks, drinks, and soft music.",
      locations: [
        {
          name: "Art Loft Studio",
          address: "Victoria Island, Lagos",
          price: "₦10,000 per person",
          ticketPrice: 10000,
          equipment: "Paint kits, aprons, canvas",
          activities: [
            "Painting session",
            "Wine tasting",
            "Photo ops",
            "Music",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Get painting kits and drinks",
          location: "Studio",
        },
        {
          time: "0:15",
          activity: "Instructor introduction",
          location: "Stage",
        },
        {
          time: "0:30",
          activity: "Painting & fun conversations",
          location: "Tables",
        },
        {
          time: "1:45",
          activity: "Photo time & display",
          location: "Gallery Wall",
        },
      ],
    },
    {
      id: "fashion-runway-005",
      name: "DIY Fashion Runway",
      type: "Style Game",
      image:
        "https://images.unsplash.com/photo-1520975918318-3a28c3d3c4f0?w=400&h=300&fit=crop",
      ageGroup: "13+",
      difficulty: "Medium",
      duration: "90 mins",
      popularity: 4.5,
      description:
        "Participants design and model outfits using random materials.",
      locations: [
        {
          name: "Event Hall",
          address: "Ikeja, Lagos",
          price: "₦7,000 per team",
          ticketPrice: 7000,
          equipment: "Fabric, scissors, decorations",
          activities: [
            "Outfit creation",
            "Runway walk",
            "Judging",
            "Photo session",
          ],
        },
      ],
      itinerary: [
        { time: "0:00", activity: "Material selection", location: "Workshop" },
        { time: "0:30", activity: "Outfit design", location: "Work Table" },
        { time: "1:00", activity: "Runway showcase", location: "Stage" },
        {
          time: "1:20",
          activity: "Winner announcement",
          location: "Front Stage",
        },
      ],
    },
    {
      id: "karaoke-night-006",
      name: "Karaoke Night",
      type: "Music Game",
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=400&h=300&fit=crop",
      ageGroup: "15+",
      difficulty: "Easy",
      duration: "2 hours",
      popularity: 4.8,
      description:
        "Sing your favorite songs solo or in a group with scores and laughter.",
      locations: [
        {
          name: "Lounge Bar",
          address: "Wuse II, Abuja",
          price: "₦2,500 entry fee",
          ticketPrice: 2500,
          equipment: "Microphones, speakers, playlist screen",
          activities: [
            "Singing competition",
            "Duet battles",
            "Audience voting",
            "Photo time",
          ],
        },
      ],
      itinerary: [
        { time: "0:00", activity: "Select song playlist", location: "Stage" },
        { time: "0:15", activity: "Warm-up performances", location: "Stage" },
        {
          time: "1:00",
          activity: "Solo & group performances",
          location: "Lounge",
        },
        { time: "1:50", activity: "Judging & winner", location: "Stage" },
      ],
    },
    {
      id: "spa-retreat-007",
      name: "DIY Spa Retreat",
      type: "Relaxation Game",
      image:
        "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=300&fit=crop",
      ageGroup: "18+",
      difficulty: "Easy",
      duration: "1 hour",
      popularity: 4.9,
      description:
        "Home or outdoor spa relaxation with facials, massages, and candles.",
      locations: [
        {
          name: "Home or Spa Center",
          address: "Any comfortable spot",
          price: "₦4,000 per person",
          ticketPrice: 4000,
          equipment: "Oils, towels, candles, masks",
          activities: [
            "Facial masks",
            "Manicure & pedicure",
            "Aromatherapy",
            "Tea break",
          ],
        },
      ],
      itinerary: [
        { time: "0:00", activity: "Prepare spa materials", location: "Room" },
        { time: "0:10", activity: "Facial cleansing", location: "Mirror" },
        { time: "0:30", activity: "Massage session", location: "Mat" },
        { time: "1:00", activity: "Tea & relaxation", location: "Lounge" },
      ],
    },
    {
      id: "friendship-quiz-008",
      name: "Friendship Quiz Night",
      type: "Trivia Game",
      image:
        "https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?w=400&h=300&fit=crop",
      ageGroup: "12+",
      difficulty: "Medium",
      duration: "60 mins",
      popularity: 4.4,
      description:
        "Teams of friends answer fun and emotional questions about each other.",
      locations: [
        {
          name: "Indoor Setup",
          address: "Living room or café",
          price: "₦1,500 per group",
          ticketPrice: 1500,
          equipment: "Question cards, buzzer, timer",
          activities: [
            "Trivia rounds",
            "Guess who",
            "Rapid fire",
            "Final scores",
          ],
        },
      ],
      itinerary: [
        { time: "0:00", activity: "Team setup", location: "Table" },
        { time: "0:10", activity: "Round 1: Trivia", location: "Hall" },
        { time: "0:40", activity: "Final quiz", location: "Stage" },
        { time: "0:55", activity: "Score reveal", location: "Board" },
      ],
    },
    {
      id: "cook-off-009",
      name: "Cook-Off Challenge",
      type: "Cooking Game",
      image:
        "https://images.unsplash.com/photo-1600891964091-8ad29b8d76a6?w=400&h=300&fit=crop",
      ageGroup: "15+",
      difficulty: "Medium",
      duration: "2 hours",
      popularity: 4.7,
      description:
        "Fun kitchen competition where participants prepare themed dishes.",
      locations: [
        {
          name: "Outdoor Kitchen",
          address: "Private backyard or event center",
          price: "₦6,000 per person",
          ticketPrice: 6000,
          equipment: "Cooking utensils, ingredients",
          activities: [
            "Ingredient selection",
            "Cooking challenge",
            "Tasting",
            "Prize awards",
          ],
        },
      ],
      itinerary: [
        { time: "0:00", activity: "Ingredient setup", location: "Kitchen" },
        {
          time: "0:30",
          activity: "Cooking challenge",
          location: "Cook Station",
        },
        {
          time: "1:45",
          activity: "Tasting & scoring",
          location: "Judge Table",
        },
        { time: "2:00", activity: "Winner reveal", location: "Stage" },
      ],
    },
    {
      id: "picnic-escape-010",
      name: "Picnic Escape",
      type: "Outdoor Game",
      image:
        "https://images.unsplash.com/photo-1621609771181-2d5b1e3e9cb2?w=400&h=300&fit=crop",
      ageGroup: "All Ages",
      difficulty: "Easy",
      duration: "3 hours",
      popularity: 4.9,
      description:
        "A relaxing group picnic with music, snacks, and outdoor mini-games.",
      locations: [
        {
          name: "Leisure Park",
          address: "Lekki Conservation Centre",
          price: "₦5,000 entry fee",
          ticketPrice: 5000,
          equipment: "Mats, food, speakers, games",
          activities: [
            "Outdoor music",
            "Snacks",
            "Lawn games",
            "Relaxation time",
          ],
        },
      ],
      itinerary: [
        {
          time: "0:00",
          activity: "Arrive & set up mats",
          location: "Picnic Spot",
        },
        { time: "0:30", activity: "Play board/lawn games", location: "Field" },
        {
          time: "1:30",
          activity: "Eat & share snacks",
          location: "Table Area",
        },
        {
          time: "2:30",
          activity: "Relax & take pictures",
          location: "Shade Spot",
        },
      ],
    },
  ],
};

// Utility function to get game with itinerary by slug
export const getGameWithItinerary = (slug) => {
  const allGames = [
    ...gamesData.indoorGames,
    ...gamesData.outdoorGames,
    ...gamesData.familyGames,
    ...gamesData.gamesForKids,
    ...gamesData.gamesForMales,
    ...gamesData.gamesForFemales,
  ];

  const game = allGames.find(
    (g) => g.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
  );

  if (!game) return null;

  return {
    title: game.name,
    type: game.type,
    description: `${
      game.name
    } is a ${game.type.toLowerCase()} suitable for ages ${game.ageGroup}. ${
      game.difficulty
    } difficulty level with an average duration of ${
      game.duration
    }. Perfect for ${game.locationAvailability}.`,
    image: game.image,
    duration: game.duration,
    locations: game.locations,
    itinerary: game.itinerary,
    ageGroup: game.ageGroup,
    difficulty: game.difficulty,
    popularity: game.popularity,
  };
};

export { getCategoryIcon, getGameIcon, gamesData };
