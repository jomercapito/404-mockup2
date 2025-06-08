import React from "react";
import { Menu, User } from "lucide-react";
import "./navbar.css";
import ticketIcon from "../assets/images/logos/ticket-icon.png";
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
            <img
              src={ticketIcon}
              alt="Events Ticket Icon"
              className="event-icon"
            />
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
