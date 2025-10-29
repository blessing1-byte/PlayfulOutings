import React from "react";
import "../CSS/Badge.css";

/**
 * Badge Component
 * Props:
 * - variant: "default" | "secondary" | "destructive" | "outline"
 * - children: text or elements inside badge
 * - className: optional custom CSS class
 */
export const Badge = ({
  variant = "default",
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`badge badge-${variant} ${className}`} {...props}>
      {children}
    </div>
  );
};
