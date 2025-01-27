import "./cards.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import capriImg from "./capri.png";
import skateStoreJs from "./skatestore-img.png";
import skateStoreRc from "./skatestore-img2.png";
import casasFelicitas from "./casas-felicitas.png";
export default function Cards() {
  const proyectos = [
    {
      nombre: "Capri",
      descripcion:
        "Capri was my first project, a fictional travel agency website built using HTML, SASS, and Bootstrap.",
      link: "https://abrilcapizzano.github.io/proyecto-capri/",
      img: capriImg,
      id: 1,
    },
    {
      nombre: "Skate Store JavaScript",
      descripcion:
        "This was my second project: a fictional e-commerce built primarily with JavaScript and styled using Bootstrap. Note: The project is not fully responsive.",
      link: "https://skatestore.vercel.app/",
      img: skateStoreJs,
      id: 2,
    },
    {
      nombre: "Skate Store React",
      descripcion:
        "This project, built with React, is a fictional e-commerce platform showcasing modern design and dynamic functionality.",
      link: "https://proyecto-react-pied.vercel.app",
      img: skateStoreRc,
      id: 3,
    },
    {
      nombre: "Casas Felicitas Consultoria Imobiliaria",
      descripcion:
        "A sleek contact and gallery page for a real estate consultant, featuring property photos and a responsive design for seamless client interaction.",
      link: "https://casas-felicitas.vercel.app/#",
      img: casasFelicitas,
      id: 4,
    },
  ];
  return proyectos.map((proyecto) => (
    <div key={proyecto.nombre + proyecto.id}>
      <Card
        className="card"
        position="inherit"
        style={{ width: "20rem", height: "28rem" }}
      >
        <Card.Img className="imagenCard" variant="top" src={proyecto.img} />
        <Card.Body>
          <Card.Title>{proyecto.nombre}</Card.Title>
          <Card.Text>{proyecto.descripcion}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Button
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
            variant="dark"
            onClick={() => {
              window.open(proyecto.link, "_blank");
            }}
          >
            Go to the project
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));
}
