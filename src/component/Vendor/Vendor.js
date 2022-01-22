import React, { useEffect, useState, } from 'react';
import Cart from '../Cart/Cart';
import Finish from '../Finish/Finish';
import './Vendor.css';

const Vendor = () => {
  const [finishs, setFinishs] = useState([])
  const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('./finish.JSON')
        .then(res=> res.json())
        .then( data => setFinishs(data))
    },[])
    
    const handleAddToCart = (finish) =>{
        const newCart = [...cart, finish]
        setCart(newCart);
    }
    return (
        <div className='vendor-container'>
               
                <div className='card-container'>
                    <div>
                      {
                          finishs.map(finish => <Finish
                           key = {finish.key}
                          finish = {finish}
                          handleAddToCart={handleAddToCart}
                          ></Finish>)
                      }
                       
                    </div>
                </div>
                <div>
                    <Cart
                    cart={cart}
                    ></Cart>
                </div>
        </div>
    );
};

export default Vendor;