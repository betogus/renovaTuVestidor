import {styles} from './ItemDetailStyle';
import React, {useState} from 'react'
import ItemCount from '../../itemCount/ItemCount';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../Context/cartContext/CartContext';


const ItemDetail = ({product}) => {
    
    const {addItem, cart, isInCart} = useCartContext()
    const [confirm, setConfirm] = useState(false)
    const [quantity, setQuantity] = useState(0)

    const onAdd = (quantity) => {
        const productInCart = [...cart]
        if (isInCart(product.id)) {
            for (const itemCart of productInCart) {
                if (itemCart.quantity + quantity <= itemCart.stock) {
                    addItem({...product, quantity})
                    setQuantity( itemCart.quantity)
                    Swal.fire(
                    'Se ha añadido el producto al carrito',
                    `Se añadieron ${quantity} productos de ${product.name} en tu carrito`,
                    'success'
                    )
                    setConfirm(true)
                } else {
                    Swal.fire(
                    'No hay suficiente stock',
                    '',
                    'error'
                    )
                }
            } 
        } else {
            addItem({...product, quantity})
            setQuantity(quantity)
            Swal.fire(
            'Se ha añadido el producto al carrito',
            `Se añadieron ${quantity} productos de ${product.name} en tu carrito`,
            'success'
            )
            setConfirm(true)
        }
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
                        <button style={styles.button1}>Ofertar</button>
                        <button style={styles.button1}>Comentar</button>
                    </div>
                    <div className="pb-3">
                        {confirm ? (
                            <>
                        <p className='text-center'>Cantidades agregadas al carrito: {quantity}</p>
                        <Link to={`/cart`} style={styles.link}>
                            <button style={styles.button2}>
                                <b>IR AL CARRITO</b>
                            </button>
                            
                        </Link>
                        </>
                        ): 
                            <ItemCount
                            stock = {product.stock}
                            initial = {quantity}
                            onAdd = {onAdd}
                        />
                        }

                    </div> 

                    
                </div>

            </div>

        </div>
    )
}

export default ItemDetail