
import "../estilos/carta.css";




function Carta (props) {

    const menuRef = props.menuRef;

    return (

        <div id="menu">
            <div className="carta-foto">
                 <img src={props.comida} />
            </div>

            <div className="datos-menu">
                <p className="nombre-comida">{props.nombre}</p>
                <p className="presio">{props.presio}</p>
            </div>
        </div>


    )

} 

export default Carta;