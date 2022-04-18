import NavBar from "./NavBar"

const Footer = () => {

    const edad = 30
    const saludo = () => {}
    const links = ["link1","link2","link3","contactame","faq","tienda"]
    const footer = true

    return (
        <>
            <footer className="footer">
            <NavBar 
            nombre="Pedro" 
            apellido="Gomez" 
            edad={edad} 
            onAdd={saludo} 
            link={links}
            footer/>
                <p>Copyright &copy; - 2022</p>
                <p>Todos los derechos reservados</p>

            </footer>
        </>
    )
}

export default Footer