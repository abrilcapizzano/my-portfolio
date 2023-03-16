import React from "react";
import Cards from "../cards/Cards.jsx"
import "./intro.css";
import icon from "./foto-profile.jpg";
import cssicon from "./css-icon.png";
import htmlicon from "./html-icon.png";
import jsicon from "./js-icon.png";
import reacticon from "./react-icon.png";
import sassicon from "./sass-icon.png";
import { Link } from "react-router-dom";

function Intro () {
    return(  
        <div className="contenido">
<input type="checkbox" id="active"/>
    <label htmlFor="active" className="menu-btn"><span></span></label>
    <label htmlFor="active" className="close"></label>

<div className="wrapper">
<ul>
<li><Link to="/">About Me</Link></li>
<li><Link to="/contact">Contact</Link></li>
</ul>
</div>


<div >
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