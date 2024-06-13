import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [openAndCloseNavbar, setOpenAndCloseNavbar] = useState(false);
  return (
    <div className="navbar">
      <div className="myName">
        <div className="myName-box"></div>
        <p>vikcy</p>
      </div>
      <div className="navbar-links">
        <button onClick={() => setOpenAndCloseNavbar(true)}>Menu</button>
        <ul style={openAndCloseNavbar ? { top: "0%" } : { top: "-100%" }}>
          <button onClick={() => setOpenAndCloseNavbar(false)}>close</button>
          <li>
            <div>
              <a href="#Home">Home</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#Aboutme">About me</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#projects">projects</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
