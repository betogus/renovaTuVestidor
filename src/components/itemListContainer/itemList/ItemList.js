

import Item from './Item/Item'

const ItemList = (props) => {


    return (
        <>
        {props.items.map((item) => {
            if (item.id < 9) {
                return (
                    <Item 
                    key = {item.id}
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