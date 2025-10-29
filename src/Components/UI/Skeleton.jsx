import React from "react";
import "./Skeleton.css";

function Skeleton({ className = "", ...props }) {
  return <div className={`skeleton ${className}`} {...props}></div>;
}

export default Skeleton;
