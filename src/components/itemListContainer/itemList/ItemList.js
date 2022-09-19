import Item from './Item/Item';
import React from 'react';




const ItemList = ({items}) => {

    
    return (
        
        <> 
        {items.map((item) =>  <Item item={item} key={item.id}/>)}   
        </>
    )
}

export default ItemList

