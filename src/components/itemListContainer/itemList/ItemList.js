import Item from './Item/Item';
import React from 'react';




const ItemList = ({items}) => {

    
    return (
        
        <> 
        {items.length !== 0 ? items.map((item) =>  <Item item={item} key={item.id}/>) : <div className='w-100 mt-5'><h3 className='text-center'>No hay coincidencias con su búsqueda</h3></div>}   
        </>
    )
}

export default ItemList

