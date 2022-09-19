import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../cartContext/CartContext'


const Cart = () => {

  const {cart, clear, removeItem} = useCartContext();

  return (
    <div>
      {console.log(cart)}
      <h1 className="text-center">Carrito</h1>
      <div className='d-flex justify-content-center'>
       {cart.length > 0 ? (
        <div>
          <ul>
             {cart.map(product => {
                 return <li key={product.id}>
                             {product.name} - ${product.price} - {product.quantity}
                             <button onClick={() => removeItem(product.id)}>Borrar</button> 
                         </li>
             })}
          </ul>
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