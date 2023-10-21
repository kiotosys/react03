import React from 'react'
import { db } from '../firebase/firebase'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'

const AppForm = () => {
  ///////////////////// GUARDAR / ACTUALIZAR /////////////////
  const camposRegistro = { nombre:"", edad:"", genero:"" }
  const [objeto, setObjeto] = useState(camposRegistro);

  const manejarEnvios = (e) => {
    e.preventDefault();

    try {
      if(db) {
        addDoc(collection(db, 'persona'), objeto);  
        console.log("Guardando en BD");
      }else{
        console.log("Actualizando en BD");
      }
    } catch (error) {
      console.error();
    }
  }

  const manejarCambiosEntrada = (e) => {
    //console.log(e.target.value);        //Obtiene valor ingresado
    const {name, value} = e.target;       //name, value recibe de target
    console.log(name, value);             //obtiene name y value
    setObjeto({...objeto, [name]: value});//agrega a objeto name y value
  }

  return (
    <div style={{background:"orange", padding:"10px", textAlign:"center"}}>
      <form onSubmit={manejarEnvios} >
        <h>AppForm.js</h> <br/>
        <input onChange={manejarCambiosEntrada} value={objeto.nombre} 
          name='nombre' type='text' placeholder='Nombres...' /><br/>

        <input onChange={manejarCambiosEntrada} value={objeto.edad} 
          name='edad'   type='text' placeholder='Edad...' /><br/>

        <input onChange={manejarCambiosEntrada} value={objeto.genero} 
          name='genero' type='text' placeholder='Género...' /><br/>

        <button>Guardar</button>
      </form>
    </div>
  )
}

export default AppForm
