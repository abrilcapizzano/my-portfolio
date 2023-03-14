import './App.css';
import {Route, Routes} from "react-router-dom";
import Intro from './componentes/intro/Intro.jsx';

function App() {
  return (
    <div className="App">
<Routes>
<Route path='/' element={<Intro/> }/>
 </Routes>
    </div>
  );
}

export default App;
