import React from 'react'
import {styles} from './ItemStyle';
import ItemCount from '../itemCount/ItemCount';
import {usuarios} from "../../../baseDeDatos/BaseDeDatos"

const Item = (props) => {
  return (
    <div style={styles.cardContainer}>
        <header className='d-flex align-items-end my-1'>
            <div>
                <img src={props.user.logo} alt="usuario" style={styles.logo}></img>
            </div>
            <div>
                <p className='mx-4 my-1'><b>{props.user.name}</b></p>
            </div>
        </header>
        <main>
            <img src={props.user.clothes[0].img} alt="ropa" style={styles.imgClothes}></img>
        </main>
        <footer>
            <div>
                <p className='text-center fs-5 my-1'>{props.user.clothes[0].name}</p>
                <p className='text-center my-1' style={{color: "orange", fontSize: "25px"}}><b>${props.user.clothes[0].price}</b></p>
                <p className='text-center my-1'>Talle {props.user.clothes[0].size}</p>
            </div>
            <ItemCount
                user = {
                    { 
                    clothes: [{
                        stock: `${usuarios.usuario1.clothes[0].stock}`,
                        initial: 0,
                        onAdd: (counter, initial, stock) => {
                                console.log(`Hay ${initial} productos en tu carrito. Se añadieron ${counter}. Stock: ${stock-counter}`);
                            }
                            
                        }]
                    }
                }
            
            />
        </footer>
    </div>
  )
}

export default Item