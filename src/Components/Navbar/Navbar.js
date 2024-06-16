import React, { useState } from "react";
import "./Navbar.css";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [openclosenavbar, setopenclosenavbar] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h3>vicky</h3>
      </div>
      <div
        className="navbar-links"
        style={openclosenavbar ? { top: "0" } : { top: "-390px" }}
      >
        <button
          className="closeNavbar"
          onClick={() => setopenclosenavbar(false)}
        >
          <IoClose className="navbar-icons" />
        </button>
        <ul>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about me</a>
          </li>
          <li>
            <a href="./project">project</a>
          </li>
          <li>
            <a href="./contact">contact</a>
          </li>
        </ul>
      </div>
      <div className="menuDiv">
        <button onClick={() => setopenclosenavbar(true)}>
          <RiMenu3Line className="navbar-icons" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
