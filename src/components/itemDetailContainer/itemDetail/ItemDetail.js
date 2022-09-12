import {styles} from './ItemDetailStyle';
import React, {useState, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import ItemCount from '../../itemCount/ItemCount';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
//import { CartContext } from '../../../itemsContext';


const ItemDetail = ({item}) => {
    
    //const {addProduct} = useContext(CartContext)
    const [initial, setInitial] = useState(0)
    const [stock, setStock] = useState(item.stock)
    const [counter, setCounter] = useState(initial)
    const [cart, setCart] = useState()

    const onAdd = (counter, stock, initial) => {
        Swal.fire(
          'Se ha añadido el producto al carrito',
          `Hay ${initial} productos de ${item.name} en tu carrito. Se añadieron ${counter}. Stock: ${stock-counter}`,
          'success'
        )
    setInitial(+counter)
    setStock (stock - counter);
    setCounter(0)
    //setCart(addProduct(item, quanity))
}

    return (
        
        <div className='container text-center'>
            <div className='row'>
                <div className='col-sm-6'>
                    <img style={styles.img} src={item.img} alt="img"/>
                </div>
                
                <div className='col-sm-6 text-center'>
                    <h2><b>{item.name}</b></h2>
                    <h2>$ {item.price}</h2>
                    <h5>Talle {item.size}</h5>
                    <p>{item.detail}</p>
                    <div className='d-flex justify-content-center'>
                        <button style={styles.button1}>Ofertar<FontAwesomeIcon icon="fa-sharp fa-solid fa-gavel" /></button>
                        <button style={styles.button1}>Comentar<FontAwesomeIcon icon="fa-regular fa-comment" /></button>
                    </div>
                    {cart? <div><p className='text-center'>Cantidades agregadas al carrito: {initial}</p><Link to={`/cart/${item.id}`} style={styles.link}><button style={styles.button2}><b>IR AL CARRITO</b></button></Link></div> : 
                    <ItemCount
                        stock = {stock}
                        initial = {initial}
                        onAdd = {onAdd}
                    />}
                    
                </div>

            </div>

        </div>
    )
}

export default ItemDetail