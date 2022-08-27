
import React, {useState, useEffect} from "react";
import Item from './Item/Item'

const ItemList = () => {
    const [items, setItems] = useState([]); //Creamos un array donde luego lo cargamos con info
    useEffect(() => { // al momento de renderizar, el useEffect se dispara
      setTimeout(()=> {
        fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setItems(data))
      },2000)
    }, []) // Traemos de la api los users y los cargamos en el array
    

    return (
        <>
        {items.map((item) => {
            if (item.id < 9) {
                return (
                    <Item 
                    key = {item.id}
                    data = {item}
                    />
                )
            }
        })
        }
        </>
    )
}

export default ItemList