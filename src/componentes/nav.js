import "../styles/nav.css"

function Nav() {
    const cerrar = ()=> {
        const nav = document.querySelector("nav")
        nav.style.display = "none"
    }

    return (
        <nav className="nav">
            <button className="close" onClick={cerrar}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></button>
            <ul>
                <li><a href="/catalogo_general">Catálogo</a></li>
                <li><a href="/costureras">Enlace con modistas y sastres</a></li>
                <li><a href="/ropa_temporada">Ropa por temporada</a></li>
                <li><a href="/quienes_somos">Quienes Somos</a></li>
            </ul>
        </nav>
    )
}

export default Nav