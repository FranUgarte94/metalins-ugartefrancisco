import React, { useContext } from "react";
import cartContext from "./cartContext";


const Carrito = () => {
  const { precio_total, carrito, vaciarCarrito } = useContext(cartContext);
  //console.log({precio_total, carrito})

  return (
    <div>
      <p>Carrito</p>
      <p>Precio total : $ {precio_total}</p>
    </div>
  );
};

export default Carrito;
