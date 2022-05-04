import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { productosIniciales } from "./ItemListContainer"
import { BeatLoader } from "react-spinners"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [producto,setProducto] = useState({})
  const {id} = useParams()

  useEffect(()=>{
    //console.log("Pido el producto con id: ",id)
    //console.log("Tengo los productos iniciales: ",productosIniciales)
    const resultado = productosIniciales.filter((producto)=>{
      return producto.id == id
    })[0]
    setProducto(resultado)
    setCargando(false)
    //aca hago el pedido (la promesa con el timeout de 2 seg)
  })

  if(cargando){
    return (
      <BeatLoader/>
    )
  }else{
    return (
      <>
        <ItemDetail/>
      </>
    )
  }
}

export default ItemDetailContainer



//1) quiero mostrar la pagina lo antes posible y que el usuario sepa que tiene que esperar
//2) Quiero pedir el detalle del producto mientras el ususario espera
//3) Quiero avisar al usuario que termino el pedido y mostrar la info que consegui del producto

/*

const ItemDetailContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [producto,setProducto] = useState({})
  const {id} = useParams()

  useEffect(()=>{

   
   const pedido = new Promise ((res)=>{
     setTimeout(()=>{
     res(productosIniciales)
     },3000)
   })

   pedido
     .then(()=>{
       console.log("Termino el pedido bien")
       setCargando(false)
       setProducto(productosIniciales)
     })
 },[])

 if(cargando){
   return(
     <BeatLoader/>
   ) 
 }else{
   return(
   <ItemDetail producto={producto} 
    key={producto[0].id}
    imagen={producto[0].imagen}
    nombre={producto[0].nombre}
    precio={producto[0].precio}
    stock={producto[0].stock}
   
   />
   )
 }
}

export default ItemDetailContainer



//1) quiero mostrar la pagina lo antes posible y que el usuario sepa que tiene que esperar
//2) Quiero pedir el detalle del producto mientras el ususario espera
//3) Quiero avisar al usuario que termino el pedido y mostrar la info que consegui del producto

*/