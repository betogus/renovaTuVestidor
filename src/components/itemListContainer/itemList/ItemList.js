import Item from './Item/Item';
import { ItemsContext } from '../../../itemsContext';
import Spinner from "../../spinner/Spinner";
import React, {useContext, useState} from 'react';




const ItemList = ({categoryId, nameId}) => {

    const [items, setItems, itemsSearched, setItemsSearched, getItems] = useContext(ItemsContext)
    const [isLoading, setIsLoading] = useState(false)


    getItems(categoryId, nameId)
    console.log(itemsSearched)

    return (
        
        <> {(isLoading) ? <Spinner/> :   itemsSearched.map((item) =>  {          /* en caso que no haya id para la key, ponemos ", idx" */
            <Item   key={item.id} item={item}   />  /* si no tiene id, puedo pasarle el idx */
        })
            }
        </>
    )
}

export default ItemList

