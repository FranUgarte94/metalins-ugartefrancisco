import { Link } from "react-router-dom"
import { useContext } from "react"
import {contexto} from "./miContexto"


const CartWidget = (props) => {

  const {cantidad_total}=useContext(contexto)
console.log (`Cant ${cantidad_total}`)

  return (
    <Link to="/cart">
      <p>Carrito</p>
      <span className="material-icons carrito">shopping_cart</span>
      {cantidad_total}
    </Link>
  );
};

export default CartWidget;  
