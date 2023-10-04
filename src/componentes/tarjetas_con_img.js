import "../styles/Tarjetas_con_img.css"

function Tarjetas_con_img(props) {

    const { titulo , precio, img } = props

    return (
        <div className="tarjeta_con_img">
            <img className="img_tarjeta" src={img}></img>
            <h2 className="titulo_tarjeta_img">{titulo}</h2>
            <p className="precio_tarjeta_img">{precio}</p>
        
        </div>
    )
}

export default Tarjetas_con_img