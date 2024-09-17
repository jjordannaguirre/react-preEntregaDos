import React from 'react'
import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({id, nombre, precio, watts, img, stock}) => {
 // creamos un estado local con la cantidad de productos agregados
  const [agregarCantidad, setAgregarCantidad] = useState(0)

  //cremaos una funcion manejadora de la cantidad:

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregador:" + cantidad)
  }

  return (
    <div className='contenedorItem'>
        <img src={img} alt={nombre} />
        <h2>Nombre: {nombre} </h2>
        <h3>Precio {precio} </h3>
        <h3>Consumo: {watts}w </h3>
        <h3>ID: {id}</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, labore. Facilis commodi harum eligendi eum amet quia nesciunt asperiores. </p>

        {
          //Acá empleamos la logica de montaje y desmotaje del contador

          agregarCantidad > 0 ? (<Link to="/cart"> Comprar </Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }

    </div>
  )
}

export default ItemDetail