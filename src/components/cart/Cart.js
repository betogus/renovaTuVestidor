import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../Context/cartContext/CartContext'
import ItemCart from './ItemCart';


const Cart = () => {

  const {cart, clear, totalPrice} = useCartContext();

  return (
    <div>
      <h1 className="text-center">Carrito</h1>
      <div className='d-flex justify-content-center'>
       {cart.length > 0 ? (
        <div>
             {cart.map(product => <ItemCart key={product.id} product={product} />)}
          <p>TOTAL: ${totalPrice()}</p>
          <button onClick={clear}>Limpiar Carrito</button>
        </div>
      ) :
      <div>
        <p>No hay productos en el carrito</p>     
        <NavLink to="/" className="nav-enlace">Volver a inicio</NavLink>
      </div>        
      } 
      </div>
    </div>
  )
}


export default Cart