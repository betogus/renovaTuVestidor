import Item from './Item/Item';
import { ItemsContext } from '../../../ItemsContext';
import Spinner from "../../spinner/Spinner";
import React, {useContext, useState, useEffect} from 'react';




const ItemList = ({items}) => {

    const [ItemsSearched, setItemsSearched] = useState()
    
    return (
        
        <> 
        {items.map((item) =>  <Item item={item} key={item.id}/>)}   
        </>
    )
}

export default ItemList

