import React from "react";
import { Menu, User } from "lucide-react";
import "./navbar.css";
import groupLogo from "../assets/images/logos/Group.png";
import rcaLogo from "../assets/images/logos/rca-logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <img src={rcaLogo} alt="Logo" />
          </li>
          <li>
            <img src={groupLogo} alt="Logo" className="event-icon" />
            <span className="event-label">Events</span>
          </li>
          <li className="menu-user-button">
            <Menu class="icon" />
            <User class="icon" />
          </li>
        </ul>
      </nav>
      {/* </div> */}
    </>
  );
};

export default Navbar;
