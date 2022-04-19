// btn.addEventListener("click", () => {})
import { useState , useEffect } from "react"

const Presentacional = (props) => {

  const resultado = useState(0)

  const [contador,setContador] = useState(0)
  const [dark,setDark] = useState(false)
  
  useEffect(()=>{
    console.log("Nuevo render")
    console.log("Hago un pedido a una BD para productos")
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

  const toggleDark = () => {
    setDark(!dark)
    // ! significa lo contrario a
  }

  console.log(dark)

  return (
    <div>
      <p>Contador Actual : {contador}</p>
      <p>Modo dark : {dark}</p>
      <button onClick={aumentarContador}>click</button>
      <button onClick={toggleDark}>toogle dark</button>
    </div>
  )
}

export default Presentacional