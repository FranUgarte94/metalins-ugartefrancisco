import ItemCount from "./ItemCount"

const ItemDetail = (producto) => {


    return (
        <article className="card cardDetail">   
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