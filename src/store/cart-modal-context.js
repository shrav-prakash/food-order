import React from "react";

const CartModalContext = React.createContext({
    isCartEnabled: false,
    setIsCartEnabled: () => { }
})

export default CartModalContext