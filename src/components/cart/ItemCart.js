import React from 'react'
import { useCartContext } from '../../Context/cartContext/CartContext'



const ItemCart = ({product}) => {

    const {removeItem} = useCartContext();

  return (
    <div className='d-flex' style={{height: 300, width:400, border: "1px solid"}}>
      <img src={product.img} alt={product.name} style={{objectFit: "contain"}}></img>
        <div key={product.id} style={{paddingLeft: 20}}>
          <p>Nombre: {product.name}</p>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio: {product.price}</p>
          <p>Subtotal: {product.price*product.quantity}</p>
          <button onClick={() => removeItem(product.id)}>Borrar</button> 
        </div>
      </div>
  )
}

export default ItemCart