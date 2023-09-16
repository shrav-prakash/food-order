import styles from './CartButton.module.css'
import CartIcon from './CartIcon'

import CartModalContext from '../../../store/cart-modal-context'
import { useContext } from 'react'
import CartItemsContext from '../../../store/cart-items-context'

export default function CartButton() {
    const ctx = useContext(CartModalContext)
    const cartCtx = useContext(CartItemsContext)

    return (
        <button className={styles.button} onClick={() => ctx.setIsCartEnabled(true)}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{cartCtx.cartDetails.numItems}</span>
        </button>
    )
}