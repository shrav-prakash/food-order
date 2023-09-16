import styles from './Items.module.css'

import Item from './Item/Item'

export default function Items({ meals }) {
    if (meals.length > 0) {
        return (
            <div className={styles.meals}>
                <ul>
                    {meals.map(meal => (
                        <Item key={meal.id} name={meal.name} desc={meal.description} price={meal.price} />
                    ))}
                </ul>
            </div>
        )
    }
}