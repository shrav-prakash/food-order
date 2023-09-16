import Card from '../../Card/Card'
import styles from './Backdrop.module.css'

export default function Backdrop(props) {
    return <Card className={styles.backdrop}>{props.children}</Card>
}