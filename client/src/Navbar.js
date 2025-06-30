import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav>
      <div className="logo">
       <img src={logo} alt="Pawfect Match Logo" className="logo-img" />
        <span className="logo-text">Pawfect Match</span>
      </div>

        <ul className={`navbar ${menuOpen ? "responsive" : ""}`}>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)} >
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setMenuOpen(false)}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>
          </li>
        </ul>

        <div className="hamburgermenu" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>
    </header>
  );
}