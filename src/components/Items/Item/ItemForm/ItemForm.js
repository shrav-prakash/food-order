import React, { useContext, useState } from 'react'

import styles from './ItemForm.module.css'
import CartItemsContext from '../../../../store/cart-items-context'

export default function ItemForm({ id, price }) {
    const [quantity, setQuantity] = useState('1')

    const ctx = useContext(CartItemsContext);

    const formSubmit = event => {
        event.preventDefault()
        ctx.dispatchCartDetails({ type: '+', target: id, price: price, amt: quantity })
    }

    return (
        <form className={styles.form} onSubmit={formSubmit}>
            <div className={styles.input}>
                <label htmlFor={'amt_' + id}>Amount</label>
                <input id={'amt_' + id} type='number' min='1' max='10' value={quantity} onChange={event => setQuantity(event.target.value)} />
            </div>
            <button type='submit'>+ Add</button>
        </form>
    )
}