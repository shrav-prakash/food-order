import styles from './Item.module.css'
import ItemForm from './ItemForm/ItemForm'

export default function Item({ name, price, desc }) {
    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.desc}>{desc}</div>
                <div className={styles.price}>${price}</div>
            </div>
            <ItemForm id={name} price={price} />
        </li>
    )
}