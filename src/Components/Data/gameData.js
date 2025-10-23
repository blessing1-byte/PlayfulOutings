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
const gamesData = {
  indoorGames: [
    {
      name: "Chess",
      type: "Board Game",
      image:
        "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Medium",
      duration: "30-60 mins",
      popularity: 4.7,
      locationAvailability: "Living room, Game room, Study",
      itinerary: "Set up board, explain rules, play tournament style",
    },
    {
      name: "Scrabble",
      type: "Word Game",
      image:
        "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&h=300&fit=crop",
      ageGroup: "10+",
      difficulty: "Easy",
      duration: "60-90 mins",
      popularity: 4.5,
      locationAvailability: "Dining table, Living room, Game room",
      itinerary: "Draw tiles, form words, track scores, declare winner",
    },
    {
      name: "Monopoly",
      type: "Board Game",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Easy",
      duration: "60-180 mins",
      popularity: 4.3,
      locationAvailability: "Dining table, Living room, Game room",
      itinerary:
        "Distribute money, roll dice, buy properties, trade, bankrupt opponents",
    },
    {
      name: "Cards (Poker)",
      type: "Card Game",
      image:
        "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=400&h=300&fit=crop",
      ageGroup: "12+",
      difficulty: "Medium",
      duration: "30-120 mins",
      popularity: 4.6,
      locationAvailability: "Dining table, Game room, Living room",
      itinerary: "Shuffle deck, deal cards, place bets, reveal hands, settle",
    },
    {
      name: "Jenga",
      type: "Physical Game",
      image:
        "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=400&h=300&fit=crop",
      ageGroup: "6+",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.4,
      locationAvailability: "Coffee table, Dining table, Floor",
      itinerary: "Stack blocks, take turns removing, avoid toppling tower",
    },
    {
      name: "Table Tennis",
      type: "Sport",
      image:
        "https://images.unsplash.com/photo-1534158914592-062992fbe900?w=400&h=300&fit=crop",
      ageGroup: "7+",
      difficulty: "Easy",
      duration: "20-45 mins",
      popularity: 4.6,
      locationAvailability: "Game room, Basement, Recreation center",
      itinerary: "Warm up, serve, rally, play to 11 points, switch sides",
    },
    {
      name: "Billiards/Pool",
      type: "Sport",
      image:
        "https://images.unsplash.com/photo-1626315869436-effb3a7eae40?w=400&h=300&fit=crop",
      ageGroup: "10+",
      difficulty: "Medium",
      duration: "30-60 mins",
      popularity: 4.5,
      locationAvailability: "Game room, Basement, Pool hall",
      itinerary: "Rack balls, break, take turns pocketing, sink 8-ball last",
    },
    {
      name: "Checkers",
      type: "Board Game",
      image:
        "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=400&h=300&fit=crop",
      ageGroup: "5+",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.2,
      locationAvailability: "Living room, Dining table, Game room",
      itinerary: "Set up pieces, move diagonally, jump opponents, king pieces",
    },
    {
      name: "Darts",
      type: "Target Game",
      image:
        "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=400&h=300&fit=crop",
      ageGroup: "10+",
      difficulty: "Easy",
      duration: "20-40 mins",
      popularity: 4.3,
      locationAvailability: "Game room, Basement, Bar area",
      itinerary: "Set distance, throw darts, count scores, play 301 or cricket",
    },
    {
      name: "Carrom",
      type: "Board Game",
      image:
        "https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=400&h=300&fit=crop",
      ageGroup: "6+",
      difficulty: "Easy",
      duration: "20-40 mins",
      popularity: 4.4,
      locationAvailability: "Living room, Game room, Floor",
      itinerary:
        "Place striker, flick pieces into pockets, sink queen, win round",
    },
    {
      name: "Ludo",
      type: "Board Game",
      image:
        "https://images.unsplash.com/photo-1611890547346-8bbfdcea8d9e?w=400&h=300&fit=crop",
      ageGroup: "4+",
      difficulty: "Easy",
      duration: "20-40 mins",
      popularity: 4.3,
      locationAvailability: "Living room, Dining table, Floor",
      itinerary: "Roll dice, move tokens, race to home, block opponents",
    },
    {
      name: "Video Games Console",
      type: "Digital Game",
      image:
        "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Medium",
      duration: "30-120 mins",
      popularity: 4.8,
      locationAvailability: "Living room, Bedroom, Game room",
      itinerary: "Choose game, set controllers, play campaign or multiplayer",
    },
  ],

  outdoorGames: [
    {
      name: "Football/Soccer",
      type: "Team Sport",
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=300&fit=crop",
      ageGroup: "6+",
      difficulty: "Medium",
      duration: "60-90 mins",
      popularity: 4.9,
      locationAvailability: "Field, Park, Stadium, School ground",
      itinerary: "Warm up, divide teams, play halves, track scores, cooldown",
    },
    {
      name: "Basketball",
      type: "Team Sport",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Medium",
      duration: "30-60 mins",
      popularity: 4.7,
      locationAvailability: "Court, Park, Driveway, School gym",
      itinerary: "Warm up, shoot around, play quarters, track fouls and scores",
    },
    {
      name: "Cricket",
      type: "Team Sport",
      image:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Medium",
      duration: "60-180 mins",
      popularity: 4.8,
      locationAvailability: "Cricket field, Park, School ground, Street",
      itinerary:
        "Toss coin, bat first, bowl overs, switch innings, declare winner",
    },
    {
      name: "Tennis",
      type: "Racket Sport",
      image:
        "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=300&fit=crop",
      ageGroup: "7+",
      difficulty: "Medium",
      duration: "60-120 mins",
      popularity: 4.6,
      locationAvailability: "Tennis court, Park, Recreation center",
      itinerary:
        "Warm up, serve, play sets, switch sides, track games and points",
    },
    {
      name: "Volleyball",
      type: "Team Sport",
      image:
        "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&h=300&fit=crop",
      ageGroup: "10+",
      difficulty: "Easy",
      duration: "30-60 mins",
      popularity: 4.5,
      locationAvailability: "Beach, Court, Park, School gym",
      itinerary:
        "Set up net, warm up, serve, rotate positions, play to 25 points",
    },
    {
      name: "Badminton",
      type: "Racket Sport",
      image:
        "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=300&fit=crop",
      ageGroup: "6+",
      difficulty: "Easy",
      duration: "30-60 mins",
      popularity: 4.5,
      locationAvailability: "Court, Backyard, Park, Recreation center",
      itinerary:
        "Set up net, warm up rallies, serve, play to 21 points per set",
    },
    {
      name: "Frisbee",
      type: "Throwing Game",
      image:
        "https://images.unsplash.com/photo-1592656094267-764a45160876?w=400&h=300&fit=crop",
      ageGroup: "5+",
      difficulty: "Easy",
      duration: "20-60 mins",
      popularity: 4.4,
      locationAvailability: "Park, Beach, Open field, Backyard",
      itinerary:
        "Mark boundaries, throw and catch, play ultimate or casual toss",
    },
    {
      name: "Tag/Chase",
      type: "Running Game",
      image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop",
      ageGroup: "3+",
      difficulty: "Easy",
      duration: "15-45 mins",
      popularity: 4.3,
      locationAvailability: "Park, Playground, Backyard, School ground",
      itinerary: "Choose tagger, set boundaries, run and chase, switch roles",
    },
    {
      name: "Hide and Seek",
      type: "Stealth Game",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop",
      ageGroup: "4+",
      difficulty: "Easy",
      duration: "20-60 mins",
      popularity: 4.5,
      locationAvailability: "Park, Backyard, Neighborhood, Playground",
      itinerary: "Choose seeker, count to 20, hide, seek, tag found players",
    },
    {
      name: "Capture the Flag",
      type: "Strategy Game",
      image:
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Medium",
      duration: "30-60 mins",
      popularity: 4.6,
      locationAvailability: "Large park, Field, Forest, School ground",
      itinerary:
        "Divide teams, hide flags, raid territory, capture flag, return safely",
    },
    {
      name: "Dodgeball",
      type: "Team Sport",
      image:
        "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Easy",
      duration: "20-40 mins",
      popularity: 4.4,
      locationAvailability: "Gym, Court, Playground, School ground",
      itinerary:
        "Divide teams, place balls center, throw to eliminate, last team wins",
    },
    {
      name: "Cycling",
      type: "Individual Sport",
      image:
        "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=400&h=300&fit=crop",
      ageGroup: "5+",
      difficulty: "Easy",
      duration: "30-120 mins",
      popularity: 4.7,
      locationAvailability: "Park, Trail, Road, Neighborhood",
      itinerary: "Check bike, wear helmet, plan route, ride, cool down stretch",
    },
  ],

  familyGames: [
    {
      name: "Uno",
      type: "Card Game",
      image:
        "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=300&fit=crop",
      ageGroup: "7+",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.7,
      locationAvailability: "Dining table, Living room, Anywhere indoors",
      itinerary:
        "Deal cards, match color or number, use action cards, first to empty wins",
    },
    {
      name: "Pictionary",
      type: "Drawing Game",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Easy",
      duration: "30-60 mins",
      popularity: 4.6,
      locationAvailability: "Living room, Dining room, Game room",
      itinerary:
        "Divide teams, draw card, sketch clue, teammates guess, rotate turns",
    },
    {
      name: "Charades",
      type: "Acting Game",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop",
      ageGroup: "6+",
      difficulty: "Easy",
      duration: "30-60 mins",
      popularity: 4.5,
      locationAvailability: "Living room, Any open space indoors",
      itinerary:
        "Pick card, act out word, no speaking, teammates guess, track points",
    },
    {
      name: "Scattergories",
      type: "Word Game",
      image:
        "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=300&fit=crop",
      ageGroup: "12+",
      difficulty: "Medium",
      duration: "30-45 mins",
      popularity: 4.4,
      locationAvailability: "Dining table, Living room, Game room",
      itinerary:
        "Roll letter die, set timer, list unique answers, compare, score",
    },
    {
      name: "Clue/Cluedo",
      type: "Mystery Game",
      image:
        "https://images.unsplash.com/photo-1606503153255-59d28de0c9bb?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Medium",
      duration: "45-90 mins",
      popularity: 4.5,
      locationAvailability: "Dining table, Game room, Living room",
      itinerary: "Deal cards, move rooms, make suggestions, deduce murderer",
    },
    {
      name: "Twister",
      type: "Physical Game",
      image:
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400&h=300&fit=crop",
      ageGroup: "6+",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.4,
      locationAvailability: "Living room, Game room, Any open floor space",
      itinerary:
        "Lay mat, spin wheel, place limbs on colors, last standing wins",
    },
    {
      name: "Bingo",
      type: "Number Game",
      image:
        "https://images.unsplash.com/photo-1611890717449-0f427ac5fc82?w=400&h=300&fit=crop",
      ageGroup: "5+",
      difficulty: "Easy",
      duration: "20-40 mins",
      popularity: 4.3,
      locationAvailability: "Dining table, Living room, Community hall",
      itinerary:
        "Distribute cards, call numbers, mark matches, shout bingo for line",
    },
    {
      name: "Trivial Pursuit",
      type: "Trivia Game",
      image:
        "https://images.unsplash.com/photo-1606503153255-59d28de0c9bb?w=400&h=300&fit=crop",
      ageGroup: "12+",
      difficulty: "Medium",
      duration: "60-120 mins",
      popularity: 4.5,
      locationAvailability: "Dining table, Living room, Game room",
      itinerary:
        "Roll dice, answer questions, collect wedges, reach center, win",
    },
    {
      name: "Snakes and Ladders",
      type: "Board Game",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop",
      ageGroup: "3+",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.2,
      locationAvailability: "Floor, Dining table, Living room",
      itinerary:
        "Roll dice, climb ladders, slide down snakes, first to 100 wins",
    },
    {
      name: "Family Karaoke",
      type: "Music Game",
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop",
      ageGroup: "5+",
      difficulty: "Easy",
      duration: "30-90 mins",
      popularity: 4.6,
      locationAvailability: "Living room, Entertainment room, Anywhere with TV",
      itinerary:
        "Set up system, choose songs, sing performances, vote best singer",
    },
    {
      name: "Connect Four",
      type: "Strategy Game",
      image:
        "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&h=300&fit=crop",
      ageGroup: "6+",
      difficulty: "Easy",
      duration: "10-15 mins",
      popularity: 4.3,
      locationAvailability: "Table, Living room, Anywhere flat surface",
      itinerary:
        "Take turns dropping discs, try to connect four, block opponent",
    },
    {
      name: "Boggle",
      type: "Word Game",
      image:
        "https://images.unsplash.com/photo-1611890717449-0f427ac5fc82?w=400&h=300&fit=crop",
      ageGroup: "8+",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.2,
      locationAvailability: "Dining table, Living room, Game room",
      itinerary:
        "Shake board, set timer, find words, compare lists, score unique words",
    },
  ],

  gamesForKids: [
    {
      name: "Musical Chairs",
      type: "Party Game",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
      ageGroup: "3-10",
      difficulty: "Easy",
      duration: "10-20 mins",
      popularity: 4.5,
      locationAvailability: "Living room, Party hall, Playground, Classroom",
      itinerary:
        "Arrange chairs, play music, walk around, sit when music stops",
    },
    {
      name: "Duck Duck Goose",
      type: "Circle Game",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
      ageGroup: "3-8",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.3,
      locationAvailability: "Playground, Park, Gym, Living room",
      itinerary: "Sit in circle, tap heads saying duck, say goose and chase",
    },
    {
      name: "Simon Says",
      type: "Following Game",
      image:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop",
      ageGroup: "3-10",
      difficulty: "Easy",
      duration: "10-20 mins",
      popularity: 4.4,
      locationAvailability: "Classroom, Living room, Park, Anywhere",
      itinerary:
        "Leader gives commands, only follow if Simon says, eliminate mistakes",
    },
    {
      name: "Red Light Green Light",
      type: "Running Game",
      image:
        "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=300&fit=crop",
      ageGroup: "4-10",
      difficulty: "Easy",
      duration: "10-20 mins",
      popularity: 4.4,
      locationAvailability: "Playground, Park, Backyard, Gym",
      itinerary:
        "Line up players, call green light to run, red light to freeze",
    },
    {
      name: "Freeze Dance",
      type: "Dance Game",
      image:
        "https://images.unsplash.com/photo-1545224144-b38cd309ef69?w=400&h=300&fit=crop",
      ageGroup: "3-8",
      difficulty: "Easy",
      duration: "10-20 mins",
      popularity: 4.3,
      locationAvailability: "Living room, Party hall, Classroom, Gym",
      itinerary:
        "Play music, dance freely, freeze when music stops, eliminate movers",
    },
    {
      name: "Hot Potato",
      type: "Passing Game",
      image:
        "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=300&fit=crop",
      ageGroup: "4-10",
      difficulty: "Easy",
      duration: "10-15 mins",
      popularity: 4.2,
      locationAvailability:
        "Living room, Circle seating, Classroom, Party hall",
      itinerary:
        "Sit in circle, pass object quickly, stop music randomly, holder is out",
    },
    {
      name: "Memory/Matching Game",
      type: "Card Game",
      image:
        "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=300&fit=crop",
      ageGroup: "3-8",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.4,
      locationAvailability: "Table, Floor, Living room, Classroom",
      itinerary:
        "Lay cards face down, flip two cards, match pairs, most pairs wins",
    },
    {
      name: "Candy Land",
      type: "Board Game",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop",
      ageGroup: "3-6",
      difficulty: "Easy",
      duration: "15-30 mins",
      popularity: 4.3,
      locationAvailability: "Floor, Table, Living room, Playroom",
      itinerary:
        "Draw cards, move to matching color, follow shortcuts, reach castle",
    },
    {
      name: "Balloon Pop Relay",
      type: "Party Game",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
      ageGroup: "5-12",
      difficulty: "Easy",
      duration: "15-25 mins",
      popularity: 4.5,
      locationAvailability: "Backyard, Party hall, Gym, Park",
      itinerary: "Divide teams, race with balloon, pop at finish, relay back",
    },
    {
      name: "Treasure Hunt",
      type: "Adventure Game",
      image:
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=400&h=300&fit=crop",
      ageGroup: "5-12",
      difficulty: "Medium",
      duration: "30-60 mins",
      popularity: 4.7,
      locationAvailability: "House, Backyard, Park, Party venue",
      itinerary:
        "Hide clues, distribute maps, solve riddles, find treasure location",
    },
    {
      name: "Jump Rope",
      type: "Physical Game",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
      ageGroup: "5-12",
      difficulty: "Easy",
      duration: "10-30 mins",
      popularity: 4.3,
      locationAvailability: "Playground, Driveway, Park, Backyard",
      itinerary:
        "Swing rope, jump in rhythm, add tricks, count consecutive jumps",
    },
    {
      name: "Coloring Contest",
      type: "Art Activity",
      image:
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
      ageGroup: "3-10",
      difficulty: "Easy",
      duration: "20-40 mins",
      popularity: 4.2,
      locationAvailability: "Table, Classroom, Living room, Art room",
      itinerary: "Distribute coloring sheets and crayons to all participants.",
    },
  ],
};
export { getCategoryIcon, getGameIcon, gamesData };
