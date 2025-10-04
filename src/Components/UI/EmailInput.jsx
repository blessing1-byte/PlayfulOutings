import React from "react";
import { MdEmail } from "react-icons/md";
// import "../src/App.css";
export default function EmailInput() {
  return (
    <div className="email_input">
      <MdEmail className="subscribe_email" />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
      />
    </div>
  );
}
