import React from 'react';
import logo from './assets/images/logo.png';
import cart from './assets/images/cart.png';
import { Link } from 'react-router-dom';
import routes from './AppRouter';
import './index.css'

function Header() {
    const headerStyle={
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'};
    const cartStyle={
        width: '80px',
        height: '60px',
        marginLeft: '50px',
        border:'none',
        backgroundColor: '#c51230',
        display:'inline-flex',
    }
    const headerTitle={
        fontSize: '40px',
        fontFamily:'Catamaran',
        marginLeft: '50px'
    }
    

    return (
        
      <header style={headerStyle} >
        
        <Link to={routes.home} class="my-link">
        <div class="logo">
          <img src={logo}alt="image_description"/>
        </div>
      </Link>
        
          
        <div class="headerTitle">
          <p style={headerTitle}>Scotty Shirts U Illustrate(SSUI)</p>
        </div>
        <div class="shoppingCar"  >
          <Link class="shoppingCar" to={routes.ShoppingCart} >
            
            <img src={cart} alt="image_description"  class="car" />
              <p>0</p>
            
          </Link> 

        </div>
        
      </header>
    );
  }
  
  export default Header;