import styles from './Header.module.css'
import CartButton from './CartButton/CartButton'

export default function Header() {
    return (
        <header className={styles.header}>
            <h1>ReactMeals</h1>
            <CartButton />
        </header>
    )
}