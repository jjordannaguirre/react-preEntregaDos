import { useState } from "react"
import './contador.css'


const Contador = ({ inicial, stock, funcionAgregar }) => {

    const [contador, setContador] = useState(inicial)

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }

    return (
        <>
            <div className="agregarAlCarrito">
                <div>
                    <button onClick={restarContador}> - </button>
                    <strong>{contador}</strong>
                    <button onClick={sumarContador}> + </button>
                </div>

                <button onClick={() => funcionAgregar(contador)}> Agregar al carrito</button>
            </div>
        </>
    )
}

export default Contador