import React from 'react'


const ItemDetail = (props) => {


      return(
        <article className="">
        <h3>{props.nombre}</h3>
        <img  src={props.imagen} alt=""/>
        <p>$ {props.precio}</p>
        <p>Stock : {props.stock}</p>
        <p>Medidas : {props.tamaño}</p>
    </article>
      )
    }

export default ItemDetail

/*         <p>Categorias : {producto.categorias.map(categoria=>{
          return <span>{categoria}</span>
        })} </p>

        */