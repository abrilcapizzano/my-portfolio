import './App.css';
import {Route, Routes} from "react-router-dom";
import Intro from './componentes/intro/Intro.jsx';
import Contact from "./componentes/contact/Contact.jsx"
function App() {
  return (
    <div className="App">
<Routes>
<Route path='/' element={<Intro/> }/>
<Route path='/contact' element={<Contact/> }/>
 </Routes>
    </div>
  );
}

export default App;
