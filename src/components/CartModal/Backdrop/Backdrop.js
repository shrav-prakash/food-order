import { useContext } from 'react'
import styles from './Backdrop.module.css'
import CartModalContext from '../../../store/cart-modal-context'


export default function Backdrop(props) {
    const ctx = useContext(CartModalContext);
    return <div id='backdrop' className={styles.backdrop} onClick={event => event.target.id === 'backdrop' && ctx.setIsCartEnabled(false)}>{props.children}</div>
}