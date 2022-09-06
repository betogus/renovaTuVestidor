import Item from './Item/Item'

const ItemList = (props) => {


    return (
        
        <>
        {props.items.map((item) =>           /* en caso que no haya id para la key, ponemos ", idx" */
            <Item   key={item.id} item={item}   />  /* si no tiene id, puedo pasarle el idx */
            )
        }
        </>
    )
}

export default ItemList

