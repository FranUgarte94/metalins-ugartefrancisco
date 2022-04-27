import Header from "./components/Header"
import Footer from "./components/Footer.js"
import Main from "./components/Main"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

/*
const pedido = fetch("https://fakestoreapi.com/products")
//console.log(pedido)

//Callback Hell
pedido
    .then((respuestaPedido)=>{
        //console.log(respuesta)
        // respuesta.text()
        //respuesta.blob()
        //respuesta.arrayBuffer()
        const productos = respuestaPedido.json()
        //console.log(productos)
        return productos
    })
    .then((respuestaConFormato)=>{
        console.log(respuestaConFormato)
    })
    .catch((err)=> {
        console.log(err)
    })

*/
const App = () => {
    return (
        <>
            <Header/>
            <Main>
            </Main>
            <Footer/>


        </>
    )
}

export default App