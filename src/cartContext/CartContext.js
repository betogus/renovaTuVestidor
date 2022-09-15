import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const clear = () => setCart([])

    const isToCart = (id) => cart.find(product => product.id === id ? true : false)

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id))

    const addItem = (item, quantity) => {
        let newCart; // creamos un carrito el cual luego se agregará al carrito original
        let productInCart = cart.find(product => product.id === item.id)
        if (productInCart) {
            productInCart.quantity += quantity;
             newCart = [...cart] //estamos creando un array con las mismas propiedades que el cart (nombre, cantidad, etc.)
        } else {
            productInCart = { ... item, quantity: quantity};
             newCart = [ ...cart, productInCart]
        }
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={[cart, clear, isToCart, removeItem, addItem]}>
            {children}
        </CartContext.Provider>
    )
} 

