import React, {useState} from 'react'
import {styles} from './ItemStyle';
import ItemCount from '../../itemCount/ItemCount';

const Item = (props) => {

  const [initial, setInitial] = useState(0)
  const [stock, setStock] = useState(props.data.stock)
  const [counter, setCounter] = useState(initial)
  
  const onAdd = (counter, stock, initial) => {
    console.log(`Hay ${initial} productos en tu carrito. Se añadieron ${counter}. Stock: ${stock-counter}`);
    setInitial(0);
    setStock (stock - counter);
    setCounter(0);
}
    return (
        <div style={styles.cardContainer}>
            <header className='d-flex align-items-end my-1'>
                <div>
                    <img src={props.data.user.logo} alt="usuario" style={styles.logo}></img>
                </div>
                <div>
                    <p className='mx-4 my-1'><b>{props.data.user.name}</b></p>
                </div>
            </header>
            <main>
                <img src={props.data.img} alt="ropa" style={styles.imgClothes}></img>
            </main>
            <footer>
                <div>
                    <p className='text-center fs-5 my-1'>{props.data.name}</p>
                    <p className='text-center my-1' style={{color: "orange", fontSize: "25px"}}><b>${props.data.price}</b></p>
                    <p className='text-center my-1'>Talle {props.data.size}</p>
                </div>
                <ItemCount

                            stock = {stock}
                            initial = {initial}
                            onAdd = {onAdd}
                
                />
            </footer>
        </div>
    )
}

export default Item