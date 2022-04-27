import ItemCount from "./ItemCount"

const Item = ({producto}) => {
  return (
    <article className="card">
        <h3>{producto.nombre}</h3>
        <img src="https://via.placeholder.com/300x300" alt=""/>
        <p>$ {producto.precio}</p>
        <p>Stock : {producto.stock}</p>
        <p>Categorias : {producto.categorias.map(categoria=>{
          return <span>{categoria}</span>
        })} </p>
        <button>Detalles</button>
        <ItemCount stock={producto.stock} init={1}/>

    </article>
  )
}

export default Item