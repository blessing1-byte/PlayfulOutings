import React, { forwardRef } from "react";
import "./input.css"; // External CSS file

const Input = forwardRef(({ className = "", type = "text", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={`custom-input ${className}`}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
