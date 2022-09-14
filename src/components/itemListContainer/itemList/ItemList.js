import Item from './Item/Item';
import { ItemsContext } from '../../../itemsContext';
import Spinner from "../../spinner/Spinner";
import React, {useContext, useState, useEffect} from 'react';




const ItemList = ({categoryId, nameId}) => {

    const [items, setItems] = useContext(ItemsContext)
    const [isLoading, setIsLoading] = useState(false)
    const [ItemsSearched, setItemsSearched] = useState()
    let itemsFiltered;
    //useEffect(() => {
        //setIsLoading(true)
            //setTimeout(()=> {
            if (categoryId) {
                itemsFiltered = (items.filter(item => item.category === categoryId))
                //setIsLoading(false)
            } else if (nameId) {
                itemsFiltered = (items.filter(item => item.name.toLowerCase().includes(nameId)))
               // setIsLoading(false)
            } else {
                itemsFiltered = (items)
                //setIsLoading(false)
            }
            
        //}, 2000)
        //setItemsSearched(itemsFiltered)
    //}, [categoryId, nameId])
    

    return (
        
        <> {(isLoading) ? <Spinner/> :   itemsFiltered.map((item) =>  <Item item={item} key={item.id}/>)}
            
        </>
    )
}

export default ItemList

