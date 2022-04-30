import { Route , Routes } from "react-router-dom"
import acero from "../images/acero.png"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"



const Main = () => {




  return (
    <main className="main">

        <h2>El mejor buscador de Insumos Metalurgicos del país.</h2> 
        <h3>¡Busca, cotiza y compra con nosotros!</h3>
        <img className="imagenMain" src={acero} />
        <ItemListContainer apellido="Ugarte"/>
        <ItemDetailContainer/>

        

    </main>
  )
}

export default Main