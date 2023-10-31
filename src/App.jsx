import './App.css';
import Presentacion from "./componentes/presentacion.jsx";
import Navegador from "./componentes/navegador.jsx";
import Carta from './componentes/carta.jsx';
import Footer from './componentes/footer.jsx';
import comida1 from "./imagenes/comida1.jpg"
import comida2 from "./imagenes/comida2.jpg"
import comida3 from "./imagenes/comida3.jpg"
import comida4 from "./imagenes/comida4.jpg"
import comida5 from "./imagenes/comida5.jpg"
import comida6 from "./imagenes/comida6.jpg"
import comida7 from "./imagenes/comida7.jpg"
import comida8 from "./imagenes/comida8.jpg"

import { useState,useEffect } from 'react';


function App() {
  const [comida,setComida]=useState("COMIDA1")
  const [precio,setPrecio]=useState("PRECIO1")
  const [imagen1,setImagen1]=useState(comida1)
  const [imagen2,setImagen2]=useState(comida2)
  const [imagen3,setImagen3]=useState(comida3)
  const [imagen4,setImagen4]=useState(comida4)
  const cambiarNombre = () => { 
    setComida("COMIDA2")
    setPrecio("PRECIO2")
    setImagen1(comida5)
    setImagen2(comida6)
    setImagen3(comida7)
    setImagen4(comida8)
  } 
  const cambiarNombre2 = () => {
    setComida("COMIDA1")
    setPrecio("PRECIO1")
    setImagen1(comida1)
    setImagen2(comida2)
    setImagen3(comida3)
    setImagen4(comida4)
  }
  
  //useEffect(() => {
    //cambiarNombre()
  //}, []);
  //button onClick={cambiarNombre}>
     // cambiarNombre 
    //button>
  
  return (

  <div className='contenedor'>
    <Navegador />
    <div className='contenedor-padre1'>
      <div className='contenedor-presentacion'>
      <Presentacion />
      </div>
    </div>
    <div className='menu'>
      <div>
       <h1>Menu</h1>
      </div>
      
    </div>
    <div className='contenedor-carta'>
      <Carta
      nombre={comida}
      presio={precio}
      comida={imagen1}
      />
      <Carta 
       nombre= {comida}
       presio={precio}
       comida={imagen2}
      />
      <Carta
      nombre= {comida}
      presio={precio}
      comida={imagen3}
       />
      <Carta
      nombre= {comida}
      presio={precio}
      comida={imagen4}
       />   
    </div >
    <div className='contenedor-carta2'>
    <Carta
      nombre={comida}
      presio={precio}
      comida={imagen1}
      />
      <Carta 
       nombre= {comida}
       presio={precio}
       comida={imagen2}
      />
      <Carta
      nombre= {comida}
      presio={precio}
      comida={imagen3}
       />
      <Carta
      nombre= {comida}
      presio={precio}
      comida={imagen4}
       />  
    </div>
    <div className='boton'>
      <button className='cambio-comida' onClick={cambiarNombre}>PAG-1</button>
      <button className='cambio-comida2' onClick={cambiarNombre2}>PAG-2</button>
    </div>

    
     
    <div className='footer'>
    < Footer />
    </div>
     

  </div>

 
  )

}
export default App
