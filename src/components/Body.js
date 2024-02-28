import React, {useContext} from "react";

import Input from "./Input";
import Show from "./Show";
import CartForm from "./CartForm";

import CartContext from "../store/Cart-Context";


const Body = ()=>{

    const cartCntxt = useContext(CartContext);
    return (
        <>
            <Input/>
            {cartCntxt.cartOpen && <CartForm/>}
            <Show/>
        
        </>
    )
};

export default Body;