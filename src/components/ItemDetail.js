import ItemCount from "./ItemCount"
import{Link } from 'react-router-dom'


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
            <Link to="/carrito" className="botonSuma btn-primary">Terminar Compra</Link>
            </button>
        </article>
    )
}


export default ItemDetail

