import React from "react";
import "./Home.css";
import myImage from "./myImage.png";
import line from "./line.png";
import arrow from "./arrow.png";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-myimage">
        <img src={myImage} alt="myPhoto" />
      </div>

      <div className="home-content">
        <img src={arrow} alt="arrow" className="arrow" />
        <h1> vignesh m</h1>
        <p>
          * I'm a <span>MERN stack developer</span> with a passion for creating
          user experience websites. *
          <img src={line} alt="line" />
        </p>
      </div>
    </div>
  );
};

export default Home;
