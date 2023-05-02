import React from 'react';
import logo from './assets/images/logo.png';
import { useState,useEffect } from 'react';

import { Link } from 'react-router-dom';
import cartimage from './assets/images/cart.png';
import routes from './AppRouter';
import './index.css'

function Header() {
  const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem("cart") || "[]"));
  let sum=0;
  

  
    const headerStyle={
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'};
    
    const headerTitle={
        fontSize: '40px',
        fontFamily:'Catamaran',
        marginLeft: '50px'
    }
    const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].quantity;
    }
    setTotalQuantity(sum);
  }, [cart]);

    return (
        
      <header style={headerStyle} >
        
        <Link to={routes.home} className="my-link" >
        <div className="logo">
          <img src={logo}alt="image_description"/>
        </div>
      </Link>
        
          
        <div className="headerTitle">
          <p style={headerTitle}>Scotty Shirts U Illustrate(SSUI)</p>
        </div>
        <div className="shoppingCar"  >
          <Link className="shoppingCar" to={routes.ShoppingCart} >
            
            <img src={cartimage} alt="image_description"  className="car" />
              
            
          </Link> 
          <p>{totalQuantity}</p>
        </div>
        
      </header>
    );
  }
  
  export default Header;