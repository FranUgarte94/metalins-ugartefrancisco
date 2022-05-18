import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { BeatLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "./firebase";
import { collection , getDoc , doc , getDocs , addDoc , query } from "firebase/firestore"; 

const productosIniciales = [
  {
    id: 1,
    nombre: "Chapa #20",
    tamaño: "1220 x 2440",
    precio: 6500,
    stock: 200,
    categorias: "Chapas",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
  },
  {
    id: 2,
    nombre: "Chapa #18",
    tamaño: "1220 x 2440",
    precio: 8200,
    stock: 200,
    categorias: "Chapas",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
  },
  {
    id: 3,
    nombre: "Chapa #16",
    tamaño: "1220 x 2440",
    precio: 10100,
    stock: 200,
    categorias: "Chapas",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
  },
  {
    id: 4,
    nombre: "Perfil UPN",
    tamaño: "6 m",
    precio: 6500,
    stock: 200,
    categorias: "Perfiles",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
  },
  {
    id: 5,
    nombre: "Perfil IPN",
    tamaño: "6 m",
    precio: 8200,
    stock: 200,
    categorias: "Perfiles",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
  },
  {
    id: 6,
    nombre: "Perfil Angulo",
    tamaño: "6 m",
    precio: 10100,
    stock: 200,
    categorias: "Perfiles",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
  },
  {
    id: 7,
    nombre: "Caño redondo",
    tamaño: "6 m",
    precio: 9999,
    stock: 200,
    categorias: "Caños",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
  },
  {
    id: 8,
    nombre: "Caño cuadrado",
    tamaño: "6 m",
    precio: 8888,
    stock: 200,
    categorias: "Caños",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
  },
  {
    id: 9,
    nombre: "Caño rectangular",
    tamaño: "6 m",
    precio: 7888,
    stock: 200,
    categorias: "Caños",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
  },
  {
    id: 10,
    nombre: "Herraje A",
    tamaño: "100x100",
    precio: 9999,
    stock: 200,
    categorias: "Herrajes",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
  },
  {
    id: 11,
    nombre: "Herraje B",
    tamaño: "200x200",
    precio: 8988,
    stock: 200,
    categorias: "Herrajes",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
  },
  {
    id: 12,
    nombre: "Herraje C",
    tamaño: "300x300",
    precio: 7852,
    stock: 200,
    categorias: "Herrajes",
    imagen: "https://via.placeholder.com/300x300",
    cantPorProducto:0
  },
];

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  //console.log({id})



  useEffect(() => {


    // toast.info("Cargando detalle...");

    const productosCollection = collection(db,"productos")
    const consulta = getDocs(productosCollection)
    //console.log(consulta)



    consulta
      .then((resultado)=>{
      

        //console.log(resultado.docs)


      // const detalleProducto = productosIniciales.filter((producto) => {
      // return producto.id == id;
      // })[0];



        const detalleProducto = resultado.docs.filter(doc=>{

          const productoConId = doc.data()
          productoConId.id = doc.id

          return productoConId.id === id;
        })[0];

        setProducto(detalleProducto)
        setCargando(false)


        // toast.dismiss();
        // toast.success("Detalle de Producto Cargado");
      })
      .catch((error)=>{

      })
      .finally(()=>{

      })







    // //console.log("Pido detalle de un solo producto :",id)

    // toast.info("Cargando detalle...");

    // const detalleProducto = productosIniciales.filter((producto) => {
    //   return producto.id == id;
    // })[0];

    // //console.log(detalleProducto)

    // //console.log(producto.id)

    // const pedidoDeDetalle = new Promise((res) => {
    //   setTimeout(() => {
    //     res(detalleProducto);
    //   }, 2000);
    // }).then(() => {
    //   setCargando(false);
    //   setProducto(detalleProducto);
    //   toast.dismiss();
    //   toast.success("Detalle de Producto Cargado");
    // });




  });

  return (
    <>  
      {cargando ? <BeatLoader /> : <ItemDetail key={producto.id} producto={producto} />}
    </>
  )

};

export default ItemDetailContainer;


/*
  if (cargando) {
    return <BeatLoader />;
  } else {
    return (
      <>
        <ItemDetail key={producto.id} producto={producto} />
      </>
    );
  }
  */