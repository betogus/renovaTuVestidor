import React, {createContext, useState, useEffect} from 'react';
import { collection, query, where, getDocs} from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

// 1 - Creamos el contexto y el state
export const ItemsContext = createContext();

const getProducts = async () => {
    const q = query(collection(db, 'products'))
    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({...doc.data(), id: doc.id})
    });
  }
  
// 2 - Creamos el componente provider

export const ItemsProvider = ({children}) => {
    const [items, setItems] = useState(getProducts);
    
      
    
    // 3 - retornamos nuestro context con un .provider

    return (
        <ItemsContext.Provider value={[items, setItems]}>
            {/* 4 - Dentro de ItemsContext.Provider pasamos los children*/}
            {children}
        </ItemsContext.Provider>
    )
}

// 5 - importamos nuestro High Order Component Provider (ItemsProvider) y envolvemos nuestra App

// 6 - importamos ItemsContext a nuestra ItemListContainer y creamos una constante la cual le pasamos useContext

// 7 - hacemos el paso 6 para cualquier componente que querramos pasarle esa info. 
// Podemos hacer que al comprar, disminuya el stock en el ItemsContext.Provider usando setItems