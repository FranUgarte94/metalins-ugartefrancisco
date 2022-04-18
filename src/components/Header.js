import NavBar from "./NavBar"



const Header = () => {

    const edad = 30

    return (
        <>
            <header className="header">
                <h1 className="header__titulo">Metal-Ins</h1>
                <NavBar nombre="Francisco" apellido="Ugarte" edad={edad} footer={false}/>
            </header>
        </>
    )
}

export default Header