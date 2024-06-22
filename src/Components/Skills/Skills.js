import React from "react";
import "./Skills.css";
import html from "./Skill_Images/html.png";
import css from "./Skill_Images/css.png";
import Bootstarp from "./Skill_Images/bootstrap.svg";
import js from "./Skill_Images/js.png";
import reactIcon from "./Skill_Images/react.svg";
import mongoDB from "./Skill_Images/mongodb.svg";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>

      <div className="skill-boxs">
        <div className="skill-box">
          <img src={html} alt="html" />
          <p>HTML</p>
          <p>Advanced</p>
        </div>
        <div className="skill-box">
          <img src={css} alt="css" />
          <p>CSS</p>
          <p>Advanced</p>
        </div>
        <div className="skill-box">
          <img src={Bootstarp} alt="html" />
          <p>Bootstarp</p>
          <p>Intermediate</p>
        </div>
        <div className="skill-box">
          <img src={js} alt="html" />
          <p>JavaScript</p>
          <p>Intermediate</p>
        </div>
        <div className="skill-box">
          <img src={reactIcon} alt="html" />
          <p>React</p>
          <p>Intermediate</p>
        </div>
        <div className="skill-box">
          <img src={mongoDB} alt="html" />
          <p>MongoDB</p>
          <p>basic</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
