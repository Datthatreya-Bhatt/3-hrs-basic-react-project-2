import React, { useContext} from 'react';

import CartContext from '../store/Cart-Context';



const Cart = ({setCartOpen})=>{
    const ctx = useContext(CartContext);
    


    return(
        <>
            <button type="button" className="btn btn-primary" onClick={() => setCartOpen(true)}>
                Your Cart <span className="badge text-bg-secondary">{ctx.items.length}</span>
            </button>

           
        </>
    )
};


export default Cart;