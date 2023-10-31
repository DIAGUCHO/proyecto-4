
import youtube from "../imagenes/youtube.png"
import facebook from "../imagenes/facebook.png"
import map from "../imagenes/map.png"
import "../estilos/foot.css";


function Footer({footerRef}) {
  return (
    <footer ref={footerRef} id="footer">
      <div className="contenedor-footer">
         <div className="footer-contenido-1">
           <p> Correo:comida@gmail.com</p>
           <p>Telefono:+569 32458754</p> 
         </div>
        <div className="footer-contenido-2">
          <a href="https://www.youtube.com/" target="blank">
          <img className="you" src={youtube}  />
          </a>
           <a href="https://web.facebook.com/?locale=es_LA&_rdc=1&_rdr" target="blank">
            <img className="face" src={facebook}  />
          </a>

        </div>
        <div className="mapa">
            <p>Ubicación:</p>
            <a  href="https://www.google.cl/maps/place/Mall+Paseo+San+Bernardo/@-33.5952733,-70.7098104,17z/data=!3m1!4b1!4m6!3m5!1s0x9662dbe3ead2dd8d:0xbd00528d7438c3fc!8m2!3d-33.5952778!4d-70.7072355!16s%2Fg%2F11bbrj3n9q?entry=ttu" target="blank">
            <img src={map} />
            </a>
        </div>

      </div>
      
     
  </footer>
  );
}

export default Footer;
