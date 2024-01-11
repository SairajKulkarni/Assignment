// Navbar.js

import React, { useState } from "react";
import "./NavbarStyles.css";
import logo from "../../images/logo.png";
import { FaPhone } from "react-icons/fa6";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  // Define options
  const menuItems = [
    "Home",
    "Dissertation",
    "CourseWork Help",
    "Research Paper Help",
    "Dissertation Topics",
    "Dissertation Examples",
    "Dissertation Structure",
    "Essay Help",
    "PhD Proposal",
    "PhD Thesis",
    "Assignment Help",
    "Blog",
  ];

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div className="brand-name">Projectsdeal</div>
      </div>

      <div className="additional-info">
        <p className="info-text">
          No. 1 Dissertation Writing Services in UK,{" "}
          <span className="year">Since 2001!</span>
        </p>
        <button className="call-button">
          <FaPhone className="phone-icon" />
          <a href="">Call +44 20 32900046</a>
        </button>
      </div>

      <div className="drawer-icon" onClick={toggleDrawer}>
        ☰
      </div>

      {showDrawer && (
        <div className="drawer">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Display options below navbar for laptops */}
      <div className="options-container">
        {menuItems.map((item, index) => (
          <div key={index} className="option">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
