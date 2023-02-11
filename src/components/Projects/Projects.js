import React from "react";
import Slider from "../Slider/Slider";
import "./Project.css";

const Projects = () => {
  return (
    <div id="#projects" className="project-container">
      <div className="project-wrapper">
        <h1 className="projects-h1">projects</h1>
        <Slider />
      </div>
    </div>
  );
};

export default Projects;
