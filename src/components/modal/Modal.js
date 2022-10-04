// escribiendo rafce me genera un componente de tipo funcion
import React from 'react'
import ImgModal from './imgModal.jpg'
import { styles } from './ModalStyles.js';

const Modal = () => {
  return (
    <>
        <div style={styles.modalBackground}>
        </div>
        <div style={styles.modalContainer}>
            <img src={ImgModal} alt="imagen del modal" style={styles.imgModal}></img>
            <div>
                <h1>Te Regalamos $300</h1>
                <p>en tu primera compra</p>
                <p>Válido para compras mayores a $3000</p>
                <button>Registrarme</button>
            </div>
            <div><i class="fa-thin fa-circle-xmark"></i></div>
        </div>
    </>
  )
}

export default Modal