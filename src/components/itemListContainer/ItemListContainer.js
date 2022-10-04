import ItemList from "./itemList/ItemList";
import { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import { useParams } from "react-router-dom"; 

//FIREBASE-FIRESTORE
import { collection, query, getDocs} from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'

const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const {nameSearched} = useParams()
  
  const getProducts = async () => {
    let itemsSearched;
    const q = query(collection(db, 'products'))
    const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id})
        itemsSearched = docs
      }); 
      if (nameSearched) {
        itemsSearched = docs.filter((itemSearched)=> itemSearched.name.toLowerCase().replace(/ /g, '').includes(nameSearched) )

      }
    setItems(itemsSearched)
  }
  

    useEffect(()=> {
      getProducts() 
      setIsLoading(true)
      setTimeout(()=> {
          setIsLoading(false)
      }, 2000)
    },[nameSearched])

  return (
    <div className="d-flex">
      { isLoading ? <div className="justify-content-center w-100"><Spinner/></div> :
        <div className="text-center w-100">{nameSearched && <h3>Resultado de la búsqueda: "{nameSearched}"</h3>}
        <ItemList items={items}/></div>}
    </div>
  )
}
export default ItemListContainer