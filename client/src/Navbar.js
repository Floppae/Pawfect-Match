import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav>
        <div className="logo">🐾 Pawfect Match</div>

        <ul className={`navbar ${menuOpen ? "responsive" : ""}`}>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              ABOUT
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