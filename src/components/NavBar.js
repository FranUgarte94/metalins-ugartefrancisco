import CartWidget from './CartWidget';
import { Link , NavLink } from 'react-router-dom';

const NavBar = (footer,nombre) => {

  //console.log(props.nombre);
  //console.log(props.footer);

  if(footer){
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">

          <Link to="/Productos" className="nav-link dropdown-toggle btn-primary letraBlanca" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </Link>

          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink to="/Chapas" className="dropdown-item">Chapas</NavLink></li>
            <li><NavLink to="/Caños" className="dropdown-item">Caños</NavLink></li>
            <li><NavLink to="/Perfiles" className="dropdown-item">Perfiles</NavLink></li>
          </ul>
          
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Sobre Nosotros</a>
        </li>

        <li className="nav-item">
          <a className="nav-link disabled">Otros</a>
        </li>

        <li className="nav-item">
          <Link to="/Carrito" className="nav-link active" aria-current="page">
            <CartWidget/>
          </Link>
        </li>



      </ul>
    </div>

    <div className='d-flex'>

      <button className="btn btn-outline-success" type="submit">Login</button>
    </div>
  </div>
</nav>
    )
  }else{

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">{nombre}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">

          <a className="nav-link dropdown-toggle btn-primary letraBlanca" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>

          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Chapas</a></li>
            <li><a className="dropdown-item" href="#">Caños</a></li>
            <li><a className="dropdown-item" href="#">Perfiles</a></li>
          </ul>
          
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Sobre Nosotros</a>
        </li>

        <li className="nav-item">
          <a className="nav-link disabled">Otros</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <CartWidget/>
          </a>
        </li>



      </ul>
    </div>

    <div className='d-flex'>

      <button className="btn btn-outline-success" type="submit">Login</button>
    </div>
  </div>
</nav>

  )
}
}

export default NavBar