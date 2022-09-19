import ItemList from "./itemList/ItemList";
import { useParams } from "react-router-dom"; 
import { useEffect, useContext, useState } from "react";
import { ItemsContext } from "../../ItemsContext";
import Spinner from "../spinner/Spinner";



const ItemListContainer = () => {
  let {categoryId, nameId} = useParams();
  const [items, setItems] = useContext(ItemsContext);
  const [itemsFiltered, setItemsFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=> {
    setIsLoading(true)
    const promesa = new Promise((resolve, reject) => {
      setTimeout(()=> {
        if (nameId) {
          resolve(items.filter(product => product.id === nameId));
          setIsLoading(false)
        } else if (categoryId) {
          resolve(items.filter(product => product.category === categoryId));
          setIsLoading(false)
        } else {
          resolve(items)
          setIsLoading(false)
        }
      }, 2000)
    })
    promesa.then(data => {
      setItemsFiltered(data);
    })
  }, [categoryId, items, nameId])

  return (
    <div className="d-flex">
      {isLoading ? <Spinner/> : <ItemList items={itemsFiltered}/>}
    </div>
  )
}
export default ItemListContainer