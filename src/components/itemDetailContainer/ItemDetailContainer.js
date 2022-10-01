
import React, {useState, useEffect} from "react";
import ItemDetail from "./itemDetail/ItemDetail" 
import Spinner from "../spinner/Spinner";
import { useParams } from "react-router-dom"; 
import { doc, getDoc, getFirestore, /* collection, query, where, documentId, getDocs */} from 'firebase/firestore';
//import { db } from '../../firebase/firebaseConfig'


const ItemDetailContainer = () => {
  

  const [isLoading, setIsLoading] = useState(true)
  const [item, setItem] = useState({});
  const {id} = useParams(); 
  
 
    
  

  // OTRA MANERA:
   /* const getItem = async() => {
    const q = query(collection(db, 'products'), where(documentId(), '==', id));
    const docs = [];
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      docs.push({...doc.data(), id: doc.id })
    })
    setItem(docs[0])
  }   */
  
  
  
  useEffect(()=> {
    //getItem()
    const querySnapshot = doc(getFirestore(), 'products', id);
    getDoc(querySnapshot).then(res => setItem({id: res.id, ...res.data()}))  
    setTimeout(()=> {
        setIsLoading(false)
      },2000)
  }, [id])
  


  return (
    <div className="d-flex justify-content-center">
      { isLoading ? <Spinner/> : <ItemDetail product = {item} key={item.key} />}
    </div>
  )
}


  export default ItemDetailContainer