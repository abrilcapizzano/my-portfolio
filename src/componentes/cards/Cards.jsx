import "./cards.css";
import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import capriImg from "./capri.png";
import skateStoreJs from "./skatestore-img.png";
import skateStoreRc from "./skatestore-img2.png";


export default function Cards() {
    const productos = [
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
        productos.map((producto)=>(
              <div key={producto.nombre + producto.id}>
              <Card className='card' style={{ width: '20rem', height: '28rem' }}>
              <Card.Img className='imagenCard' variant="top" src={producto.img} />
              <Card.Body> 
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Text>
              {producto.descripcion}
              </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
              <ListGroup.Item>{producto.precio}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
              <a  href={producto.link} target="_blank"  rel="noreferrer"><Button id={producto.link}>Link</Button></a>
              </Card.Body>
            </Card>
        </div>
        ))
        );
}