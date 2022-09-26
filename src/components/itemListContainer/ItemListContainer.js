import ItemList from "./itemList/ItemList";
import { useParams } from "react-router-dom"; 
import { useEffect, useState, useContext } from "react";
import Spinner from "../spinner/Spinner";
import { collection, query, where, getDocs} from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'

const ItemListContainer = () => {
  let {categoryId, nameId, nameSearched} = useParams();
  const [items, setItems] = useState([])
  const [itemsFiltered, setItemsFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  
  const getProducts = async (param1, param2) => {
    let q = ''
      if (param2 === categoryId) {   
       q = query(collection(db, 'products'), where (param1, '==', param2))
     } 
     else { 
       q = query(collection(db, 'products'))
    } 
    const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id})
      }); 
    setItems(docs)
  }
  

    useEffect(()=> {
      setIsLoading(true)
      getProducts() 
      setTimeout(()=> {
          if (nameId) {
          getProducts('id', nameId)
          setIsLoading(false)
        } else if (categoryId) {
          getProducts('category', categoryId)
          setIsLoading(false)
        } else if (nameSearched) {
          /* getProducts()
          const newSearch = items.filter(product => product.name.toLowerCase().replace(/ /g, '').includes(nameSearched))
          setItems(newSearch)
          setIsLoading(false) */
          
        } else {
          getProducts()
          setIsLoading(false)
        }
      }, 2000)
    }, [ nameId || categoryId || nameSearched])

  return (
    <div className="d-flex">
      {isLoading ? <div className="d-flex justify-content-center w-100"><Spinner/></div> : <ItemList items={items}/>}
    </div>
  )
}
export default ItemListContainer