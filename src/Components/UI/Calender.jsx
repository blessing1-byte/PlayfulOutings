import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./Calendar.css"; // External styling

function Calendar({ className = "", showOutsideDays = true, ...props }) {
  return (
    <div className={`calendar-wrapper ${className}`}>
      <DayPicker
        showOutsideDays={showOutsideDays}
        className="custom-calendar"
        {...props}
      />
    </div>
  );
}

export default Calendar;
