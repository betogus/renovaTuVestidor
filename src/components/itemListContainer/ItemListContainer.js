import ItemList from "./itemList/ItemList";
import { useParams } from "react-router-dom"; //esto me permite asignarle a una variable, el id que le pasamos a itemDetailContainer desde el itemList

const ItemListContainer = () => {
  let {categoryId, nameId} = useParams();


  return (
    <div className="d-flex">
      <ItemList categoryId={categoryId} nameId={nameId}/>
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