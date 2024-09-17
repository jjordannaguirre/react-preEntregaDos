import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div>
        <img className='carrito' src="/img/carrito.jpg" alt="Carrito de compras" />
        <strong>0</strong>
    </div>
  )
}

export default CartWidget