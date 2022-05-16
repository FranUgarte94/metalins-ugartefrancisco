import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { collection , getDoc , doc , getDocs , addDoc , query } from "firebase/firestore"; 

export const productosIniciales = [
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

const ItemListContainer = ({ children, apellido }) => {
  const [cargando, setCargando] = useState(true);
  const [producto, setProducto] = useState([]);
  const { nombreCategoria, test } = useParams();

  //console.log({nombreCategoria,test})

  useEffect(() => {

    /*
    const productosCollection = collection(db,"productos")
    const consulta = getDocs(productosCollection)
    //console.log(consulta)

    consulta
      .then((resultado)=>{
        //console.log(resultado.docs)

        const productos = resultado.docs.map(doc=>{

          const productoConId = doc.data()
          productoConId.id = doc.id

          return productoConId
        })

        setProducto(productos)
        setCargando(false)

        //console.log(productos)
      })
      .catch((error)=>{

      })
      .finally(()=>{

      })
*/


    //console.log("Pido todos los productos")
    toast.info("Cargando productos...");
    const pedido = new Promise((res) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 2000);
    }).then(() => {
      if (nombreCategoria === undefined) {
        setCargando(false);
        setProducto(productosIniciales);
        toast.dismiss();
        toast.success("Productos Cargados");
      } else {
        //console.log("Pido los productos de la categoria :",nombreCategoria)

        toast.info("Cargando productos...");

        setProducto(
          productosIniciales.filter(
            (categoria) => categoria.categorias === nombreCategoria
          )
        );
        setCargando(false);
        toast.dismiss();
        toast.success("Productos Cargados");
      }
    });
  }, [nombreCategoria]);

  return (
    <>
      {cargando ? <BeatLoader /> : <ItemList producto={producto} />}
    </>
  )


};

export default ItemListContainer;


/*
if (cargando) {
  return <BeatLoader />;
} else {
  return <ItemList producto={producto} />;
}
*/