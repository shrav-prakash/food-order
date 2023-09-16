import styles from './CartItem.module.css'

export default function CartItem({ name, price, amt }) {
    return (
        <li className={styles['cart-item']}>
            <div>
                <h2>{name}</h2>
                <span className={styles.price}>${price}</span>
                <span className={styles.amount}>x {amt}</span>
            </div>
            <div className={styles.actions}>
                <button>-</button>
                <button>+</button>
            </div>
        </li>
    )
}