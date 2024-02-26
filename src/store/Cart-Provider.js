import { useState } from "react";


import CartContext from "./Cart-Context";



const CartProvider = (props)=>{

    const [items, setItems] = useState([]);


    function addItem(element){
        setItems([...items, element])
    }




    const cartCntxt = {
        items: items,
        addItem: addItem,
        

    }


    return(
        <CartContext.Provider value={cartCntxt}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;