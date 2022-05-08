import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <h1 className="header__titulo">Metal-Ins Ecommerce</h1>
        </Link>

        <Link to="/Carrito">
          <span className="material-icons">shopping_cart</span>
        </Link>
        <NavBar nombreUsuario="Francisco" footer={false} />
      </header>
    </>
  );
};

export default Header;
