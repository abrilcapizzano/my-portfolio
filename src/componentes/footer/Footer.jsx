import React from "react";
import "./footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import linkedin from "./linkedin.svg";
import github from "./gitlab.svg";

function Footer() {
  return (
<div>
<footer>
        <p className="p-footer">Abril Capizzano</p>
<div className="redes">
        <p className="p-footer">Social Media:</p>
        <article>
       <a href="https://github.com/abrilcapizzano"> <img src={github} className="icon" alt="Github Icon" /></a>
      <a href="https://www.linkedin.com/in/abril-capizzano-b29529232/"><img src={linkedin} className="icon" alt="Linkedin Logo" /></a>
        </article>
        </div>       
</footer>
</div>
  );
}

export default Footer;