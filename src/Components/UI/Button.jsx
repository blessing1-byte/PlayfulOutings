import React from "react";
import "../CSS/Button.css";

export function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) {
  const classes = `btn ${variant} ${size} ${className}`;
  return (
    <button className={classes.trim()} {...props}>
      {children}
    </button>
  );
}
