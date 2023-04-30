import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';
import { Routes,Switch, Route, Redirect } from 'react-router-dom';
import routes from './AppRouter';
import NotImplement from './NotImplement';
function Footer() {
    
    return (
        <footer>
        <div class="footerStyle">
          <div class="footerText">
            <p>
            
              <Link to={routes.NotImplement} class="my-link">
                    Contact Us
              </Link>
           
              
            </p>
          </div>
          <div class="footerText">
            <p>
            <Link to={routes.NotImplement} class="my-link">
                
                Site Map
              </Link>
            </p>
          </div>
          <div class="footerText">
            <p>
            <Link to={routes.NotImplement} class="my-link">
                Privacy Policy
              </Link>
            </p>
          </div>
          <div class="footerText">
            <p>
            <Link to={routes.NotImplement} class="my-link">
                Careers
              </Link>
            </p>
          </div>
          <div class="footerText">
            <p>
            <Link to={routes.NotImplement} class="my-link">
                Reviews
              </Link>
            </p>
          </div>
          <div class="footerText">
            <p>
              Designed by Jacky
            </p>
          </div>
        </div>
      </footer> 
      
    );
  }
  
  export default Footer;