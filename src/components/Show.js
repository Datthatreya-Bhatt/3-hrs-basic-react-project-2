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

        cartCntxt.addItem(temp)
    }

    return (
        <>

           { productcntxt.items.map((element, i) => {
                return <div key={i}>
                    <li>{element.medName}</li>
                    <li>{element.description}</li>
                    <li>{element.price}</li>
                    <li>{element.quantity}</li>
                    <input type="button"  value={'Add to cart'} onClick={()=> cartHandler(i)} />
                </div>
            })}
           
           
        
        
        </>
    )
};


export default Show;