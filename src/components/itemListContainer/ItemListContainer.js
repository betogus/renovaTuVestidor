import ItemList from "./itemList/ItemList";
import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import BaseDeDatos from "../../baseDeDatos/BaseDeDatos.json"



const ItemListContainer = () => {
  let {categoryId, nameId, nameSearched} = useParams();
  const [items, setItems] = useState(BaseDeDatos)
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
        } else if (nameSearched) {
          resolve(items.filter(product => product.name.includes(nameSearched)));
          setIsLoading(false)
        }  else {
          resolve(items)
          setIsLoading(false)
        }
      }, 2000)
    })
    promesa.then(data => {
      setItemsFiltered(data);
    })
  }, [categoryId, items, nameId, nameSearched])

  return (
    <div className="d-flex">
      {isLoading ? <Spinner/> : <ItemList items={itemsFiltered}/>}
    </div>
  )
}
export default ItemListContainer