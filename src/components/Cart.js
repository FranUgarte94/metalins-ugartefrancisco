import React, { useContext, useState } from 'react'
import CarritoLista from './CarritoLista'
import {contexto} from "./miContexto"

import { db } from "./firebase";


const Cart = () => {
  //const { precio_total, carrito, vaciarCarrito } = useContext(CartContext);
  const {precio_total,carrito,vaciarCarrito}=useContext(contexto)
  //console.log({precio_total, carrito})
  console.log(precio_total,carrito,vaciarCarrito)


//   const handleClick = () => {

//     const copia = [...cart]
    
//     const carritoCompra = {
//       id : Math.random(),
//       nombre : nombre
//       //setChange(!change)
//   }

//   copia.push(carritoCompra)

//   setCarritoCompra(copia)

//   console.log(copia)


// }


const handleClick=()=>{
  vaciarCarrito()
}



  return (

    //meter render condicional, si no hay items, poner Volver a comprar

    //desgloce del carrito + precio total + array de carrito de contexto
    <div>
      <h1>Carrito</h1>
      <h2>Precio total : ${precio_total}</h2>
      {/* <button onClick={handleClick}>click</button> */}
      {/* {change&&<p>esto es un texto</p>}      
      <input type="text" onChange={handleChange}></input> */}

      <CarritoLista carrito={carrito}/>
          <button className='botonSuma btn-primary' onClick={handleClick}>vaciar</button>



    </div>
  );
};

export default Cart;
