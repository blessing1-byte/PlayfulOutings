import React from "react";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../CSS/Footer.css";
import EmailInput from "../UI/EmailInput";
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="Us">
          <div className="logo">
            <h2 className="logo_text">PlayfulOutings</h2>
          </div>
          <div className="aboutUs">
            <h3 className="thirdLevelHeader">About Us</h3>
            <p>talk about what you do </p>
          </div>
          <div className="contactUs">
            <h3 className="thirdLevelHeader">Contact Us</h3>
            <ul>
              <li>
                <div className="contact">
                  <BsFillTelephoneInboundFill className="icon " />
                  +91 9999 999 999
                </div>
              </li>
              <li>
                <div className="contact">
                  <MdEmail className="icon " /> PlayfulOutings12@gmail.com
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="information">
          <h3 className="thirdLevelHeader">Information</h3>
          <ul>
            <li>About Us</li>
            <li>More Search</li>
            <li>Itinirerary</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="Helpful_links">
          <h3 className="thirdLevelHeader">Helpful Links</h3>
          <ul>
            <li>Services</li>
            <li>Supports</li>
            <li>Terms and conditions</li>
            <li>Privacy policies</li>
          </ul>
        </div>
        <div className="subscription">
          <h3>Subscribe More Info</h3>
          <div className="email_input">
            <EmailInput />
          </div>
          <button>Subscribe</button>
        </div>
      </footer>
    </div>
  );
}
