import React from "react";
import { Menu, User } from "lucide-react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="hero-image">
        <nav className="navbar">
          <div className="logo">
            <img src="/rca-logo.png" alt="Logo" />
          </div>
          <div className="event-card">
            <img src="/Group.png" className="event-icon" />
            <span className="event-label">Events</span>
          </div>
          <div className="menu-user-button">
            <Menu class="icon" />
            <User class="icon" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
