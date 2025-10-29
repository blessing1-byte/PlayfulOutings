import React, { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import "../CSS/VisitorsCounter.css";

export default function VisitorsCounter() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // ✅ Load the stored visitor count or start at 1247
    let count = parseInt(localStorage.getItem("visitorCount"), 10);
    if (isNaN(count)) count = 1247;

    setVisits(count);

    // ✅ Increment only once per session initially
    if (!sessionStorage.getItem("hasVisitedThisSession")) {
      count += 1;
      localStorage.setItem("visitorCount", count);
      setVisits(count);
      sessionStorage.setItem("hasVisitedThisSession", "true");
    }

    const visitorTimer = setInterval(() => {
      const newCount = count + Math.floor(Math.random() * 3);
      count = newCount;
      localStorage.setItem("visitorCount", newCount);
      setVisits(newCount);
    }, 10000);

    const handleStorageChange = (e) => {
      if (e.key === "visitorCount") {
        const updated = parseInt(e.newValue, 10);
        if (!isNaN(updated)) setVisits(updated);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      clearInterval(visitorTimer);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="visitor-counter">
      <Eye className="icon" />
      <span>{visits.toLocaleString()} visits</span>
    </div>
  );
}
