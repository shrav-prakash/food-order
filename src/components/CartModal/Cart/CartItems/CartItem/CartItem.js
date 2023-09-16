import { useContext } from 'react'
import styles from './CartItem.module.css'
import CartItemsContext from '../../../../../store/cart-items-context'

export default function CartItem({ name, price, amt }) {
    const ctx = useContext(CartItemsContext);

    return (
        <li className={styles['cart-item']}>
            <div>
                <h2>{name}</h2>
                <span className={styles.price}>${price}</span>
                <span className={styles.amount}>x {amt}</span>
            </div>
            <div className={styles.actions}>
                <button onClick={() => ctx.dispatchCartDetails({ type: '-', target: name, price: price })}>-</button>
                <button onClick={() => ctx.dispatchCartDetails({ type: '+', target: name, price: price, amt: 1 })}>+</button>
            </div>
        </li>
    )
}