import React, { useContext } from "react";


import ProductContext from "../store/Product-Context";
import CartContext from "../store/Cart-Context";



const Show = ()=>{

    const productcntxt = useContext(ProductContext)
    const cartCntxt = useContext(CartContext)


    function cartHandler(key){
        let temp = productcntxt.items.filter((element, i)=>{
               return i === key ? element:  '';
        })
        temp[0].quantity = temp[0].quantity-1 > 0 ? temp[0].quantity-1 : 'Out of stock'; 

        
        cartCntxt.addToCart(...temp)
    }

    return (
        <>
            <h1>Products Available</h1>

           { productcntxt.items.map((element, i) => {
                return <div key={i} className="container">
                    <li>{element.medName} {element.description} {element.price} {element.quantity}
                    <input className="me-2" type="button" disabled={element.quantity === 'Out of stock' ? true: false} value={'Add to cart'} onClick={()=> cartHandler(i)} />
                    </li>
                </div>
            })}
           
           
        
        
        </>
    )
};


export default Show;