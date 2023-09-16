import React, { useState } from 'react'

import styles from './ItemForm.module.css'

export default function ItemForm({ id }) {
    const [quantity, setQuantity] = useState('1')

    const formSubmit = event => {
        event.preventDefault()
        console.log(quantity, id)
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