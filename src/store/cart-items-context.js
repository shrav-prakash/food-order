import React, { useReducer } from "react";

const CartItemsContext = React.createContext({
    cartDetails: { cartItems: [], numItems: 0, totPrice: 0 },
    dispatchCartDetails: () => { }
})

const reducer = (prevCart, action) => {
    let { cartItems: prevCartItems, numItems, totPrice } = prevCart
    const { type, target, amt, price } = action
    if (type === "+") {
        let flag = true
        numItems > 0 && prevCartItems.every((item, index) => {
            if (item.name === target) {
                prevCartItems[index].amt += +amt
                console.log(prevCartItems[index].amt, +amt)
                flag = false
                return false
            }
            return true
        });
        if (flag) {
            const newItem = {
                name: target,
                amt: +amt,
                price: +price
            }
            prevCartItems = [...prevCartItems, newItem]
        }

        numItems += +amt
        totPrice += +price * +amt
        totPrice = +totPrice.toFixed(2)
        return { cartItems: prevCartItems, numItems, totPrice }
    } else if (type === "-") {
        prevCartItems.forEach((item, index) => {
            if (item.name === target) {
                if (prevCartItems[index].amt > 1)
                    prevCartItems[index].amt -= 1
                else
                    prevCartItems.splice(index, 1)
                numItems -= 1
                totPrice -= +price
                totPrice = +totPrice.toFixed(2)
                return { cartItems: prevCartItems, numItems, totPrice }
            }
        });
        return { cartItems: prevCartItems, numItems, totPrice }
    }
}

export function CartItemsContextProvider(props) {
    const [cartDetails, dispatchCartDetails] = useReducer(reducer, { cartItems: [], numItems: 0, totPrice: 0 })
    return (
        <CartItemsContext.Provider value={{
            cartDetails: cartDetails,
            dispatchCartDetails: dispatchCartDetails
        }}>
            {props.children}
        </CartItemsContext.Provider>)
}

export default CartItemsContext