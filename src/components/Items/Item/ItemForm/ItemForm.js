import React from 'react'

import styles from './ItemForm.module.css'

export default function ItemForm({ id }) {
    return (
        <div className={styles.form}>
            <div className={styles.input}>
                <label htmlFor={'amt_' + id}>Amount</label>
                <input id={'amt_' + id} type='number' min='1' max='10' defaultValue='1' />
            </div>
            <button>+ Add</button>
        </div>
    )
}