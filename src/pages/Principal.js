import Header from "../componentes/header"
import Nav from "../componentes/nav"
import Tarjetas_con_img from "../componentes/tarjetas_con_img"
import Opciones from "../componentes/opciones"
import "../styles/principal.css"

function Principal() {

    const secciones_img = [
        { 
            titulo_img : "Tallas grandes",
            img : 'https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png',
            precio : "¡Clic!"
        },
        {
            titulo_img : "Tallas petites",
            img : 'https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png',
            precio : "¡Clic!"
        },
        {
            titulo_img : "Discapacidad fisica",
            img : 'https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png',
            precio : "¡Clic!"
        },
        {
            titulo_img : "otros",
            img : 'https://www.webfx.com/wp-content/uploads/2021/10/generic-image-placeholder.png',
            precio : "¡Clic!"
        },
        
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


    const tendencias_img = [
        { 
            titulo_img : "Tencias actuales",
            img : 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-4_large.png?format=jpg&quality=90&v=1530129177',
            precio : "¡Clic!"
        },
        {
            titulo_img : "Tendecias verano",
            img : 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-3_large.png?format=jpg&quality=90&v=1530129152',
            precio : "¡Clic!"
        },
        {
            titulo_img : "Tendecias invierno",
            img : 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-1_large.png?format=jpg&quality=90&v=1530129113',
            precio : "¡Clic!"
        },
        {
            titulo_img : "Tendecias otoño",
            img : 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-5_large.png?format=jpg&quality=90&v=1530129199',
            precio : "¡Clic!"
        },
        
    ]

    function components_tendencias_img() {
        return (
            <>
            {
                tendencias_img.map(noticia_img => {
                    return <Tarjetas_con_img titulo={noticia_img.titulo_img} precio={noticia_img.precio} img={noticia_img.img}/>
                })
            }
            </>
        )
    }


    return(
        <div className="principal">
            <Header/>
            <Nav/>
            <h1 class="titulo">Mi cuerpo mi estilo</h1>
            <Opciones/>
            <div className="section_1">
                <div className="info_sitio">
                    <h4 className="h4_info_sitio">¡Te damos la bienvenida a nuestro sitio web, donde encontrarás una increíble selección de moda para todas las tallas, cuerpos y necesidades!</h4>
                    <p className="parrafo_info_sitio">¡Haz clic en el botón para descubrir la emocionante misión de este sitio web y qué tenemos preparado para ti!</p>
                    <a href="/quienes_somos" className="btn_quienes_somos"><button>Quienes Somos</button></a>
                </div>
            </div>

            <div className="div_categorias">
                <h2 className="h2_categorias">Categorias</h2>
                <section className="section_de_prendas">
                    {components_secciones_img()}
                </section>
            </div>

            <div className="div_tendencias">
                <h2 className="h2_tendicias">Tendencias</h2>
                <section className="section_de_prendas">
                    {components_tendencias_img()}
                </section>
            </div>

            <div className="section_2">
                <div className="costureras">
                    <h2 className="h2_costureras">Enlace con modistas y sastres</h2>
                    <p className="parrafo_costureras">¡Explora la magia de la costura! Haz clic en el botón para desvelar los secretos de nuestra sección de enlace con los talentosos modistas y sastres de Quetzaltenango. ¡Descubre el arte de la moda personalizado con un solo clic!</p>
                    <a href="/costureras" className="btn_saber_costureras"><button>Saber Más</button></a>
                </div>
            </div>
        </div>
    )
}

export default Principal