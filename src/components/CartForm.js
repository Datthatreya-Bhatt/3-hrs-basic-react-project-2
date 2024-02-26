import React, { useContext } from "react";

import CartContext from "../store/Cart-Context";

const CartForm = ()=>{

    const cartCntxt = useContext(CartContext);

    return (
        <>
            {cartCntxt.map((element, i)=>{
                return <div>
                    <li>{element.medName}</li>
                    <li>{element.description}</li>
                    <li>{element.price}</li>
                    <li>{element.quantity}</li>
                </div>
            })}
            
        
        
        </>
    )
};


export default CartForm;