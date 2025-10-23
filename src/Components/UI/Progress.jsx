import React from "react";
import "./Progress.css";

const Progress = React.forwardRef(
  ({ value = 0, className = "", ...props }, ref) => {
    return (
      <div ref={ref} className={`progress-root ${className}`} {...props}>
        <div
          className="progress-indicator"
          style={{ transform: `translateX(-${100 - value}%)` }}
        />
      </div>
    );
  }
);

Progress.displayName = "Progress";

export { Progress };
