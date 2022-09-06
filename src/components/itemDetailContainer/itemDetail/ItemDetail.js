import {styles} from './ItemDetailStyle';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

const ItemDetail = ({item}) => {
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
                    <button style={styles.button2}><b>COMPRAR</b></button>
                </div>

            </div>

        </div>
    )
}

export default ItemDetail