
import React, {useState, useEffect} from "react";
import ItemDetail from "./itemDetail/ItemDetail" 
import Spinner from "../spinner/Spinner";
import { useParams } from "react-router-dom"; 
import { doc, query, where, getDoc, getFirestore} from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'


const ItemDetailContainer = () => {
  

  const [isLoading, setIsLoading] = useState(true)
  const [item, setItem] = useState({});
  let {id} = useParams(); 
  
  
  useEffect(()=> {
    const querySnapshot = doc(getFirestore(), 'products', id);
    getDoc(querySnapshot).then(res => setItem({id: res.id, ...res.data()}))
    setTimeout(()=> {
      setIsLoading(false)
    },2000)
  
  }, [])
  


  return (
    <div className="d-flex justify-content-center">
      { isLoading ? <Spinner/> : <ItemDetail product = {item} key={item.key} />}
    </div>
  )
}


  export default ItemDetailContainer