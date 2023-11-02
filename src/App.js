//import logo from './logo.svg';
//import './App.css';
import { useEffect, useState } from 'react';
import AppForm from './components/AppForm';
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from './firebase/firebase';

function App() {
  ///////// READ - Lectura - fnRead ////////////
  const [idActual, setIdActual] = useState("");
  const [docBD, setDocBD] = useState([]);
  const fnRead = () => {
    const xColecionConQuery = query(collection(db, "persona"));
    const unsubscribe = onSnapshot(xColecionConQuery, (xDatosBD) => {
      const xDoc = [];
      xDatosBD.forEach((docV)=>{
        xDoc.push({id:docV.id, ...docV.data()});
        //console({id:doc.id, ...doc.data()});
      });
      setDocBD(xDoc);
    });
  }
  fnRead();
  //useEffect(()=>{fnRead(); }, [idActual]);
  //console.log(docBD);

  ///////// DELETE - Eliminar - fnDelete ///////
  
  const fnDelete = async (xId) => {
    if(window.confirm("Confirme para eliminar")){
      await deleteDoc(doc(db, "persona", xId));
      alert("Se elimino con éxito...");
    }
  }
  
  return (
    <div style={{background:"yellow", width:"350px", 
     padding:"10px"}}>
      <AppForm {...{idActual, setIdActual}} />
      {
        docBD.map((r, index) => 
          <p key={r.id}>
            {index+1}. {r.nombre} 
            ------- 
            <span onClick={()=>fnDelete(r.id)}>x</span>
            -------
            <span onClick={()=>setIdActual(r.id)}>A</span> <br/>

            23 Masculino 
          </p>
        )
      }
    </div>
  );
}

export default App;
