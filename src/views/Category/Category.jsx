import { collection, getDocs, query, where } from 'firebase/firestore';
import React, {useState, useEffect } from 'react'
import { db } from '../../firebase/firebaseConfig';
import Spinner from '../../components/spinner/Spinner';
import ItemList from '../../components/itemListContainer/itemList/ItemList';
import { useParams } from "react-router-dom"; 

const Category = () => {

  const {categoryId} = useParams()
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const getProducts = async() => {
    const q = query(collection(db, 'products'), where("category", '==', categoryId));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({...doc.data(), id: doc.id })
    })
    setItems(docs)
  }
  
  useEffect(()=> {
    getProducts() 
    setIsLoading(true)
    setTimeout(()=> {
        setIsLoading(false)
    }, 2000)
  }, [categoryId])
  
  return (
    <div className="d-flex">
    {isLoading ? <div className="d-flex justify-content-center w-100"><Spinner/></div> : <ItemList items={items}/>}
  </div>
  )
}

export default Category