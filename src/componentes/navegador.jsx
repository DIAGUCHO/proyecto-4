import React, { useRef } from 'react';
import "../estilos/navegador.css";

function Navegador() {
    //mover pagina al footer
   const footerRef = useRef(null);
   const scrollToFooter = () => {
      if (footerRef.current) {
       footerRef.current.scrollIntoView({ behavior: 'smooth' });
     }
    };
    //mover pagina al menu
    const menuRef = useRef(null);
    const scrollToMenu = () => {
       if (menuRef.current) {
         menuRef.current.scrollIntoView({ behavior: 'smooth' });
     }
    };

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <h1>Restaurante</h1>
          <p>Tu destino culinario</p>
        </div>
        <ul className="menu">
          <li><a href="#">Inicio</a></li>
          <li><a onClick={scrollToMenu} href="#menu">Menú</a></li>
          <li><a href="#">Reservaciones</a></li>
          <li><a onClick={scrollToFooter} href="#footer">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navegador;
