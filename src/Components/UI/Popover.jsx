import React, { useState, useRef, useEffect } from "react";
import "./Popover.css";

export function Popover({ children }) {
  return <div className="popover">{children}</div>;
}

export function PopoverTrigger({ children }) {
  return <>{children}</>;
}

export function PopoverContent({ children, align = "center", sideOffset = 4 }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Toggle popover open/close
  const handleToggle = () => setOpen((prev) => !prev);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="popover-container" ref={ref}>
      <button className="popover-trigger" onClick={handleToggle}>
        Toggle Popover
      </button>

      {open && (
        <div
          className={`popover-content align-${align}`}
          style={{ marginTop: sideOffset }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
