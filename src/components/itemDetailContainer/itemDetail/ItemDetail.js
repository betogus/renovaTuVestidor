import {styles} from './ItemDetailStyle';
import React, {useState, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import ItemCount from '../../itemCount/ItemCount';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { CartContext } from '../../../cartContext/CartContext';
import { ItemsContext } from '../../../itemsContext';


const ItemDetail = ({product}) => {
    
    const [cart, clear, isToCart, removeItem, addItem] = useContext(CartContext)
    const [items, setItems, setItemStock] = useContext(ItemsContext)
    const [initial, setInitial] = useState(0)
    const [stock, setStock] = useState(product.stock)
    const [counter, setCounter] = useState(initial)
    const [cartProduct, setCartProduct] = useState()



    const onAdd = (counter, stock, initial) => {
        Swal.fire(
          'Se ha añadido el producto al carrito',
          `Se añadieron ${counter} productos de ${product.name} en tu carrito`,
          'success'
        )
    addItem(product, counter)
    setCounter(0)
    }

    return (
        
        <div className='container text-center'>
            <div className='row'>
                <div className='col-sm-6'>
                    <img style={styles.img} src={product.img} alt="img"/>
                </div>
                
                <div className='col-sm-6 text-center'>
                    <h2><b>{product.name}</b></h2>
                    <h2>$ {product.price}</h2>
                    <h5>Talle {product.size}</h5>
                    <p>{product.detail}</p>
                    <div className='d-flex justify-content-center'>
                        <button style={styles.button1}>Ofertar<FontAwesomeIcon icon="fa-sharp fa-solid fa-gavel" /></button>
                        <button style={styles.button1}>Comentar<FontAwesomeIcon icon="fa-regular fa-comment" /></button>
                    </div>
                    <div className="pb-3">
        
                        <p className='text-center'>Cantidades agregadas al carrito: {initial}</p>
                        <Link to={`/cart`} style={styles.link}>
                            <button style={styles.button2}>
                                <b>IR AL CARRITO</b>
                            </button>
                            
                        </Link>
                    </div> 
                    <ItemCount
                        stock = {stock}
                        initial = {initial}
                        onAdd = {onAdd}
                    />
                    
                </div>

            </div>

        </div>
    )
}

export default ItemDetail