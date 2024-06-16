import React from "react";
import "./About.css";
import aboutImg from "./aboutImg.png";
const About = () => {
  return (
    <div className="about" id="about">
      <h1>About me</h1>
      <div className="about-div">
        <div className="about-img">
          <img src={aboutImg} alt="aboutImg" />
        </div>
        <div>
          <p>
            --- Passionate about creating Web Pages with UI/UX, User
            Interface,familiar with frameworks, databases, version control, and
            API integration. ---
          </p>
          <p>
            <span>My Skills Are : </span> HTML, CSS, JavaScript, React, Git &
            GitHub, Bootstrap, Node, MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
