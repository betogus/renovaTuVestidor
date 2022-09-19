import React, {createContext, useState} from 'react';

// 1 - Creamos el contexto y el state
export const ItemsContext = createContext();

const initialState = [
    {
        id: 1,
        img: "https://argentina-media.renuevatucloset.com/product/0135/13/thumb_13412319_product_medium.jpeg",
        name: "Anteojos",
        size: "Único",
        price: 1890,
        stock: 1,
        category: "accesorios",
        detail: "lentes de sol importados. nuevos con protección uv. modelo steampunk. se envían con nuestra eco funda de lino personalizada que sirve para transportar y proteger. rockandclothesrock",
        user: {
            logo: "https://argentina-media.renuevatucloset.com/user/0003/86/thumb_285895_user_small.jpeg",
            name : "RockAndLove" 
        }
    },
    {
        id: 2,
        img: "https://argentina-media.renuevatucloset.com/product/0135/20/thumb_13419916_product_medium.jpeg",
        name: "Pollera Stradivarius",
        size: "L",
        price: 8900,
        stock: 9,
        category: "adulto",
        detail: "pollera de jean importada, nueva con etiqueta de la marca. talle 42, tiro alto, demin rígido, botones en el frente, costuras en color marrón.",
        user: {
            logo: "https://argentina-media.renuevatucloset.com/user/0003/86/thumb_285895_user_small.jpeg",
            name : "RockAndLove" 
        }
    },
    

    {
        id: 3,
        img: "https://argentina-media.renuevatucloset.com/product/0135/13/thumb_13412231_product_medium.jpeg",
        name: "Calzado Mimo & Co.",
        size: 31,
        price: 3120,
        stock: 12,
        category: "kids",
        detail: "guillerminas con pulsera con abrojo, nuevas con caja y etiqueta",
        user: {
            logo: "https://argentina-media.renuevatucloset.com/user/0126/39/thumb_12538277_user_small.png",
            name: "andreita22"
        }
    },
    {
        id: 4,
        img: "https://argentina-media.renuevatucloset.com/product/0135/13/thumb_13412300_product_medium.jpeg",
        name: "Sweater",
        size: "Único",
        price: 5530,
        stock: 1,
        category: "adulto",
        detail: "sweater rayado oliva y natural, marca moka knit, nuevo, axila a axila 50 cm, largo 51 cm",
        user: {
            logo: "https://argentina-media.renuevatucloset.com/user/0126/39/thumb_12538277_user_small.png",
            name: "andreita22"
        }
    }
]
// 2 - Creamos el componente provider

export const ItemsProvider = ({children}) => {
    const [items, setItems] = useState(initialState);
    
      
    
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