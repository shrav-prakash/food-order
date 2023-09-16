import Backdrop from './Backdrop/Backdrop'
import Cart from './Cart/Cart'

import { Fragment } from 'react'
import ReactDOM from 'react-dom'

// const Backdrop = 
export default function CartModal() {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
            <Cart />
        </Fragment>
    )
}