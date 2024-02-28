import React, {useContext, useState} from "react";


import ProductContext from "../store/Product-Context";



const Input = ()=>{


    const [medName, setMedName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const productcntxt = useContext(ProductContext);
    

    function addToCartHandler(){
        let temp = {medName: medName, description: description, price: price, quantity: quantity };
        productcntxt.addItem(temp);
        

    }

    return (
        <div className="container">
            <label>Medicine Name</label>
            <input type="text" className="" defaultValue={''} onChange={(e) => setMedName(e.target.value) }/>

            <label>Description</label>
            <input type="text" className="" defaultValue={''}  onChange={(e) => setDescription(e.target.value)}/>

            <label>Price</label>
            <input type="number" className="" defaultValue={0} onChange={(e) => setPrice(e.target.value)}/>

            <label>Quantity</label>
            <input type="number" className="" defaultValue={0} onChange={(e) => setQuantity(e.target.value)}/>

            <label>Add to store</label>
            <input type="button" className=""  value={'Add to store'} onClick={addToCartHandler}/>
        
        
        </div>
       

    )
};


export default Input;