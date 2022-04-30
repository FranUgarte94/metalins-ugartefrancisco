import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

export const productosIniciales = [

  {
    id : 1,
    nombre : "Chapa #20",
    tamaño : "1220 x 2440",
    precio : 6500,
    stock : 200,
    categorias : ["chapas", "aceros"],
    imagen : "https://www.mismarcas.com/wp-content/uploads/2019/10/camiseta-mismarcas-nike-air-max-1-negra-1.jpg"

  },
  {
    id : 2,
    nombre : "Chapa #18",
    tamaño : "1220 x 2440",
    precio : 8200,
    stock : 200,
    categorias : ["chapas", "aceros"],
    imagen : "https://www.mismarcas.com/wp-content/uploads/2019/10/camiseta-mismarcas-nike-air-max-1-negra-1.jpg"
    
  },
  {
    id : 3,
    nombre : "Chapa #16",
    tamaño : "1220 x 2440",
    precio : 10100,
    stock : 200,
    categorias : ["chapas", "aceros"],
    imagen : "https://www.mismarcas.com/wp-content/uploads/2019/10/camiseta-mismarcas-nike-air-max-1-negra-1.jpg"
    
  }
]




const ItemDetailContainer = () => {

  const [producto,setProducto] = useState({})
  const [cargando,setCargando] = useState(true)


  useEffect(()=>{
    
    const promesa = new Promise ((res)=>{
      setTimeout(()=>{
      res(productosIniciales)
      },2000)
    })
      .then(()=>{
        setCargando(false)
        setProducto(productosIniciales)
      })
  },[])

  if(cargando){
    return(
      <p>Cargando...</p>
    ) 
  }else{
    return(
    <ItemDetail key={productosIniciales[0].id} productos={producto}
    imagen={productosIniciales[0].imagen}
    titulo={productosIniciales[0].titulo}
    precio={productosIniciales[0].precio}
    />
    )
  }
  }

  export default ItemDetailContainer




  /*
  
const ItemDetailContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [productos,setProductos] = useState({})

  useEffect(()=>{
    
    const pedido = new Promise ((res)=>{
      setTimeout(()=>{
      res(productosIniciales)
      },2000)
    })

    pedido
      .then(()=>{
        console.log("Termino el pedido bien")
        setCargando(false)
        setProductos(productosIniciales)
      })
  },[])

  if(cargando){
    return(
      <p>Cargando...</p>
    ) 
  }else{
    return(
    <ItemDetail productos={productos}/>
    )
  }
  }

  export default ItemDetailContainer
  */