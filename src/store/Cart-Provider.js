import React, { useState } from "react";


import CartContext from "./Cart-Context";



const CartProvider = (props)=>{

    const [cartOpen, setCartOpen] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);

    const [arr, setArr] = useState([]);


    function addToCart(element){
        setArr([...arr, element]);
        setTotalAmount(totalAmount + Number(element.price));


    
    }

    

    const cartCntxt = {
        cartOpen: cartOpen,
        setCartOpen: setCartOpen,
        arr: arr,
        setArr: setArr,
        addToCart: addToCart,
        totalAmount: totalAmount,
        setTotalAmount: setTotalAmount
        

    }


    return(
        <CartContext.Provider value={cartCntxt}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;