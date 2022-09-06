
import React, {useState, useEffect} from "react";
import ItemDetail from "./itemDetail/ItemDetail" 
import Spinner from "../spinner/Spinner";
import { useParams } from "react-router-dom"; //esto me permite asignarle a una variable, el id que le pasamos a itemDetailContainer desde el itemList

const ItemDetailContainer = () => {

  const [isLoading, setIsLoading] = useState(false) //esto es para el spinner
  const [item, setItem] = useState([]); 
  let {id} = useParams(); //desestructuramos la variable id para obtener directamente el número que recibimos del itemList
    useEffect(() => { 
      setIsLoading(true)
    setTimeout(()=> {
      fetch(`${process.env.REACT_APP_API_KEY}?id=${id}`)
    .then((response) => response.json())
    .then((data) => setItem(data))
    setIsLoading(false)
    },2000)
  }, [id])  //el useEffect se va a disparar cada vez que el id cambie

  return (
    <div className="d-flex justify-content-center">
      { (isLoading) ? <Spinner/> : item.map((product) => <ItemDetail item = {product} key={product.key} />)}
    </div>
  )
}


  export default ItemDetailContainer