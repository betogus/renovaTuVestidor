import { addDoc, query, collection  } from 'firebase/firestore';
import React, {createContext, useState, useContext} from 'react';
import { db } from '../../firebase/firebaseConfig';
import { useCartContext } from '../cartContext/CartContext';
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
  };

  export const UserProvider = ({children}) => {
    const [user, setUser] = useState();
    const {cart, clear, totalPrice} = useCartContext();
    
    

    const addUserItems =  async () => {

        if (user) {
          const order = {
            buyer: {
                name: user.name,
                email: user.email,
                phone: user.phone
            },
            items: cart.map(product => ({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
            total: totalPrice(),
            date: Date.now()
        }
        console.log(order)
            const q = query(collection(db, 'orders'))
            const docRef = await addDoc(q, {...order})

            Toastify({
                text: `¡Orden de compra finalizada! El id de su compra es ${docRef.id}`,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
           clear()
        } else {
            Toastify({
                text: `No se encuentra logueado`,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
        }
    }  
    


    
    return (
        <UserContext.Provider value={{user, setUser, addUserItems}}>
            {children}
        </UserContext.Provider>
    )
} 

