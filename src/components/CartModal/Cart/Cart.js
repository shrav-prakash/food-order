import Card from "../../Card/Card";
import styles from './Cart.module.css'
import CartItems from "./CartItems/CartItems";

export default function Cart() {
    const cartItems = [
        {
            name: 'Sushi',
            price: '22.99',
            amt: '3'
        },
        {
            name: 'Burger',
            price: '14.99',
            amt: '2'
        }
    ]

    let tot = 0;
    cartItems.forEach(item => tot += (+item.price * +item.amt))

    return (
        <Card className={styles.modal} >
            <CartItems items={cartItems} />
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>${tot}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles.button}>Close</button>
                <button className={styles['button--alt']}>Order</button>
            </div>
        </Card>
    )
}