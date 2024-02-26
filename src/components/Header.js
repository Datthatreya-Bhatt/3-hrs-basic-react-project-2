import React, {useState} from 'react';


import Cart from './Cart';


const Header = ()=>{

    const [cartOpen, setCartOpen] = useState(false)
    return(
        <>
            <nav className="navbar bg-danger text-light" >
   
                <h1>Inventory Management</h1>
                <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
  
            </nav>
        </>
    )
};


export default Header;
