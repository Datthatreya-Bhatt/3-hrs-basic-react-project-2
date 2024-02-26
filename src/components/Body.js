import React, {useState} from "react";

import Input from "./Input";
import Show from "./Show";
import CartForm from "./CartForm";


const Body = ()=>{

    const [cartOpen, setCartOpen] = useState(false);
    return (
        <>
            <Input/>
            {cartOpen && <CartForm setCartOpen={setCartOpen} cartOpen={cartOpen}/>}
            <Show/>
        
        </>
    )
};

export default Body;