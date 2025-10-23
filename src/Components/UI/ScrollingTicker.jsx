import React, { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import "../CSS/ScrollingTicker.css"; // import your external CSS

const ScrollingTicker = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState("Loading location...");
  const [visitorCount, setVisitorCount] = useState(1247);

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetch(
            ` https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en
          `
          )
            .then((res) => res.json())
            .then((data) => {
              setLocation(
                `${data.city || data.locality || "Unknown"}, ${
                  data.countryName || ""
                }`
              );
            })
            .catch(() => {
              setLocation("Location unavailable");
            });
        },
        () => {
          setLocation("Location unavailable");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }

    // Simulate visitor count increment
    const visitorTimer = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 10000);

    return () => {
      clearInterval(timer);
      clearInterval(visitorTimer);
    };
  }, []);

  return (
    <div>
      {/* Scrolling ticker */}
      <div className="ticker">
        <div className="marquee">
          <span className="ticker-item">
            📅{" "}
            {currentTime.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="ticker-item">
            ⏰ {currentTime.toLocaleTimeString("en-US")}
          </span>
          <span className="ticker-item">📍 {location}</span>
          <span className="ticker-item">
            <Eye className="icon" /> Visitors: {visitorCount.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-text">
          <p>
            © {new Date().getFullYear()} PlayfulOutings. All rights reserved.
          </p>
          <p className="tagline">Making every outing memorable since 2025</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollingTicker;
