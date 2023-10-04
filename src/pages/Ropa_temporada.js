import "../styles/ropa_temporada.css"
import Opciones from "../componentes/opciones"
import Tarjetas_con_img from "../componentes/tarjetas_con_img"

function Ropa_temporada() {
    const secciones_img = [
        { 
            titulo_img : "Producto",
            img : 'https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png',
            precio : "Precio"
        },
        { 
            titulo_img : "Producto",
            img : 'https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png',
            precio : "Precio"
        },
        { 
            titulo_img : "Producto",
            img : 'https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png',
            precio : "Precio"
        }
    ]

    function components_secciones_img() {
        return (
            <>
            {
                secciones_img.map(noticia_img => {
                    return <Tarjetas_con_img titulo={noticia_img.titulo_img} precio={noticia_img.precio} img={noticia_img.img}/>
                })
            }
            </>
        )
    }

    return(
        <div className="principal_catalogo">
            <a href="/principal"><button className="return"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.854 5.646a.5.5 0 010 .708L3.207 9l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M13.5 2.5a.5.5 0 01.5.5v4a2.5 2.5 0 01-2.5 2.5H3a.5.5 0 010-1h8.5A1.5 1.5 0 0013 7V3a.5.5 0 01.5-.5z" clip-rule="evenodd"></path></svg></button></a>
            <h1 className="h1_catalogo">Ropa por temporadas</h1>
            <Opciones/>
            <p className="explicacion_catalogo"></p>

            <div className="div_general">
                <h2 className="h2">Verano</h2>
                <div className="div_tallas_grandes">
                    {components_secciones_img()}
                </div>

                <h2 className="h2">Invierno</h2>
                <div className="div_tallas_peque">
                    {components_secciones_img()}
                </div>


                <h2 className="h2">Otoño</h2>
                <div className="div_especiales">
                    {components_secciones_img()}
                </div>


                <h2 className="h2">Primavera</h2>
                <div className="div_mujeres">
                    {components_secciones_img()}
                </div>
            </div>
        </div>
    )
}

export default Ropa_temporada