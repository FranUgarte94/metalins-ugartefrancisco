import { useState , useEffect } from "react"

const ItemCount = ({init,stock,onAdd}) => {

const [contador,setContador] = useState(init)

const sumar = () => {

    if(contador < stock) {
        setContador(contador+1)
    }


}

const restar = () => {

    if(contador > 0)
    setContador(contador-1)
}

const confirmar = () => {
    console.log(contador)
    onAdd(contador)
}



  return (
    <div>
        <p>Unidades a comprar : {contador}</p>
        <button onClick={sumar} className="material-icons">add</button>
        <button onClick={confirmar}>Confirmar</button>
        <button onClick={restar} className="material-icons">remove</button>
    </div>
  )
}

export default ItemCount













/*import { useState , useEffect } from "react"


const ItemCount = (props) => {


// btn.addEventListener("click", () => {})

  const resultado = useState(1)

  const [contador,setContador] = useState(1)
  //const [dark,setDark] = useState(false)

  
  useEffect(()=>{
    //console.log("Nuevo render")
    //console.log("Hago un pedido a una BD para productos")
  },[])

  //console.log(resultado)
  //const contador = resultado[0]
  //const setContador = resultado[1]

  // Estado de un componente : Es una variable interna de un componente
  // que guarda un valor a traves del tiempo

  //const contador = 0

  const aumentarContador = () => {
    //contador = contador + 1
    //contador++
    //const p = document.querySelector('p')
    //p.innerText = contador

    
    setContador(contador + 1)
  }

  const stockProductos = 5

  const restarContador = () => {

    setContador(contador - 1)
  }

  const agregarAlCarrito = () => {

  }

  /*const toggleDark = () => {
    setDark(!dark)
    // ! significa lo contrario a
  }

  console.log(dark)

*/

/*

  return (
    <div>
      <p className="cantidad" initial="1">Cantidad : {contador}</p>
      <button className="btn-primary letraBlanca botonSuma" onClick={aumentarContador}>+</button>
      <button className="btn-primary letraBlanca botonSuma" onClick={restarContador}>-</button>
      <button className="btn-primary letraBlanca botonSuma" onClick={agregarAlCarrito}>Agregar al Carrito</button>
    </div>
  )


}
//<button onClick={toggleDark}>toogle dark</button>


export default ItemCount
*/