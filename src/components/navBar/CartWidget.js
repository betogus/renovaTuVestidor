import { styles } from '../Jss'
import Cart from './cart-shopping-solid.svg'

function CartWidget () {
    return (
    <div className="bg-white" style={styles.cartContainer}>
        <img src={Cart} style={styles.cart} alt="cart"></img>
    </div>
    )
}

export default CartWidget