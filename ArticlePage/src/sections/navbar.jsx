import React from "react";
import { Menu, User } from "lucide-react";
import "./navbar.css";
import GroupLogo from "../assets/images/logos/Group.png";

const Navbar = () => {
  return (
    <>
      <div className="hero-image">
        <nav className="navbar">
          <div className="logo">
            <img src="/rca-logo.png" alt="Logo" />
          </div>
          <div className="event-card">
            <img src={GroupLogo} className="event-icon" />
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
