import styles from './CartItems.module.css'

import CartItem from './CartItem/CartItem'

export default function CartItems({ items }) {
    if (items.length > 0) {
        return (
            <ul className={styles['cart-items']}>
                {
                    items.map(item => (
                        <CartItem key={item.name} name={item.name} price={item.price} amt={item.amt} />
                    ))
                }
            </ul>

        )
    }
    return <h2 className={styles.fallback}>No cart items to be displayed!</h2>

}