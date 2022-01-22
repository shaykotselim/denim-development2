import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart, } from '@fortawesome/free-solid-svg-icons'

import './Finish.css'


const Finish = (props) => {
    // console.log('clicked');
    const {img, name, cost, factory, style, country, buyer, color}= props.finish
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    
    
    return (
        <div className='card'>
         <img className='fin-image' src={img} alt="" />
                 <div className='fin-detail'>
                      <h5>Finish Name: {name}</h5>
                      <h6 className='fontcolor'>Color: {color}</h6>
                      <h5> Buyer: {buyer}</h5>
                      <h5 className='fontcolor'>Development Cost : ${cost}</h5>
                      <h5 className='fontcolor'>Product Code : {style}</h5>
                      <h5 className='fontcolor'>Vendor: {factory}</h5>
                      
                    
                      <p className='fontcolor'>Develop by country in {country}</p>
                 </div>
                 <button 
                 onClick={() => props.handleAddToCart(props.finish)}
                 className='purches-button'> {element} Add To Cart</button>
                 
        </div>
    );
};

export default Finish;