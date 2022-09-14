import React from 'react'
import {styles} from './ItemStyle';

import { Link } from 'react-router-dom';


const Item = ({item}) => {
    return (
        <Link to={`/detail/${item.id}`} style={styles.link}>
            <div style={styles.cardContainer}>
                <header className='d-flex align-items-end my-1'>
                    <div>
                        <img src={item.user.logo} alt="usuario" style={styles.logo}></img>
                    </div>
                    <div>
                        <p className='mx-4 my-1'><b>{item.user.name}</b></p>
                    </div>
                </header>

                    <main>
                        <img src={item.img} alt="ropa" style={styles.imgClothes}></img>
                    </main>
       
                <footer>
                    <div>
                        <p className='text-center fs-5 my-1'>{item.name}</p>
                        <p className='text-center my-1' style={{color: "orange", fontSize: "25px"}}><b>${item.price}</b></p>
                        <p className='text-center my-1'>Talle {item.size}</p>
                    </div>
                </footer>
            </div>
        </Link>
    )
}

export default Item