import React from 'react'

const CartItems = ({product}) => {
  return (
    <div>
        <p>Nombre: {product.name}</p>
        <p>Cantidad: {product.stock}</p>

    </div>
  )
}

export default CartItems