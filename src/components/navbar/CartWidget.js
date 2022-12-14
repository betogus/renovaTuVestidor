import { styles } from './NavBarStyles'
import Cart from '../../assets/cart-shopping-solid.svg'
import { useCartContext } from "../../Context/cartContext/CartContext";


function CartWidget () {
    const {totalQuantity} = useCartContext()

    return (
                <div className="bg-white" style={styles.cartContainer}>
                        <img src={Cart} style={styles.cart} alt="cart"></img>
                        {totalQuantity > 0 ? (
                            <span className='text-dark'>{totalQuantity}</span>
                        ) : null}
                </div>
     
    )
}

export default CartWidget