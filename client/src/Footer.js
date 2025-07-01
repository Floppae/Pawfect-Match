import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footercontainer">
        <div className="footercontent">
          <div className="footersection">
            <h2><i className="fas fa-paw"></i> The Pawfect Match</h2>
            <p>Taking steps to make pet adoption an easy process.</p>
          </div>

          <div className="footersection quicklinks">
            <h2>Quick Links</h2>
            <ul>
                <li><Link to="/">Find Pets</Link></li>
                <li><Link to="/contact">Volunteer</Link></li>
                <li><Link to="/contact">Donate</Link></li>
            </ul>
          </div>

          <div className="footersection">
            <h2>Contact Us</h2>
            <p><i className="fas fa-envelope"></i> info@pawfectmatch.com</p>
            <p><i className="fas fa-phone"></i> (123) 456-7890</p>
          </div>
        </div>

        <div className="endtext">
          <p>&copy; 2025 PawMatch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
