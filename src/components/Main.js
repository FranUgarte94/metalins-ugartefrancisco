import Container from "./Container"
import acero from "../images/acero.png"
import ItemListContainer from "./ItemListContainer"


const Main = () => {




  return (
    <main className="main">



        <Container/>
        <h2>El mejor buscador de Insumos Metalurgicos del país.</h2> 
        <h3>¡Busca, cotiza y compra con nosotros!</h3>
        <img src={acero} />
        <ItemListContainer apellido="Ugarte"/>
        

    </main>
  )
}

export default Main