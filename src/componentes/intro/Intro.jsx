import React from "react";
import Cards from "../cards/Cards.jsx";
import "./intro.css";
import icon from "./foto-profile.jpg";
import cssicon from "./css-icon.png";
import htmlicon from "./html-icon.png";
import jsicon from "./js-icon.png";
import reacticon from "./react-icon.png";
import sassicon from "./sass-icon.png";

function Intro() {
  return (
    <div className="contenido">
      <div>
        <img src={icon} className="foto-cv" alt="Foto intro" />
        <p className="name">Abril Capizzano</p>

        <p className="subtitle">Web Developer</p>
        <div className="container-skills">
          <p className="title-1">My Skills</p>
          <img src={cssicon} className="icon-skills" alt="Foto intro" />
          <img src={jsicon} className="icon-skills" alt="Foto intro" />
          <img src={htmlicon} className="icon-skills" alt="Foto intro" />
          <img src={reacticon} className="icon-skills" alt="Foto intro" />
          <img src={sassicon} className="icon-skills" alt="Foto intro" />
        </div>
        <p className="title-1">My Projects</p>
        <div className="card-container">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Intro;
