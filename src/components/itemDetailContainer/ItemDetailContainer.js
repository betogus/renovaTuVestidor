
import React, {useState, useEffect} from "react";
import ItemDetail from "./itemDetail/ItemDetail" 
import Spinner from "../spinner/Spinner";

const ItemDetailContainer = () => {

  const [isLoading, setIsLoading] = useState(false)

  const [item, setItem] = useState([]); 
    useEffect(() => { 
      setIsLoading(true)
    setTimeout(()=> {
      fetch(`${process.env.REACT_APP_API_KEY}`)
    .then((response) => response.json())
    .then((data) => setItem(data[0]))
    setIsLoading(false)
    },2000)
  }, []) 

  return (
    <div className="d-flex justify-content-center">
      {isLoading ? <Spinner/> : <ItemDetail item = {item}/>}
    
</div>
  )
}

  export default ItemDetailContainer