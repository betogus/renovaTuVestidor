import React, { useContext } from 'react'
import { CartContext } from '../../cartContext/CartContext'
import CartItems from './CartItems';

const Cart = () => {

  const [cart, clear, isToCart, removeItem, addItem] = useContext(CartContext);

  return (
    <div>
      <h1 className="text-center">Cart</h1>
      {console.log(cart)}
       {cart.map((product) => console.log(product))} 
    </div>
  )
}

export default Cart