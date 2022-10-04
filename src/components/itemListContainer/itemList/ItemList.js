import Item from './Item/Item';
import React from 'react';

const ItemList = ({items}) => {
    return (
        <div style={{ display: "flex", margin: "0 70px" }}> 
            <div style={{display: "flex",textAlign:"center", flexWrap: "wrap"}}>
                {items.length !== 0 ? items.map((item) =>  <Item item={item} key={item.id}/>) : <div className='w-100 mt-5'><h3 className='text-center'>No hay coincidencias con su búsqueda</h3></div>}   
            </div>
        </div>
    )
}

export default ItemList

