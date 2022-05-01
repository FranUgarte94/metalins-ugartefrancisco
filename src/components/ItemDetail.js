
const ItemDetail = (producto) => {


    return (
        <article>   
            <h1>Detalle del producto</h1>


            <h3>Titulo : {producto.nombre}</h3>
            <h4>Precio : $ {producto.precio}</h4>
            <img src={producto.imagen} alt=""/>
            <p>Stock disponible : {producto.stock}</p>
            <p>Codigo de producto : {producto.id}</p>
        </article>
    )

  }
  
  export default ItemDetail