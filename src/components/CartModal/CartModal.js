import Backdrop from './Backdrop/Backdrop'
import Cart from './Cart/Cart'

import { Fragment, useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'

import CartModalContext from '../../store/cart-modal-context'

export default function CartModal() {
    const ctx = useContext(CartModalContext);

    useEffect(() => {
        console.log(ctx.isCartEnabled, document.body.style.overflow)
        document.body.style.overflow = ctx.isCartEnabled ? 'hidden' : 'unset'
    }, [ctx.isCartEnabled])

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