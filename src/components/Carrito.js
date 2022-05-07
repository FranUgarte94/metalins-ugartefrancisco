import React, { useContext } from 'react'
import { contexto } from './miContexto'

const Carrito = () => {

  const {precio_total, carrito, vaciarCarrito} = useContext(contexto)
//console.log({precio_total, carrito})

  return (
    <div>
      <p>Carrito</p>
      <p>Precio total : $ {precio_total}</p>
    </div>
  )
}

export default Carrito