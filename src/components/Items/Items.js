import styles from './Items.module.css'

import Item from './Item/Item'
import Card from '../Card/Card'

import ItemList from './ItemList'

export default function Items() {
    if (ItemList.length > 0) {
        return (
            <Card className={styles.meals}>
                <ul>
                    {ItemList.map(meal => (
                        <Item key={meal.id} name={meal.name} desc={meal.description} price={meal.price} />
                    ))}
                </ul>
            </Card>
        )
    }
}