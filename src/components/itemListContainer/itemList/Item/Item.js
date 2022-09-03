import React from 'react'
import {styles} from './ItemStyle';
import ItemCount from '../../itemCount/ItemCount';

const Item = ({data}) => {
    return (
        <div style={styles.cardContainer}>
            <header className='d-flex align-items-end my-1'>
                <div>
                    <img src={data.user.logo} alt="usuario" style={styles.logo}></img>
                </div>
                <div>
                    <p className='mx-4 my-1'><b>{data.user.name}</b></p>
                </div>
            </header>
            <main>
                <img src={data.img} alt="ropa" style={styles.imgClothes}></img>
            </main>
            <footer>
                <div>
                    <p className='text-center fs-5 my-1'>{data.name}</p>
                    <p className='text-center my-1' style={{color: "orange", fontSize: "25px"}}><b>${data.price}</b></p>
                    <p className='text-center my-1'>Talle {data.size}</p>
                </div>
                <ItemCount
                    user = {
                        { 
                        clothes: [{
                            stock: `${data.stock}`,
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