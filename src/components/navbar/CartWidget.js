import { styles } from './NavBarStyles'
import Cart from './cart-shopping-solid.svg'
import { useContext } from "react";
import { CartContext } from "../../cartContext/CartContext";

function CartWidget () {
    const [totalQuantity] = useContext(CartContext)

    return (
    <div className="bg-white" style={styles.cartContainer}>
        <img src={Cart} style={styles.cart} alt="cart"></img>
        {totalQuantity > 0 ? (
            <span>{totalQuantity}</span>
        ) : null}
    </div>
    )
}

export default CartWidget