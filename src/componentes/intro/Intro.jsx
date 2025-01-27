import React from "react";
import Cards from "../cards/Cards.jsx";
import "./intro.css";
import icon from "./foto-profile.jpg";
import cssicon from "./css-icon.png";
import htmlicon from "./html-icon.png";
import jsicon from "./js-icon.png";
import reacticon from "./react-icon.png";
import sassicon from "./sass-icon.png";
import java from "./java.png";
import ads from "./ads.png";

function Intro() {
  return (
    <div className="contenido">
      <div>
        <img src={icon} className="foto-cv" alt="Foto intro" />
        <p className="name">Abril Capizzano</p>

        <p className="subtitle">
          I’m Abril, a passionate Full Stack Developer with experience in web
          development and digital marketing. I’m currently studying Information
          Technology at Universidad Tecnológica Nacional and have a Full Stack
          Developer certification. I’ve worked with technologies like React,
          Node.js, Python, and databases such as SQL and MongoDB. I’m also a
          Google Ads specialist, helping businesses optimize their ad campaigns.
          I’m passionate about learning, teaching, and growing professionally.
        </p>
        <div className="container-skills">
          <p className="title-1">My Skills</p>
          <img src={cssicon} className="icon-skills" alt="CSS Icon" />
          <img src={jsicon} className="icon-skills" alt="JavaScript Icon" />
          <img src={htmlicon} className="icon-skills" alt="HTLM5 Icon" />
          <img src={reacticon} className="icon-skills" alt="React Icon" />
          <img src={sassicon} className="icon-skills" alt="Sass Icon" />
          <img src={java} className="icon-skills" alt="Java Icon" />
          <img src={ads} className="icon-skills" alt="Google Ads Icon" />
        </div>
        <p className="title-1">Some of My Projects</p>
        <div className="card-container">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Intro;
