import React from 'react'
import {styles} from './CardComponentStyle';


const CardComponent = (props) => {

    
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
            <div>

            </div>

        </footer>
    </div>
  )
}

export default CardComponent