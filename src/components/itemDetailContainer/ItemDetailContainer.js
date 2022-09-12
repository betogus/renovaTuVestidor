
import React, {useState, useEffect} from "react";
import ItemDetail from "./itemDetail/ItemDetail" 
import Spinner from "../spinner/Spinner";
import { useParams } from "react-router-dom"; //esto me permite asignarle a una variable, el id que le pasamos a itemDetailContainer desde el itemList

const ItemDetailContainer = ({items, setItems, isLoading, setIsLoading}) => {

  const [item, setItem] = useState([]); 
  let {id} = useParams(); //desestructuramos la variable id para obtener directamente el número que recibimos del itemList
  //setTimeout(()=> {
    setItem(items.filter(item => item.id === id))
    setIsLoading(false)
    //},2000)
  

  return (
    <div className="d-flex justify-content-center">
      { (isLoading) ? <Spinner/> : item.map((product) => <ItemDetail item = {product} key={product.key} />)}
    </div>
  )
}


  export default ItemDetailContainer