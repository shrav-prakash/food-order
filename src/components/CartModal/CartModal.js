import Backdrop from './Backdrop/Backdrop'
import Cart from './Cart/Cart'

import { Fragment, useContext } from 'react'
import ReactDOM from 'react-dom'

import CartModalContext from '../../store/cart-modal-context'

export default function CartModal() {
    const ctx = useContext(CartModalContext);

    if (ctx.isCartEnabled === true) {
        return (
            <Fragment>
                {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
                <Cart />
            </Fragment>
        )
    }

    return

}