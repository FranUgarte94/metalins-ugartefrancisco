import { useState , } from "react"
import { Link } from "react-router-dom"

const Item = ({producto}) => {

  const [detalles,setDetalles] = useState(false)

  const detallesPrductos = () => {

    console.log(producto.id)

    setDetalles(true)
}

  return (
    <article className="cardItem">
        <h3>{producto.nombre}</h3>
        <img src="https://via.placeholder.com/300x300" alt=""/>
        <p>Precio : $ {producto.precio}</p>
        {/*<p>Categorias : {producto.categorias.map(categoria=>{
        return <span>{categoria}</span>
        })} </p>*/}
        <Link to={`/item/${producto.id}`} key={producto.id} className="botonSuma btn-primary">Ver Detalle</Link>


    </article>
  )
}

export default Item