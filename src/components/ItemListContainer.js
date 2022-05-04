import { useEffect , useState } from "react"
import ItemList from "./ItemList"
import { BeatLoader } from "react-spinners"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"


export const productosIniciales = [

  {
    id : 1,
    nombre : "Chapa #20",
    tamaño : "1220 x 2440",
    precio : 6500,
    stock : 200,
    categorias : "Chapas",
    imagen : "https://via.placeholder.com/300x300"

  },
  {
    id : 2,
    nombre : "Chapa #18",
    tamaño : "1220 x 2440",
    precio : 8200,
    stock : 200,
    categorias : "Chapas",
    imagen : "https://via.placeholder.com/300x300"
    
  },
  {
    id : 3,
    nombre : "Chapa #16",
    tamaño : "1220 x 2440",
    precio : 10100,
    stock : 200,
    categorias : "Chapas",
    imagen : "https://via.placeholder.com/300x300"
    
  },
  {
    id : 4,
    nombre : "Perfil UPN",
    tamaño : "6 m",
    precio : 6500,
    stock : 200,
    categorias : "Perfiles",
    imagen : "https://via.placeholder.com/300x300"

  },
  {
    id : 5,
    nombre : "Perfil IPN",
    tamaño : "6 m",
    precio : 8200,
    stock : 200,
    categorias : "Perfiles",
    imagen : "https://via.placeholder.com/300x300"
    
  },
  {
    id : 6,
    nombre : "Perfil Angulo",
    tamaño : "6 m",
    precio : 10100,
    stock : 200,
    categorias : "Perfiles",
    imagen : "https://via.placeholder.com/300x300"
    
  },
  {
    id : 7,
    nombre : "Caño redondo",
    tamaño : "6 m",
    precio : 9999,
    stock : 200,
    categorias : "Caños",
    imagen : "https://via.placeholder.com/300x300"
    
  },
  {
    id : 8,
    nombre : "Caño cuadrado",
    tamaño : "6 m",
    precio : 8888,
    stock : 200,
    categorias : "Caños",
    imagen : "https://via.placeholder.com/300x300"
    
  },
  {
    id : 9,
    nombre : "Caño rectangular",
    tamaño : "6 m",
    precio : 7888,
    stock : 200,
    categorias : "Caños",
    imagen : "https://via.placeholder.com/300x300"
    
  },
  {
    id : 10,
    nombre : "Herraje A",
    tamaño : "100x100",
    precio : 9999,
    stock : 200,
    categorias : "Herrajes",
    imagen : "https://via.placeholder.com/300x300"
    
  },
  {
    id : 11,
    nombre : "Herraje B",
    tamaño : "200x200",
    precio : 8988,
    stock : 200,
    categorias : "Herrajes",
    imagen : "https://via.placeholder.com/300x300"
    
  },
  {
    id : 12,
    nombre : "Herraje C",
    tamaño : "300x300",
    precio : 7852,
    stock : 200,
    categorias : "Herrajes",
    imagen : "https://via.placeholder.com/300x300"
    
  },
]

const ItemListContainer = ({children,apellido}) => {

  const [cargando,setCargando] = useState(true)
  const [producto,setProducto] = useState([])
  const {nombreCategoria,test} = useParams()

  console.log({nombreCategoria,test})


  useEffect(()=>{

    if(nombreCategoria===undefined){
      console.log("Pido todos los productos")

      toast.info("Cargando productos...")
    
    const pedido = new Promise ((res)=>{
      setTimeout(()=>{
      res(productosIniciales)
      },2000)
    })

    pedido
      .then(()=>{
        setCargando(false)
        setProducto(productosIniciales)
        toast.dismiss()
        toast.success("Productos Cargados")
      })
    } 
    
    else {
      console.log("Pido los productos de la categoria :",nombreCategoria)

      toast.info("Cargando productos...")

      const productosFiltrados = productosIniciales.filter(categoria=>categoria.categorias === nombreCategoria)

      console.log(productosFiltrados)


      const pedidoPorCategorias = new Promise ((res)=>{
        setTimeout(()=>{
        res(productosFiltrados)
        },2000)
      })
  
      pedidoPorCategorias
        .then(()=>{
          setCargando(false)
          setProducto(productosFiltrados)
          toast.dismiss()
          toast.success("Productos Cargados")
        })

    }

    


  },[nombreCategoria])

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