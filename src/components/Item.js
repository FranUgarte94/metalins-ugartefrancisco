import ItemCount from "./ItemCount"
import { useState , useEffect } from "react"

const Item = ({producto}) => {

  const [detalles,setDetalles] = useState(false)

  const detallesPrductos = () => {

    console.log(producto.id)

    setDetalles(true)
}

  return (
    <article className="card">
        <h3>{producto.nombre}</h3>
        <img src="https://via.placeholder.com/300x300" alt=""/>
        <p>$ {producto.precio}</p>
        <p>Stock : {producto.stock}</p>
        <p>Categorias : {producto.categorias.map(categoria=>{
          return <span>{categoria}</span>
        })} </p>
        <button key={producto.id} onClick={detallesPrductos} className="botonSuma">Detalles</button>
        <ItemCount stock={producto.stock} init={1}/>

    </article>
  )
}

export default Item