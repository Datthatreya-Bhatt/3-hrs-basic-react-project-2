import { useState } from "react";


import ProductContext from "./Product-Context";



const ProductProvider = (props)=>{

    const [items, setItems] = useState([]);

    const productcntxt = {
        items: items,
        addItem: addItem,


    }

    
    function addItem(element){
       setItems(element)

    }




    return(
        <ProductContext.Provider value={productcntxt}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;