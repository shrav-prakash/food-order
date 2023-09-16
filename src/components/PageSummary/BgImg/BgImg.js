import bg from "../../../assets/meals.jpg"

import styles from './BgImg.module.css'

export default function BgImg() {
    return (
        <div className={styles['main-image']} >
            <img src={bg} alt="Depiction of the different meals offered" />
        </div>
    )
}