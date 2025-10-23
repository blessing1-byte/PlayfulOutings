import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getGameWithItinerary } from "../Data/utils";

export default function ItineraryDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const game = getGameWithItinerary(slug);

  if (!game)
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold text-gray-700">
          Itinerary not found 😕
        </h2>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Go Back
        </button>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      <img
        src={game.image}
        alt={game.title}
        className="rounded-xl w-full h-64 object-cover shadow-md"
      />
      <h1 className="text-3xl font-bold text-orange-500 mt-6">{game.title}</h1>
      <p className="text-gray-700 mt-3 text-lg">{game.description}</p>

      <div className="mt-4 flex gap-3 flex-wrap">
        <span
          className={`text-white px-4 py-2 rounded-full text-sm font-semibold ${
            game.type === "Indoor" ? "bg-sky-500" : "bg-green-500"
          }`}
        >
          {game.type || "Activity"}
        </span>
        <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
          Duration: {game.duration}
        </span>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Locations</h2>
        {game.locations?.map((loc, index) => (
          <div key={index} className="mb-6 border rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold">{loc.name}</h3>
            <p className="text-sm text-gray-600">{loc.address}</p>
            <p className="mt-2 font-medium text-gray-800">{loc.price}</p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {loc.activities.map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Itinerary Schedule</h2>
        {game.itinerary?.map((day, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-orange-600">{day.day}</h3>
            <ul className="mt-2 space-y-1 text-gray-700">
              {day.schedule.map((item, i) => (
                <li key={i}>
                  <strong>{item.time}:</strong> {item.activity} ({item.location}
                  )
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-10 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
      >
        Back to Home
      </button>
    </div>
  );
}
