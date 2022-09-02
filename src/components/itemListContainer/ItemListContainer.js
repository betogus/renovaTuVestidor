import ItemList from "./itemList/ItemList";
import React, {useState, useEffect} from "react";


const ItemListContainer = () => {

  const [items, setItems] = useState([]); //Creamos un array donde luego lo cargamos con info
    useEffect(() => { // al momento de renderizar, el useEffect se dispara
    setTimeout(()=> {
      fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((data) => setItems(data))
    },2000)
  }, []) // Traemos de la api los users y los cargamos en el array

    return (
        <div>
          <ItemList
          items= {items}/>
      </div>
    )
}

export default ItemListContainer

/* 
en vez de usar fetch, podemos instalar axios y hacer lo siguiente:

import axios from "axios"

useEffect(() => { 
    setTimeout(()=> {
axios.get ('https://jsonplaceholder.typicode.com/photos').then(res) => console.log(res.data)
 },2000)
  }, []) 
*/