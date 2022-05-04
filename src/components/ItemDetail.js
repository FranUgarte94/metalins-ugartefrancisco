import {useState} from 'react'
import ItemCount from "./ItemCount"
import{Link , NavLink} from 'react-router-dom'


const ItemDetail = ({producto}) => {


    return (
        <article className="card cardDetail"> 
            {/*<button onClick={handleClick}>click</button>*/}
            <h1>Detalle del producto</h1>
            <h3>Titulo : {producto.nombre}</h3>
            <h4>Precio : $ {producto.precio}</h4>
            <img src={producto.imagen} alt=""/>
            <p>Stock disponible : {producto.stock}</p>
            <p>Codigo de producto : {producto.id}</p>
            <p>Categoria : {producto.categorias}</p>
            <ItemCount stock={producto.stock} init={1}/>
            <button>
            <Link to="/" className="botonSuma btn-primary">Terminar Compra</Link>
            </button>
        </article>
    )
}


export default ItemDetail

/*import ItemCount from "./ItemCount"

const ItemDetail = (producto) => {

    const handleClick = (a) => {

        console.log(a)

    }




    return (
        <article className="card cardDetail"> 
            <button onClick={()=>handleClick("Click")}>click</button>  
            <button onClick={handleClick}>click</button>
            <h1>Detalle del producto</h1>
            <h3>Titulo : {producto.nombre}</h3>
            <h4>Precio : $ {producto.precio}</h4>
            <img src={producto.imagen} alt=""/>
            <p>Stock disponible : {producto.stock}</p>
            <p>Codigo de producto : {producto.id}</p>
            <ItemCount stock={producto.stock} init={1}/>
        </article>
    )

  }
  
  export default ItemDetail

  */