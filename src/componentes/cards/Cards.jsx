import "./cards.css";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import capriImg from "./capri.png";
import skateStoreJs from "./skatestore-img.png";
import skateStoreRc from "./skatestore-img2.png";


export default function Cards() {
    const proyectos = [
        {
          nombre: "Capri",
          descripcion: "Capri was my first project. It`s about a fictional travel agency. It was made using HTML, SASS and Bootstrap.",
          link: "https://abrilcapizzano.github.io/proyecto-capri/",
          img: capriImg,
          id: 1
        },
        {
          nombre: "Skate Store JavaScript",
          descripcion: "This was my second project. I created a fictional e-commerce. It was made using mostly JavaScript and Bootstrap.",
          link: "https://skatestore.vercel.app/",
          img: skateStoreJs,
          id: 2
        },
        {
          nombre: "Skate Store React",
          descripcion: "This project was made on React. It's a fictional e-commerce using react.",
          link: "https://proyecto-react-pied.vercel.app/",
          img: skateStoreRc,
          id: 3
        }
    ]
    return (
        proyectos.map((proyecto)=>(
              <div key={proyecto.nombre + proyecto.id}>
              <Card className='card' position="inherit" style={{ width: '20rem', height: '28rem' }}>
              <Card.Img className='imagenCard' variant="top" src={proyecto.img} />
              <Card.Body> 
              <Card.Title>{proyecto.nombre}</Card.Title>
              <Card.Text>
              {proyecto.descripcion}
              </Card.Text>
              </Card.Body>
              <Card.Body>
              <Button onClick={() => { console.log('Button clicked'); window.open(proyecto.link, '_blank'); }}>Go to the project</Button>
              </Card.Body>
            </Card>
        </div>
        ))
        );
        
}