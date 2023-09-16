import { useContext } from "react";
import Card from "../../Card/Card";
import styles from './Cart.module.css'
import CartItems from "./CartItems/CartItems";
import CartModalContext from "../../../store/cart-modal-context";
import CartItemsContext from "../../../store/cart-items-context";

export default function Cart() {
    const cartCtx = useContext(CartItemsContext)
    const ctx = useContext(CartModalContext)

    return (
        <Card className={styles.modal} >
            <CartItems items={cartCtx.cartDetails.cartItems} />
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>${cartCtx.cartDetails.totPrice}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles.button} onClick={() => ctx.setIsCartEnabled(false)}>Close</button>
                {cartCtx.cartDetails.numItems > 0 && (<button className={styles['button--alt']}>Order</button>)}
            </div>
        </Card>
    )
}