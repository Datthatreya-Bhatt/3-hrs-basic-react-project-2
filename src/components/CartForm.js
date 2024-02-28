import React, { useContext } from "react";
import CartContext from "../store/Cart-Context";

const CartForm = () => {
    const cartCntxt = useContext(CartContext);

    return (
        <div className={`offcanvas ${cartCntxt.cartOpen ? 'offcanvas-end show' : ''}`} tabIndex="-1" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">Cart Items</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>cartCntxt.setCartOpen(false)}></button>
            </div>



            <div className="offcanvas-body d-flex flex-column">
                {cartCntxt.arr.map((element, i) => (
                    <div key={i} className="p-2">
                        <ul>
                            <li><strong>{element.medName}</strong> {element.description} <strong>Price:</strong> {element.price} <strong>Quantity:</strong> {element.quantity}</li>
                        </ul>
                    </div>
                ))}
                <div className="p-2">
                    <h4>Total Amount: {cartCntxt.totalAmount}</h4>
                    <button className="btn btn-primary btn-sm me-3" onClick={() => cartCntxt.setCartOpen(false)}>Close</button>
                    <button className="btn btn-primary btn-sm me-3" onClick={() => { cartCntxt.setArr([]); alert('Thanks for your purchase!'); cartCntxt.setTotalAmount(0) }}>Buy</button>
                </div>
        </div>


        </div>
    );
};

export default CartForm;
