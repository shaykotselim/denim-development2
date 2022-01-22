import React from 'react';
import './Header.css';
import logo  from '../../image/images-removebg-preview.png';

const Header = () => {
    return (
        <div>
            <header >
                   <div className='header-container'>
                   <div className='image'>
                            <img src={logo} alt="" />
                    </div>
                    <div className='header-text'>
                        <h1> Denim Development - 2022!!</h1>
                         <h3>Seasone : spring-2023 </h3>
                         <h2>Research And Development(R & D) </h2>
                         <h3>Budjet : : $100000</h3>
                    </div>
                   </div>
                   <div>
                       <nav >
                           <a href="">Menu</a>
                           <a href="">Spring - 2023</a>
                           <a href="">Fall - 2024</a>
                       </nav>
                   </div>
                   <div className='search-input'> 
                       <input className='input' placeholder='Search your vendor hear....' type="text" />
                   </div>
            </header>
        
        </div>
    );
};

export default Header;