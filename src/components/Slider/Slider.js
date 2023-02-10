import React from "react";
import "./Slider.css";
import projectImg from "../../images/Connect4Vets.png";
import weatherproject2 from "../../images/weatherproject2.png";
import opalsorganic from "../../images/opalsorganic.png";
const Slider = () => {
  return (
    <div className="slider">
      <div className="slide">
        <img
          className="slide-image"
          src={projectImg}
          alt="connect 4 vets application"
        />
        <div className="app-title">
          <a className="slider-a" href="https://d3urubd6wwveok.cloudfront.net/">
            <span>Connect 4 Vets</span>
          </a>
        </div>
      </div>

      <div className="slide">
        <img
          className="slide-image"
          src={weatherproject2}
          alt="connect 4 vets application"
        />
        <div className="app-title">
          <a
            className="slider-a"
            href="https://master.d2qmd27n0cuzo.amplifyapp.com/"
          >
            <span>daily.weather</span>
          </a>
        </div>
      </div>
      <div className="slide">
        <img
          className="slide-image"
          src={opalsorganic}
          alt="connect 4 vets application"
        />
        <div className="app-title">
          <a
            className="slider-a"
            href="https://master.d1hypkpxf0f9rp.amplifyapp.com/ "
          >
            <span>opal's organic</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
