import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({defaultValue= [], children}) => {
    const [cart, setCart] = useState(defaultValue);
    const [totalQuantity, setTotalQuantity] = useState(0)

    const clear = () => {
        setCart([])
        setTotalQuantity(0)
    }

    const isInCart = (id) => cart.find(product => product.id === id)

    const removeItem = (id) => {
        const newCart =[...cart].map(item => item.id !== id);
        setCart(newCart);
        setTotalQuantity(-1)
    };

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = [...cart]
            for (const product of newCart) {
                if (product.item.id === item.id) {
                    product.quantity += quantity;
                }
            } 
            setCart(newCart)
        } else {
            setCart([...cart, {item: item, quantity:quantity}])
            setTotalQuantity(+1)
        }
    }

    

    return (
        <CartContext.Provider value={[cart, {addItem}, clear, removeItem, isInCart, totalQuantity]}>
            {children}
        </CartContext.Provider>
    )
} 

