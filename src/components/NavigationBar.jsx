import React, { useState } from "react";
import "./NavigationBar.css";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="highlight">Co</span>desk
      </div>

      {/* Hamburger Menu */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className="active">Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Workspace</li>
        <li>Testimonials</li>
        {/* <li className="mobile-book-now">Book Now</li> */}
      </ul>

      {/* Book Now button (visible on larger screens) */}
      <button className="book-now">Book Now</button>
    </nav>
  );
}
