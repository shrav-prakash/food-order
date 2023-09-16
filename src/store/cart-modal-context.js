import React, { useState } from "react";

const CartModalContext = React.createContext({
    isCartEnabled: false,
    setIsCartEnabled: () => { }
})

export function CartModalContextProvider(props) {
    const [isCartEnabled, setIsCartEnabled] = useState(false)
    return <CartModalContext.Provider value={{
        isCartEnabled: isCartEnabled,
        setIsCartEnabled: setIsCartEnabled
    }}>{props.children}</CartModalContext.Provider>
}

export default CartModalContext;
