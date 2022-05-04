import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { productosIniciales } from "./ItemListContainer"
import { BeatLoader } from "react-spinners"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

const ItemDetailContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [producto,setProducto] = useState({})
  const {id,test} = useParams()

  console.log({id,test})

  useEffect(()=>{

    console.log("Pido detalle de un solo producto :",id)

    toast.info("Cargando detalle...")

     const detalleProducto = productosIniciales.filter((item)=>{return item.id === id})

    console.log(detalleProducto)


    const pedidoDeDetalle = new Promise ((res)=>{
      setTimeout(()=>{
      res(detalleProducto)
      },2000)
    })

    pedidoDeDetalle
      .then(()=>{
        setCargando(false)
        setProducto(detalleProducto)
        toast.dismiss()
        toast.success("Detalle de Producto Cargado")
      })



  },[])

  if(cargando){
    return (
      <BeatLoader/>
    )
  }else{
    return (
      <>
        <ItemDetail key={producto.id} producto={producto}/>
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