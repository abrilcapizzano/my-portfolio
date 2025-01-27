import './App.css';
<<<<<<< HEAD
import {Route, Routes} from "react-router-dom";
=======
import { Route, Routes } from "react-router-dom";
>>>>>>> 3000279 (Actualizando proyecto)
import Intro from './componentes/intro/Intro.jsx';
import Contact from "./componentes/contact/Contact.jsx"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from "./componentes/footer/Footer.jsx"
function App() {
  return (
    <div className="App">

<<<<<<< HEAD
<Navbar className='navegador'bg="dark" variant="dark">
=======
      <Navbar className='navegador' bg="dark" variant="dark">
>>>>>>> 3000279 (Actualizando proyecto)
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/"><p className='p-nav'>Intro</p></Nav.Link>
            <Nav.Link href="/contact"><p className='p-nav'>Contact</p></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
<<<<<<< HEAD
<Routes>
<Route path='/' element={<Intro/> }/>
<Route path='/contact' element={<Contact/> }/>
 </Routes>

 <Footer />
=======
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
>>>>>>> 3000279 (Actualizando proyecto)
    </div>
  );
}

export default App;
