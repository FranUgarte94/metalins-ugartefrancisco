import { useState , useEffect } from "react"

const ItemCount = ({init,stock,onAdd}) => {

const [contador,setContador] = useState(init)
const [confirmado,setConfirmado] = useState(false)

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
    //onAdd(contador)
    setConfirmado(true)
}

const cerrarConfirmado = () => {
  setConfirmado(false)
}


if(!confirmado) {
  return (
    <div>
        <p>Unidades a comprar : {contador}</p>
        <button onClick={sumar} className="material-icons">add</button>
        <button onClick={confirmar}>Confirmar</button>
        <button onClick={restar} className="material-icons">remove</button>
    </div>
  )
} else {
  return (
    <div>
        <p>Unidades a comprar : {contador}</p>
        <button onClick={sumar} className="material-icons">add</button>
        <button onClick={confirmar}>Confirmar</button>
        <button onClick={restar} className="material-icons">remove</button>
        <h6 className="modalcss">Se confirmaron {contador} unidades!
        <button onClick={cerrarConfirmado}>Cerrar</button></h6>
    </div>
  )

}
}
export default ItemCount
