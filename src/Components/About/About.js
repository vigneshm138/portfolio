import React from "react";
import "./About.css";
import aboutImg from "./aboutImg.png";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>About me</h1>
      <div className="about-div">
        <div className="about-img">
          <img src={aboutImg} alt="aboutImg" />
        </div>
        <div>
          <div>
            <p>
              --- Passionate about creating Web Pages with UI/UX, User
              Interface,familiar with frameworks, databases, version control,
              and API integration. ---
            </p>
            <p>
              <span>My Skills Are : </span> HTML, CSS, JavaScript, React, Git &
              GitHub, Bootstrap, Node, MongoDB.
            </p>
          </div>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/vignesh138" target="_blank"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
