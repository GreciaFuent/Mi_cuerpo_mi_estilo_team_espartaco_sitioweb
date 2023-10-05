import "../styles/costureras.css"
import img1 from '../imagenes/img1.png'
import img2 from '../imagenes/img2.png'
import img3 from '../imagenes/img3.png'

function Costureras() {
    return(
        <div className="principal_costureras">
            <a href="/principal"><button className="return"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.854 5.646a.5.5 0 010 .708L3.207 9l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M13.5 2.5a.5.5 0 01.5.5v4a2.5 2.5 0 01-2.5 2.5H3a.5.5 0 010-1h8.5A1.5 1.5 0 0013 7V3a.5.5 0 01.5-.5z" clip-rule="evenodd"></path></svg></button></a>
            <h1 className="h1_costureras">Enlace con modistas y sastres</h1>
            
            <div className="div_explicacion">
                <p className="p1">En nuestro viaje hacia una moda verdaderamente inclusiva, no solo nos apasiona abrir las puertas a las marcas que comparten nuestra visión, sino que también anhelamos marcar un impacto duradero en la economía naranja de Quetzaltenango</p>
                <div className="parte1">
                    <p>
Imagina un mundo donde la creatividad y la habilidad se fusionan en una explosión de colores y tejidos. Proponemos una audaz alianza con los estudiantes de corte y confección de Intecap. En este espacio de oportunidad, vemos un lienzo en blanco esperando ser llenado con prendas únicas y adaptadas a las necesidades individuales de nuestros usuarios.</p>
                    <img src="https://www.playerasmark.com/app/assets/media/2019/07/Conoce-las-ventajas-de-confeccionar-tu-propia-ropa.jpg"></img>
                </div>
                <div className="parte2">
                    <p>No se trata solo de ofrecer ropa a medida, sino de empoderar a nuestros usuarios para que se sientan como las estrellas que son. ¿Te gustaría una prenda modificada para que sea perfecta para ti? ¡Nosotros lo hacemos posible! Esto no solo trae alegría a nuestros clientes, sino que también crea un flujo de empleo y prosperidad para los talentosos modistas y sastres que forman parte de la familia de 'Mi Cuerpo, Mi Estilo'.</p>
                     <img src="https://mymodernmet.com/wp/wp-content/uploads/2019/01/sewing-patterns-1.jpg"></img> 
                </div>
                <p className="p2">A continuación, encontraras el modelo de como nos imaginamos la sección de <span>enlace con modistas y sastre</span> en alianza con los estudiantes de corte y confección de Intecap </p>
                <ul className="imagenes_concepto">
                    <li><img src={img1}></img></li>
                    <li><img src={img3}></img></li>
                    <li><img src={img2}></img></li>
                </ul>
            </div>
        </div>
    )
}

export default Costureras