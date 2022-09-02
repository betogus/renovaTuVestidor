

import Item from './Item/Item'

const ItemList = (props) => {


    return (
        <>
        {props.items.map((item/* en caso que no haya id para la key, ponemos ", idx" */) => {
            if (item.id < 9) {
                return (
                    <Item 
                    key = {item.id} //si no tiene id, puedo pasarle el idx
                    data = {item}
                    />
                )
            }
        })
        }
        </>
    )
}

export default ItemList