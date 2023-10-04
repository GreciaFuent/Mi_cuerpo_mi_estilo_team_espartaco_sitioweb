import "../styles/opciones.css"

function Opciones() {
    return(
        <ul className="opciones_ul">
            <a href="/principal"><li className="opcion_li">Ofertas</li></a>
            <a href="/catalogo_general"><li className="opcion_li">Tallas grandes</li></a>
            <a href="/catalogo_general"><li className="opcion_li">Tallas pequeñas</li></a>
            <a href="/catalogo_general"><li className="opcion_li">Mujeres</li></a>
            <a href="/catalogo_general"><li className="opcion_li">Hombres</li></a>
            <a href="/costureras"><li className="opcion_li">Costureras</li></a>
        </ul>
    )
}

export default Opciones
