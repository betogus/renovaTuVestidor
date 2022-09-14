
import React, {useState, useEffect, useContext} from "react";
import ItemDetail from "./itemDetail/ItemDetail" 
import Spinner from "../spinner/Spinner";
import { useParams } from "react-router-dom"; //esto me permite asignarle a una variable, el id que le pasamos a itemDetailContainer desde el itemList
import { ItemsContext } from "../../itemsContext";

const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [items, setItems] = useContext(ItemsContext)
  const [item, setItem] = useState([]);
  let itemFiltered; 
  let {id} = useParams(); //desestructuramos la variable id para obtener directamente el número que recibimos del itemList
  //useEffect(()=> {
  //setTimeout(()=> {
    
    itemFiltered = (items.filter(item => item.id === parseInt(id)))
    //setIsLoading(false)
    //},2000)
  //}, [id])

  return (
    <div className="d-flex justify-content-center">
      { (isLoading) ? <Spinner/> : itemFiltered.map((product) => <ItemDetail item = {product} key={product.key} />)}
    </div>
  )
}


  export default ItemDetailContainer