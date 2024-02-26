import React from "react";


const ProductContext = React.createContext({
    items: [],
    addItem: (element)=>{},
    removeItem: (id)=>{}
   

});

export default ProductContext;