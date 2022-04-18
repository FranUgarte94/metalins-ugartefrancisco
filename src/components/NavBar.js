import CartWidget from './CartWidget';

const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">



  <div className="container-fluid">
    <a className="navbar-brand" href="#">Metal-Ins</a>

    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle botones" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Inicio
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Loguearte</a></li>
  </ul>
</div>

<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle botones" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Productos
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Chapas</a></li>
    <li><a className="dropdown-item" href="#">Caños</a></li>
    <li><a className="dropdown-item" href="#">Perfiles</a></li>
  </ul>
</div>

<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle botones" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Sobre Nosotros
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Empresa</a></li>
    <li><a class="dropdown-item" href="#">Historia</a></li>
    <li><a class="dropdown-item" href="#">Contacto</a></li>
  </ul>
</div>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <form className="d-flex">


      <button type="button" className="btn btn-primary botones">
        <li class="nav-item d-flex align-items-center">
          <CartWidget/> 
        </li>

      </button>

        

        

        <button className="btn btn-outline-success botonLogin botones" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default NavBar