import ItemList from "./itemList/ItemList";
import React, {useState, useEffect} from "react";
import Spinner from "../spinner/Spinner";
import { useParams } from "react-router-dom"; //esto me permite asignarle a una variable, el id que le pasamos a itemDetailContainer desde el itemList




const ItemListContainer = () => {
  const [items, setItems] = useState([]); //Creamos un array donde luego lo cargamos con info
  const [isLoading, setIsLoading] = useState(false) //esto es para el spinner
  let {categoryId, nameId} = useParams();



    useEffect(() => { // al momento de renderizar, el useEffect se dispara
        setIsLoading(true)
        if (categoryId) {
      setTimeout(()=> {
        fetch(`${process.env.REACT_APP_API_KEY}?category=${categoryId}`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      setIsLoading(false)
      },1000)
    } else if (nameId) {
      setTimeout(()=> {
        fetch(`${process.env.REACT_APP_API_KEY}?name=${nameId}`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      console.log(nameId)
      setIsLoading(false)
    }, 1000)
  }  else {
      setTimeout(()=> {
        fetch(`${process.env.REACT_APP_API_KEY}`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      setIsLoading(false)
      },1000)
    }

  }, [categoryId, nameId]) // Traemos de la api los users y los cargamos en el array

  
  return (
    <div>
      { (isLoading) ? <Spinner/> : <div className="d-flex"><ItemList items = {items} /></div>}
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