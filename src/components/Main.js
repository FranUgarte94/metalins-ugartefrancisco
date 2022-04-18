import acero from "../images/acero.png"

const Main = ({children,nombre}) => {




  return (
    <main className="main">


        ¡Bienvenido {nombre}!
        {children}
        <h2>El mejor buscador de Insumos Metalurgicos del país.</h2> 
        <h3>¡Busca, cotiza y compra con nosotros!</h3>
        <img src={acero} />
        

    </main>
  )
}

export default Main