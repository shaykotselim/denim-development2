import React from 'react';
import './Cart.css';
const Cart = (props) => {
    console.log(props.cart)
    const {cart} = props;
    
    
    let total = 0;
    for(const selim of cart){
        total = total + selim.cost
    }
        const shippin = 15;
        const tax = (total + shippin) *0.10;
    return (
        <div>
            <h3> Order Summary </h3>
            <div className='cart-container'>
                <div className='cartname'>
                <h3>Added Total Finish : </h3>
                <p> Finish Cost : </p>
                <p> Per finish Vat : </p>
                <h3>Total Cost : </h3>
                </div>
                <div className='cartprice'>
                    <h3>{props.cart.length}</h3>
                    <p>${total}</p>
                    <p>${shippin}</p>
                    <h3>{tax.toFixed(2)}</h3>
                </div>
            </div>
                <button className='confrimbtn'>Confrim Order</button>
        </div>
    );
};

export default Cart;