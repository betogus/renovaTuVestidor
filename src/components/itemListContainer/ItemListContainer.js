import CardComponent from "./cardComponent/CardComponent";
import React, {useState, useEffect} from "react";
import {usuarios} from "../../baseDeDatos/BaseDeDatos"


const ItemListContainer = () => {
  const [items, setItems] = useState([]); //Creamos un array donde luego lo cargamos con info
    useEffect(() => { // al momento de renderizar, el useEffect se dispara
    setTimeout(()=> {
      fetch(`${process.env.REACT_APP_API_KEY}`)
    .then((response) => response.json())
    .then((data) => setItems(data))
    },2000)
  }, []) // Traemos de la api los users y los cargamos en el array

  const [initial, setInitial] = useState(0)
  const [stock, setStock] = useState(usuarios.usuario1.clothes[0].stock)
  const [counter, setCounter] = useState(initial)

  const onAdd = (counter, stock, initial) => {
    console.log(`Hay ${initial} productos en tu carrito. Se añadieron ${counter}. Stock: ${stock-counter}`);
    setInitial(initial + counter);
    setStock (stock - counter);
    setCounter(0);
}

  return (
    

        <div className="d-flex">
          <CardComponent 
          items = {items}
          stock = {stock}
          initial = {initial}
          onAdd = {onAdd}
          logoUsuario = {usuarios.usuario1.logo}
          nombreUsuario = {usuarios.usuario1.name}
          nombreRopa = {usuarios.usuario1.clothes[0].name}
          imgRopa = {usuarios.usuario1.clothes[0].img}
          precioRopa = {usuarios.usuario1.clothes[0].price}
          tamanioRopa = {usuarios.usuario1.clothes[0].size}
          />
            
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