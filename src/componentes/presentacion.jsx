
import icono1 from "../imagenes/icono.jpg";
import "../estilos/presentacion.css";


function Presentacion () {

    return (
        
        <div className="Contenedor-presentacion">

            <img className="imagen-presentacion" src={icono1}  />

            <div className="contenedor-texto">

                <p className="nombre">Restaurante</p>
                <p className="tipo-comida">Comida rapida</p>
                <p className="texto">Comida para servir o llevar</p>

            </div>

        </div>


    )




}

export default Presentacion;