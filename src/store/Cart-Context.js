import React from "react";


const CartContext = React.createContext({
    cartOpen: false,
    setCartOpen: ()=>{},
    arr: [],
    setArr: ()=>{},
    addToCart: ()=>{},
    removeFromCart: ()=>{},
    totalAmount: 0,
    setTotalAmount: ()=>{}
    

});

export default CartContext;