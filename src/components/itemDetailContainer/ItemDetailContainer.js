
import React, {useState, useEffect, useContext} from "react";
import ItemDetail from "./itemDetail/ItemDetail" 
import Spinner from "../spinner/Spinner";
import { useParams } from "react-router-dom"; //esto me permite asignarle a una variable, el id que le pasamos a itemDetailContainer desde el itemList
import { ItemsContext } from "../../ItemsContext";
import BaseDeDatos from "../../baseDeDatos/BaseDeDatos.json"

const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [item, setItem] = useState({});
  const [items, setItems] = useState(BaseDeDatos);
  let {id} = useParams(); 
  
  
  useEffect(()=> {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve(items.find(product => product.id === parseInt(id)));
        setIsLoading(false)
      },2000)
    }) 
    promesa.then(data => {
      setItem(data)
    })
  }, [id, items])
  return (
    <div className="d-flex justify-content-center">
      { (isLoading) ? <Spinner/> : <ItemDetail product = {item} key={item.key} />}
    </div>
  )
}


  export default ItemDetailContainer