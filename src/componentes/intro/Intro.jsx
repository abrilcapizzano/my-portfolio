import React from "react";
<<<<<<< HEAD
import Cards from "../cards/Cards.jsx"
=======
import Cards from "../cards/Cards.jsx";
>>>>>>> 3000279 (Actualizando proyecto)
import "./intro.css";
import icon from "./foto-profile.jpg";
import cssicon from "./css-icon.png";
import htmlicon from "./html-icon.png";
import jsicon from "./js-icon.png";
import reacticon from "./react-icon.png";
import sassicon from "./sass-icon.png";
<<<<<<< HEAD


function Intro () {
    return(  
        <div className="contenido">
<div>
<img src={icon} className="foto-cv" alt="Foto intro" />
<p className="name">
Abril Capizzano</p>

<p className="subtitle">
Web Developer</p>
<div className="container-skills">
<p className="title-1">
My Skills</p>
<img src={cssicon} className="icon-skills" alt="Foto intro" />
<img src={jsicon} className="icon-skills" alt="Foto intro" />
<img src={htmlicon} className="icon-skills" alt="Foto intro" />
<img src={reacticon} className="icon-skills" alt="Foto intro" />
<img src={sassicon} className="icon-skills" alt="Foto intro" />
</div>
<p className="title-1">My Projects</p>
<div className="card-container">
<Cards/>
</div>
</div>
</div>
    )
}

export default Intro;
=======
import javaicon from "./java.png";

function Intro() {
  return (
    <div className="contenido">
      <div>
        <img src={icon} className="foto-cv" alt="Foto intro" />
        <p className="name">Abril Capizzano</p>
        <div className="contenedor-subtitulo">
          <p className="subtitle">
            I’m a full-stack developer and digital marketing specialist with
            experience in Google Ads optimization and web development. Based in
            Buenos Aires, Argentina, I combine skills in front-end (React,
            JavaScript, HTML, CSS) and back-end (Node.js, Python, SQL, MongoDB).
          </p>
          <p className="subtitle">
            I graduated as a Full-Stack Developer from Universidad Tecnológica
            Nacional and have also taught programming as a Front-End Tutor. I’m
            fluent in English, Spanish, and Portuguese, and I enjoy creating
            innovative solutions for global projects.
          </p>
        </div>
        <div className="container-skills">
          <p className="title-1">My Skills</p>
          <img src={cssicon} className="icon-skills" alt="Foto intro" />
          <img src={jsicon} className="icon-skills" alt="Foto intro" />
          <img src={htmlicon} className="icon-skills" alt="Foto intro" />
          <img src={reacticon} className="icon-skills" alt="Foto intro" />
          <img src={sassicon} className="icon-skills" alt="Foto intro" />
          <img src={javaicon} className="icon-skills" alt="Foto intro" />
        </div>
        <p className="title-1">Some Of My Projects</p>
        <div className="card-container">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Intro;
>>>>>>> 3000279 (Actualizando proyecto)
