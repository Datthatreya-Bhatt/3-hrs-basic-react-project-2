import React, { useContext} from 'react';

import CartContext from '../store/Cart-Context';



const Cart = ()=>{
    const ctx = useContext(CartContext);
    


    return(
        <>
            <button type="button" className="btn btn-primary" onClick={() => ctx.setCartOpen(true)}>
                Your Cart <span className="badge text-bg-secondary">{ctx.arr.length}</span>
            </button>

           
        </>
    )
};


export default Cart;