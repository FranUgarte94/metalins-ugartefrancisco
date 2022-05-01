import { useEffect , useState } from "react"
import ItemList from "./ItemList"
import { BeatLoader } from "react-spinners"
import { toast } from "react-toastify"

export const productosIniciales = [

  {
    id : 1,
    nombre : "Chapa #20",
    tamaño : "1220 x 2440",
    precio : 6500,
    stock : 200,
    categorias : ["chapas", "aceros"],
    imagen : "https://via.placeholder.com/300x300"

  },
  {
    id : 2,
    nombre : "Chapa #18",
    tamaño : "1220 x 2440",
    precio : 8200,
    stock : 200,
    categorias : ["chapas", "aceros"],
    imagen : "https://via.placeholder.com/300x300"
    
  },
  {
    id : 3,
    nombre : "Chapa #16",
    tamaño : "1220 x 2440",
    precio : 10100,
    stock : 200,
    categorias : ["chapas", "aceros"],
    imagen : "https://via.placeholder.com/300x300"
    
  }
]

const ItemListContainer = ({children,apellido}) => {

  const [cargando,setCargando] = useState(true)
  const [producto,setProducto] = useState([])

  useEffect(()=>{

     toast.info("Cargando productos...")
    
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
        toast.dismiss()
        toast.success("Productos Cargados")
      })
  },[])

  if(cargando){
    return(
      <BeatLoader/>
    ) 
  }else{
    return(
    <ItemList producto={producto}/>
    )
  }
}

  export default ItemListContainer

  /*
  const [productos, setProductos] = useState([])

  useEffect(()=> {

    const promesa = new Promise((res,rej)=>{
      res(productosDeBaseDeDatos)

  })
  
  .then((contenido)=>{
    console.log("Salio bien")
  })
  .catch((error)=>{
    console.log("Salio mal")
  })
  
  setTimeout(()=>{
       //console.log("Recibo productos!")
       //console.log(productosDeBaseDeDatos)
       setProductos(productosDeBaseDeDatos)
 },2000)  
  //console.log("Pido productos...")


  },[])

*/




    /*

          <div>
              <ul>
                  {productos.map((producto)=>{
                    //console.log(producto,indice)
                    return <li key={producto.id}>{producto.nombre}</li>

                  })}
              </ul>
          </div>

          */

          

  /*
      return (

      
      <>



            <h2>¡Hola {apellido}!</h2>
      <h2 className="main">Productos</h2> 



  
  <div className="card main">
      
        <div className="card-body">
          <h5 className="card-title">Chapas</h5>
          <p className="card-text">Todo tipo de chapas, en variedad de espesores y terminaciones</p>

          <ItemCount stock={10} init={1} onAdd={onAdd}/>





      </div>
  </div>
  
  <div className="card main">
      
      <div className="card-body">
        <h5 className="card-title">Caños</h5>
        <p className="card-text">Caños redondos, cuadrados y rectangulares.</p>
        
  </div>
  </div>
  
  <div className="card main">
      
      <div className="card-body">
        <h5 className="card-title">Perfiles</h5>
        <p className="card-text">UPN, IPN, perfil C, etc</p>
        
  </div>
  </div>
      
      
      
      </>
    )
    */