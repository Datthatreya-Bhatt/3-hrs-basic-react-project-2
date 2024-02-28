import React, { useState } from "react";
import ProductContext from "./Product-Context";

const ProductProvider = (props) => {
    const [items, setItems] = useState([]);

   
    function addItem(element) {
        const updatedItems = [...items, element];
        setItems(updatedItems);
    }

   

    const productcntxt = {
        items: items,
        addItem: addItem,
    };

    return (
        <ProductContext.Provider value={productcntxt}>
        {props.children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
