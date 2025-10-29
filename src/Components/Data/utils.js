import { gamesData } from "./gameData.js";
import { itineraryData } from "./itineraryData.js";

// Merge game data with itinerary data
export function getGameWithItinerary(category, gameName) {
  const gameInfo =
    gamesData[category]?.find((game) => game.name === gameName) || null;

  const itineraryInfo =
    itineraryData.games?.[category]?.[gameName] ||
    itineraryData.slugs?.[gameName.toLowerCase().replace(/\s+/g, "-")] ||
    null;

  return {
    ...gameInfo,
    ...(itineraryInfo || {}),
  };
}
