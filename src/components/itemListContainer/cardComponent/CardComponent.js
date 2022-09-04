import React from 'react'
import {styles} from './CardComponentStyle';
import ItemCount from '../itemCount/ItemCount';

const CardComponent = (props) => {

    
    
  return (
    <div style={styles.cardContainer}>
        <header className='d-flex align-items-end my-1'>
            <div>
                <img src={props.logoUsuario} alt="usuario" style={styles.logo}></img>
            </div>
            <div>
                <p className='mx-4 my-1'><b>{props.nombreUsuario}</b></p>
            </div>
        </header>
        <main>
            <img src={props.imgRopa} alt="ropa" style={styles.imgClothes}></img>
        </main>
        <footer>
            <div>
                <p className='text-center fs-5 my-1'>{props.nombreRopa}</p>
                <p className='text-center my-1' style={{color: "orange", fontSize: "25px"}}><b>${props.precioRopa}</b></p>
                <p className='text-center my-1'>Talle {props.tamanioRopa}</p>
            </div>
            <ItemCount
                        stock = {props.stock}
                        initial = {props.initial}
                        onAdd = {props.onAdd}
            
            />
        </footer>
    </div>
  )
}

export default CardComponent