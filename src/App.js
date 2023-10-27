//import logo from './logo.svg';
//import './App.css';
import { useState } from 'react';
import AppForm from './components/AppForm';

function App() {
  ///////// READ - Lectura - fnRead ////////////
  const [docBD, setDocBD] = useState([]);
  const fnRead = () => {
  }

  ///////// DELETE - Eliminar - fnDelete ///////
  const [idActual, setIdActual] = useState("");
  const fnDelete = (xId) => {
  }
  
  return (
    <div style={{background:"yellow", width:"350px", 
     padding:"10px"}}>
      <AppForm {...{idActual}} />
      <i class="large material-icons">insert_chart</i>

      <p>1. Juan Manuel 23 Masculino ---- x -  A</p>
      <p>2. Rosa Maria  25 Femenino  ---- x -  A</p>
      <p>3. Luis Miguel 40 Masculino ---- x -  A</p>
    </div>
  );
}

export default App;
